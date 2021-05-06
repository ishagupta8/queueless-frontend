import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    borderBottomWidth: 2,
    borderBottomColor: '#DEDEDE',
    marginBottom: 5,
  },
  imageContainer: {
    width: '20%',
    padding: 10,
  },
  detailsContainer: {
    width: '50%',
    padding: 10,
  },
  spinnerContainer: {
    width: '30%',
    padding: 10,
    alignItems: 'flex-end',
  },
  detailsText: {
    color: '#5F5F5F',
    fontFamily: 'Proxima Nova',
    fontSize: 14,
    lineHeight: 24,
  },
  priceText: {
    color: '#000000',
    fontFamily: 'Proxima Nova',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 24,
  },
  finalPriceText: {
    color: '#000000',
    fontFamily: 'Proxima Nova',
    fontSize: 12,
    lineHeight: 24,
    textAlign: 'right',
    marginTop: 5,
  },
});

export default styles;
