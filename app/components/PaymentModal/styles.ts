import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#FFFFFF",
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    alignContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#0DB165',
  },
  buttonClose: {
    backgroundColor: '#0DB165',
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  crossStyle: {
    marginLeft: '40%',
  },
  imgcontainer: {
    marginTop: '10%',
    height: '80%',
    width: '100%',
  },
  textcontainer: {
    color: '#2CC980',
    fontSize: 22,
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
    backgroundColor: '#0DB165',
    width: '45%',
    alignSelf: 'center',
    marginBottom: '10%',
    marginTop:'10%'
  },
});

export default styles;
