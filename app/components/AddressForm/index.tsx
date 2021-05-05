import React from 'react'
import { useState } from 'react';
import { Button, Pressable, Text, TextInput, View } from 'react-native'
import styles from './styles';


const AddressForm = ({route}:any) => {
    const {buttonText} = route.params;
    console.log("button",buttonText);
    const [title, setTitle] = useState('');
    const [building, setBuilding] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pinCode, setPinCode] = useState('');
    return (
        <View>  
        <TextInput 
        style={styles.inputcontainer}
          placeholder="Label / Title" 
          onChangeText={input => setTitle(input)}/>
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
        
        <Pressable
              style={styles.savebutton}
              >
              <Text style={styles.textStyle}>{buttonText}</Text>
            </Pressable>
</View>
    )
}

export default AddressForm
