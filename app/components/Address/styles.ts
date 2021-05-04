import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#FFFFFF',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 14,
      fontWeight:"bold",
    },
    addtext:{
        fontSize: 14,
        color:"#5F5F5F"
    },
    editimg:{
        marginLeft:"70%",
    },
    textStyle: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      proceedbutton: {
        alignContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        paddingRight: 30,
        paddingLeft: 30,
        elevation: 2,
        backgroundColor:'#0DB165',
        width:"45%",
        alignSelf:"center",
        marginBottom:"10%",
        },
  });

  export default styles;