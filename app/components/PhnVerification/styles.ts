import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Proxima Nova',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
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
  mobilecontainer: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: '20%',
  },
  inputcontainer: {
    borderRadius: 5,
    borderColor: '#D6D6D6',
    fontSize: 20,
    letterSpacing: 2,
    borderWidth: 1,
    marginRight: 30,
    justifyContent: 'center',
    padding: 10,
  },

  acccontainer: {
    fontSize: 12,
    color: '#848685',
    textAlign: 'left',
  },

  signuptext: {
    fontSize: 16,
    color: '#139A5B',
    textAlign: 'left',
    marginLeft: 15,
    fontWeight: 'bold',
  },

  signupcontainer: {
    flexDirection: 'row',
    paddingTop: '10%',
    alignSelf: 'center',
  },

  otpcontainer: {
    flexDirection: 'row',
    paddingTop: '10%',
    marginLeft: '20%',
  },
  otpbutton: {
    alignSelf: 'center',
    paddingTop: '20%',
    width: '45%',
  },
  borderStyleBase: {
    width: 30,
    height: 45,
    borderRadius: 5,
    borderColor: '#D6D6D6',
    fontSize: 20,
    letterSpacing: 2,
    borderWidth: 1,
    marginRight: 30,
    justifyContent: 'center',
    padding: 10,
  },

  borderStyleHighLighted: {
    borderColor: '#D6D6D6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});

export default styles;
