import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:20,
      backgroundColor:"#F5F5F5",
    },
    item: {
      padding:5,
      borderColor:"#FDFDFD",
      borderRadius:1,
    },
    
    textStyle: {
        fontSize:14,
        fontWeight: 'bold',
      },
    //   proceedbutton: {
    //     alignContent: 'flex-end',
    //     borderRadius: 5,
    //     padding: 10,
    //     paddingRight: 30,
    //     paddingLeft: 30,
    //     elevation: 2,
    //     backgroundColor:'#0DB165',
    //     width:"45%",
    //     alignSelf:"center",
    //     marginBottom:"10%",
    //     marginTop:"40%",
    //     },
    //     Addressbutton:{
    //       flexDirection:'row',
    //       width:"92%",
    //       backgroundColor:"#FFFFFF",
    //       padding: 20,
    //       marginHorizontal: 16,
    //       marginTop:"4%",

          
    //     },
    //     addresstext:{
    //       color:"#0DB165",
    //       fontSize:16,
    //       fontWeight:'bold',
    //       marginLeft:"20%",
    //       marginTop:"5%",
        
    //     }
    storeAdd:{
        color:"#848685",
        fontSize:10,
    },
    statusStyle:{
        marginLeft:"30%",
        color:'#0DB165',
        fontSize:10,
    }
  });

  export default styles;