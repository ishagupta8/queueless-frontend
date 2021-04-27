import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    fontFamily:"Proxima Nova",
    backgroundColor:"#ffffff",
  },

  imgcontainer: {
    marginTop:20,
    height: '60%',
    width: '100%',
  },
  textcontainer :{
    color: "#2CC980",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop:20,
    
  },
  mobilecontainer: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:'40%',
    marginBottom:'15%',

  },
  inputcontainer:{
  marginTop:5,
  borderBottomWidth:1,
  borderColor:"#ACE894",
  marginBottom:"20%",
  },

  acccontainer:{
    fontSize:12,
    color:"#848685",
    textAlign:"left",
  },

  signupcontainer:{
    fontSize:16,
    color:"#139A5B",
    textAlign:"left",
}
});

export default styles;