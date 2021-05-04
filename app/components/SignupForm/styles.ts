import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:"Proxima Nova",
    backgroundColor:"#ffffff",
    justifyContent:"center",
  },

  imgcontainer: {
    marginTop:"5%",
    marginBottom:"5%",
    height: '100%',
    width: '100%',
  },

  textcontainer :{
    color: "#2CC980",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom:"5%",
    marginTop:"5%",
  },
  
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
    marginBottom:"2%",
    fontFamily:"Proxima Nova",
  },

  signupform:{
      flexDirection:"row",
  },
  submitbutton: {
    alignSelf:"center",
    marginTop: '2%',
    width: '45%',
    borderRadius: 4,
  },

});

export default styles;