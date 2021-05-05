import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
inputcontainer:{
    borderRadius:5,
    borderColor:"#D6D6D6", 
    fontSize:14,
    letterSpacing:2,
    borderWidth:1,
    justifyContent:"center",
    padding:10,
    alignSelf:"center",
    width:"80%",
    marginTop:"3%",
    fontFamily:"Proxima Nova",
    backgroundColor:"#FFFFFF",
  },
  savebutton: {
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
    marginTop:"35%",
    },
    textStyle: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
})

export default styles;