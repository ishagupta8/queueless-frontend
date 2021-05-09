import { StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 5,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: '100%',
  },
  radioBtnContainer: {
    width: '10%',
    paddingTop: 3,
  },
  addressConatainer: {
    width: '70%',
  },
  editDeleteContainer: {
    width: '20%',
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 12,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  addtext: {
    fontSize: 14,
    color: '#5F5F5F',
  },
  delimg: {
    marginRight: '15%',
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
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
  },
  Addressbutton: {
    flexDirection: 'row',
    width: '92%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginHorizontal: 16,
    marginTop: '4%',
  },
  addresstext: {
    color: '#0DB165',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: '20%',
    marginTop: '5%',
  },
});

export default styles;
