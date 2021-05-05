import { StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  itemsContainer: {
    justifyContent: 'flex-start',
  },
  priceContainer: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    flex: 1,
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#5F5F5F',
    paddingBottom: 10,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
  },
  firstContainer: {
    width: '50%',
    alignItems: 'flex-start',
  },
  secondContainer: {
    width: '50%',
    alignItems: 'flex-end',
  },
  topText: {
    color: '#5F5F5F',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova',
    lineHeight: 24,
  },
  bottomText: {
    color: '#5F5F5F',
    fontSize: 12,
    fontFamily: 'Proxima Nova',
    lineHeight: 24,
  },
  totalText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova',
    lineHeight: 24,
  },
  buttonView: {
    marginBottom: 20,
    flexDirection: 'row',
    marginVertical: 8,
  },
  clearButton: {
    width: '40%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  checkoutButton: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearText: {
    fontSize: 16,
    fontFamily: 'Proxima Nova',
    fontWeight: 'bold',
    lineHeight: 23.51,
    color: '#0DB165',
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
  radioButtonView: {
    marginTop: 15,
    flex: 1,
  },
});

export default styles;
