import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addListItem, removeListItem } from "../../redux/Actions/listActions";
import ListItem from "../ListItem";
import styles from "./styles";


const ShopList = () => {
  const lists:string[]=[];
  const [text, setText] = useState('');
  const [list, setList] = useState(lists);
  const dispatch = useDispatch();
  const viewList = useSelector((state:any) => state.shoplist);
  console.log(viewList);
  // ADD ITEM METHOD
  const addItem = () => {
    //const updatedList:string[] = list;
    //updatedList.push(text);
    dispatch(addListItem(text));
    //setList(updatedList);
    setText("");
  };

  // DELETE ITEM METHOD
  const deleteItem = (index) => {
    dispatch(removeListItem(index));
    // const updatedList = list.filter((todo) => todo !== index);
    // setList(updatedList);
  };

  return (
    <>
    {console.log(viewList)}
    <View style={styles.container}>
      <ScrollView>
        {viewList.map((x, index) => (
          <ListItem key={index} item={x} index={index} delete={deleteItem} />
        ))}
      </ScrollView>
      <View>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <View style={styles.submitbutton}>
        <Button title="Add item" color="#0DB165" onPress={addItem} /> 
        </View>
        {/* <Pressable  onPress={() => addItem()}>
        <Text>Add Items</Text>
      </Pressable> */}
      </View>
    </View>
    </>
  );
};


export default ShopList;