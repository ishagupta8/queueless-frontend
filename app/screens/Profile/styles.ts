import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  detailsContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    // padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#DEDEDE',
  },
  logoutContainer: {
    width: '50%',
  },
  nameText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova',
    lineHeight: 23.51,
    marginBottom: 2,
    marginTop: 10,
  },
  numberText: {
    fontSize: 14,
    color: '#9A9A9A',
    fontFamily: 'Proxima Nova',
    lineHeight: 23.51,
    marginBottom: 2,
  },
  emailText: {
    fontSize: 18,
    color: '#5F5F5F',
    fontFamily: 'Proxima Nova',
    lineHeight: 23.51,
    marginBottom: 2,
  },
  buttonContainer: {
    backgroundColor: '#0DB165',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
