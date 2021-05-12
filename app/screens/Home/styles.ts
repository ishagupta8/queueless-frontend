import { StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
  itemStyle: {
    borderRadius: 2,
    borderColor: '#FDFDFD',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 8,
  },

  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 8,
  },
  welcomeText: {
    color: '#0DB165',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 10,
    marginLeft: 5,
  },
  storeAdd: {
    color: '#848685',
    fontSize: 10,
    padding: 3,
  },
  storeDis: {
    color: '#5F5F5F',
    fontSize: 10,
  },
  statusStyle: {
    color: '#0DB165',
    fontSize: 10,
    padding: 3,
    marginLeft: 75,
  },
  storeText: {
    fontWeight: 'bold',
    marginVertical: 12,
    paddingLeft: 8,
    fontSize: 14,
  },
  locImg: {
    padding: 5,
    marginHorizontal: 3,
  },
  bottomNav: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#0000001F',
    borderRadius: 1,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginHorizontal: 4,
    // marginTop: 12,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  HomeButton: {
    padding: 5,
    marginHorizontal: 10,
    marginRight: 110,
  },
  CartButton: {
    padding: 5,
    alignItems: 'center',
    marginHorizontal: 10,
    marginRight: 100,
  },
  ListButton: {
    padding: 5,
    alignItems: 'center',
  },
  HomeText: {
    fontSize: 8,
    color: '#0DB165',
  },
  CartText: {
    fontSize: 8,
    color: '#848685',
  },
  ListText: {
    fontSize: 8,
    color: '#848685',
  },
});

export default styles;
