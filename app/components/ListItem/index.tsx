import React from 'react'
import { View, Text, Button, StyleSheet, Pressable, Image } from 'react-native'
import styles from './styles';

const ListItem = (props) => {
    return(
        <View style={[ { margin: 8, padding: 8}, styles.item]}>
            <Text>{props.item}</Text>
            <Pressable onPress={() => props.delete(props.item)}>
              <Image
                source={require('../../assets/delete.png')}
              />
            </Pressable>
        </View>
    )
}


export default ListItem;