import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  orderContainer: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    marginBottom: 10,
    paddingBottom: 20,
  },
  orderRow: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#DEDEDE',
    paddingBottom: 10,
  },
  storeContainer: {
    width: '20%',
    alignItems: 'center',
  },
  detailsContainer: {
    width: '50%',
    paddingLeft: 10,
  },
  totalConatiner: {
    width: '30%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  storeName: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
    lineHeight: 23.51,
    fontFamily: 'Proxima Nova',
  },
  storeAddress: {
    fontSize: 10,
    color: '#5F5F5F',
    lineHeight: 20,
    fontFamily: 'Proxima Nova',
  },
  orderDate: {
    fontSize: 8,
    color: '#9A9A9A',
    lineHeight: 20,
    fontFamily: 'Proxima Nova',
  },
  priceText: {
    fontSize: 14,
    color: '#000000',
    lineHeight: 23.51,
    fontFamily: 'Proxima Nova',
    fontWeight: 'bold',
  },
  optionContainer: {
    backgroundColor: '#E8F5E9',
    borderRadius: 2,
    paddingHorizontal: 5,
  },
  optionText: {
    fontSize: 10,
    color: '#0DB165',
    lineHeight: 23.51,
    fontFamily: 'Proxima Nova',
  },
  invoiceRow: {
    paddingTop: 20,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  invoiceButton: {
    alignContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    elevation: 2,
    backgroundColor: '#0DB165',
    width: '45%',
    alignSelf: 'center',
  },
});

export default styles;
