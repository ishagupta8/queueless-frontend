import React, { useState } from "react"
import { Alert, ImageBackground, Text, TextInput, View } from "react-native"
import styles from "./styles";
import LoginButton from 'app/components/Button';
import axios from "axios";
import NavigationService from "../../navigation/NavigationService";

interface Iphn {
  phnNumber:string,
}

const SignupForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [building, setBuilding] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');
  

  const RegisterUser = async () => {
    const user = {
      name: name,
      email:email,
      phone:'7355780258',
      building:building,
      street:street,
      city:city,
      state:state,
      pincode:pinCode,
    }
    console.log(user);
    try{
    const response = await axios.post(`https://qless-new.herokuapp.com/api/v1/users/register/`,user);
    console.log(JSON.stringify(response.data));

  } catch (error) {
    // handle error
    console.log(error.message);
  }
  };

  const handleFormInput = () => {
    if(!name.trim()){
    Alert.alert('* marked fields are compulsory');
    }
    else{
      RegisterUser();
    }
  }

  const handleEmail = (emailinput:any) => {
    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailinput)) {
      setEmail(emailinput);
    }
    else{
      Alert.alert('Enter Valid Email');
    }
  }
    return(
        
        <View style={styles.container}>
       <ImageBackground 
        source={require('../../assets/formbg.png')}
        style={styles.imgcontainer}
        resizeMode="contain"
        >  
      <Text style={styles.textcontainer}>Additional Details</Text>
      <View>  
        <TextInput 
        style={styles.inputcontainer}
          placeholder="Name*" 
          onChangeText={input => setName(input)}/>
        <TextInput
        style={styles.inputcontainer}
          placeholder="Email Id*"
          onBlur={input => handleEmail(input)}
          // onChangeText={input => handleEmail(input)}
        />
        <Text style={styles.textcontainer}>Address</Text>
        <TextInput
        style={styles.inputcontainer}
          placeholder="Door No. & Building Name"
          onChangeText={input => setBuilding(input)}
        />
        <TextInput
        style={styles.inputcontainer}
          placeholder="Street Name"
          onChangeText={input => setStreet(input)}
        />
        <TextInput
        style={styles.inputcontainer}
          placeholder="Area / City"
          onChangeText={input => setCity(input)}
        />
        <TextInput
        style={styles.inputcontainer}
          placeholder="State"
          onChangeText={input => setState(input)}
        />
        <TextInput
        style={styles.inputcontainer}
          placeholder="PIN Code"
          onChangeText={input => setPinCode(input)}
        />

        <View style={styles.submitbutton}>
        <LoginButton OnPress={handleFormInput()}
        title="Submit"></LoginButton>
        </View>
</View>
</ImageBackground>
</View>

    );

};

export default SignupForm;
    
    