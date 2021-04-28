import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:"Proxima Nova",
    backgroundColor:"#ffffff",
    alignItems:'center',
    justifyContent:"center",
    padding:20,
  },

  imgcontainer: {
    marginTop:'10%',
    height: '80%',
    width: '100%',
  },
  textcontainer :{
    color: "#2CC980",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",

  },
  mobilecontainer: {
    textAlign: "center",
    fontSize: 18,
    marginTop:'20%',
  },
  inputcontainer:{
    borderColor:"#D6D6D6", 
    alignSelf:"center",
    fontSize:20,
    letterSpacing:2,
    borderWidth:1,
    width:"25%",
    padding:10,
    borderRadius:5,
    marginRight:10,
    },

  inputcontainer1:{
    borderRadius:5,
    borderColor:"#D6D6D6", 
    width:"55%",
    alignSelf:"center",
    fontSize:20,
    letterSpacing:2,
    borderWidth:1,
    padding:10,
  },

//   acccontainer:{
//     fontSize:12,
//     color:"#848685",
//     textAlign:"left",
//   },

//   signuptext:{
//     fontSize:16,
//     color:"#139A5B",
//     textAlign:"left",
//     marginLeft:15,
//     fontWeight:"bold"
// },

signupcontainer:{
flexDirection:'row',
paddingTop:"10%",
marginLeft:"20%",
},
otpbutton: {
  alignSelf:'center',
  width: '45%',
  marginTop:"30%",
},
});

export default styles;