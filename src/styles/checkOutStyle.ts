import { StyleSheet } from 'react-native';

const checkOutStyles = StyleSheet.create({
  ...require('./cartStyle').default, 

  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgb(177, 10, 88)',
    marginTop: 50,
    marginBottom: 10,
  },
  totalCheckoutContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 30,
  },
  totalPriceText: {
    color: 'rgb(247, 20, 88)',
    fontSize: 20,
    fontWeight: 'bold',
  },
  confirmButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(247, 20, 88)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  confirmText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default checkOutStyles;
