import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headings: {
    flex: 1,
    flexDirection: 'row',
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
  itemsText: {
    color: '#5F5F5F',
    fontFamily: 'Proxima Nova',
    fontSize: 12,
    lineHeight: 24,
  },
  priceQtyText: {
    color: '#5F5F5F',
    fontFamily: 'Proxima Nova',
    fontSize: 12,
    lineHeight: 20,
  },
  amountText: {
    color: 'black',
    fontFamily: 'Proxima Nova',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 20,
  },
});

export default styles;
