import { forSlideLeft } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';
import {Dimensions, StyleSheet} from 'react-native';

const SCREEN_WIDTH = Dimensions.get("window").width;
const overlayColor = "#404040EB";

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    
    container2:{
      backgroundColor:"#F5F5F5",
      padding:"8%",
    },
  
    topcontainer:{
      flexDirection:"row",
      marginTop:"5%",
    },
    flash:{
      fontSize:10,
      color:"#FFFFFF",
      textAlign:"left",
    },
    imgcontainer:{
      alignSelf:"flex-start",
      marginRight:"2%",
      marginLeft:"2%",
    },
    topOverlay: {
      flex: 1,
      height: SCREEN_WIDTH,
      width: SCREEN_WIDTH,
      backgroundColor: overlayColor,
    },
  
    bottomOverlay: {
      flex: 1,
      height: SCREEN_WIDTH,
      width: SCREEN_WIDTH,
      backgroundColor: overlayColor,
    },
  
    leftAndRightOverlay: {
      height: SCREEN_WIDTH*0.65,
      width: SCREEN_WIDTH,
      backgroundColor: overlayColor
    },
    producttext:{
      textAlign:'center',
      fontSize:14,
      marginBottom:"7%",
    },
    inputcontainer:{
      borderRadius:5,
      borderColor:"#E3E3E3", 
      fontSize:14,
      letterSpacing:2,
      borderWidth:1,
      justifyContent:"center",
      padding:10,
      alignSelf:"center",
      width:"90%",
      fontFamily:"Proxima Nova",
    },
    confirmbutton: {
      alignSelf:"center",
      marginTop:"8%",
      width: '45%',
      borderRadius: 4,
    },
    scannerimg:{
      height:"100%",
      width:"65%"
    }
  
  });

  export default styles;