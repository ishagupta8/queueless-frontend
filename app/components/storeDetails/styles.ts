import { Dimensions, StatusBar, StyleSheet } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  storeContainer: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    height: SCREEN_HEIGHT,
    justifyContent: 'space-between',
  },
  storeImg: {
    alignSelf: 'center',
  },
  storeName: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  storeAddress: {
    fontSize: 10,
    color: '#848685',
  },
  storeStatus: {
    color: '#0DB165',
    fontSize: 10,
    padding: 10,
  },
  detailsContainer: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 10,
  },
  scanText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  scanImg: {
    marginBottom: 5,
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#D8D8D8',
    marginHorizontal: 10,
  },
  storebutton: {
    alignContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    elevation: 2,
    backgroundColor: '#0DB165',
    width: '45%',
    alignSelf: 'center',
    marginBottom: '20%',
    marginTop: '2%',
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mapImg: {
    padding: 30,
    alignSelf: 'center',
  },
  storeText: {
    fontSize: 14,
    color: '#848685',
  },
});

export default styles;
