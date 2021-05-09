import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    storeContainer: {
      padding:20,
      backgroundColor:"#F5F5F5",
      flex:1
    },
    storeImg:{
      alignSelf:"center",
    },
    storeName:{
      fontWeight:'bold',
      fontSize:22,
    },
    storeAddress:{
      fontSize:10,
      color:"#848685",
    },
    storeStatus:{
      color:"#0DB165",
      fontSize:10,
      padding:10,
    },
    detailsContainer:{
      padding:10,
      flexDirection:'row',
      backgroundColor:"#FFFFFF",
      marginHorizontal:20,
      marginTop:20,
    },
    scanText:{
      fontSize:10,
      fontWeight:"bold",
    },
    scanImg:{
      marginBottom:5,
    },
    verticleLine: {
      height: '100%',
      width: 1,
      backgroundColor: '#D8D8D8',
      marginHorizontal:10
    },
    storebutton: {
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
      marginTop:"15%",
      },
      textStyle: {
          fontSize: 16,
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
        },
        mapImg:{
          padding:30,
          alignSelf:'center',
        }

  });

  export default styles;