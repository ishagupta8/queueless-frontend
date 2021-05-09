import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  storeDetailsView: {
    flex: 1,
    flexDirection: 'row',
    margin: '5%',
  },
  storeFirst: {
    width: '50%',
  },
  storeSecond: {
    width: '50%',
    alignItems: 'flex-end',
  },
  storeName: {
    color: '#000000',
    fontFamily: 'Proxima Nova',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 23.51,
  },
  storeAddress: {
    color: '#9A9A9A',
    fontFamily: 'Proxima Nova',
    fontSize: 10,
    lineHeight: 20,
  },
  gstText: {
    color: '#000000',
    fontFamily: 'Proxima Nova',
    fontSize: 10,
    lineHeight: 20,
  },
  dateTimeText: {
    color: '#5F5F5F',
    fontFamily: 'Proxima Nova',
    fontSize: 10,
    lineHeight: 20,
  },
  mainInvoiceView: {
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  headings: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10,
  },
  itemsHeading: {
    width: '55%',
  },
  priceHeading: {
    width: '15%',
    alignItems: 'center',
  },
  quantityHeading: {
    width: '15%',
    alignItems: 'center',
  },
  amountHeading: {
    width: '15%',
    alignItems: 'flex-end',
  },
  headingsText: {
    color: '#0DB165',
    fontFamily: 'Proxima Nova',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 24,
  },
  allItemsView: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEDE',
  },
  totalView: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEDE',
  },
  itemTotalText: {
    color: '#000000',
    fontFamily: 'Proxima Nova',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 24,
  },
  taxesText: {
    color: '#5F5F5F',
    fontFamily: 'Proxima Nova',
    fontSize: 12,
    lineHeight: 24,
  },
  grandTotaLText: {
    color: '#000000',
    fontFamily: 'Proxima Nova',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 24,
  },
  modeView: {
    paddingBottom: 20,
  },
  modeText: {
    color: '#5F5F5F',
    fontFamily: 'Proxima Nova',
    fontSize: 10,
    lineHeight: 20,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '5%',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
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
