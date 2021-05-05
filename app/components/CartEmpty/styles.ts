import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent:"center",
      padding:"10%",
    },
    
    textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color:"#000000",
      },
      buttonStyle: {
        alignContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        paddingRight: 30,
        paddingLeft: 30,
        elevation: 2,
        backgroundColor:'#0DB165',
        width:"70%",
        alignSelf:"center",
        marginBottom:"10%",
        marginTop:"35%",
        },
        buttontext:{
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        },
        imgcontainer:{
          marginTop:"15%"
        }
  });

  export default styles;