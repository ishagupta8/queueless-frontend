import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: '5%',
  },
  headerText: {
    fontSize: 22,
    color: '#2CC980',
    fontFamily: 'Proxima Nova',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 40,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
  },
  skipCol: {
    width: '25%',
    alignItems: 'center',
  },
  ellipseCol: {
    width: '50%',
    alignItems: 'center',
  },
  nextCol: {
    width: '25%',
    alignItems: 'center',
  },
  skipText: {
    fontSize: 16,
    color: '#139A5B',
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova',
    lineHeight: 23.51,
  },
  ellipseContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  ellipseImage: {
    marginRight: 5,
  },
  buttonContainer: {
    backgroundColor: '#0DB165',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Proxima Nova',
  },
  infoView: {
    justifyContent: 'space-between',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoEllipse: {
    marginRight: 10,
  },
  infoText: {
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Proxima Nova',
    lineHeight: 23.51,
  },
});

export default styles;
