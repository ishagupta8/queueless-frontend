import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    padding: 20,
    paddingBottom: 30,
    fontSize: 22,
    color: '#2CC980',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 35,
  },
  image: {
    width: '70%',
    height: '60%',
  },
  buttonStyle: {
    paddingTop: 20,
    width: '45%',
  },
  // row: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingBottom: 10,
  // },
  // footer: {
  //   fontSize: 12,
  //   color: '#848685',
  // },
  // signup: {
  //   fontSize: 16,
  //   color: '#139A5B',
  //   paddingLeft: 10,
  // },
});

export default styles;
