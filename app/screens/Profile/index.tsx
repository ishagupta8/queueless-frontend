import React, { useEffect, useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { Text } from 'react-native';
import LoginButton from 'app/components/Button';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Login from '../Login';
import Entrypoint from '../../Entrypoint';

const Profile: React.FC = () => {
  const session = useSelector((state: any) => state.stores.session);
  console.log('userid', session);
  const userId = session.user;

  const [profile, setProfile] = useState();
  const [profileFlag, setProfileFlag] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [building, setBuilding] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const getProfileDetails = async () => {
      try {
        axios
          .get(
            `http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/users/${userId}`,
          )
          .then(response => {
            console.log('profile', response.data);
            setProfile(response.data),
              setName(response.data.name),
              setEmail(response.data.email),
              setPhone(response.data.phone),
              setProfileFlag(true);
          });
        console.log('**************************************');
      } catch (error) {
        console.log(error);
      }
    };
    if (!profileFlag) {
      getProfileDetails();
    }
  }, []);

  const onLogout = () => {
    try {
      axios
        .get(
          `http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/logout/`,
        )
        .then(response => {
          console.log('logout', response.data);
          if (response.data != null) {
            NavigationService.navigate('Login');
          }
        });
      console.log('**************************************');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {profileFlag && (
        <View style={styles.mainConatiner}>
          <View style={styles.detailsContainer}>
            <Image
              source={require('../../assets/profileIconLarge.png')}
              style={{ width: '80%', height: '50%' }}
              resizeMode="contain"
            />
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.numberText}>{phone}</Text>
            <Text style={styles.emailText}>{email}</Text>
          </View>
          <View style={styles.logoutContainer}>
            <Pressable
              style={styles.buttonContainer}
              onPress={() => onLogout()}>
              <Text style={styles.buttonText}>LOGOUT</Text>
            </Pressable>
          </View>
        </View>
      )}
    </>
  );
};

export default Profile;
