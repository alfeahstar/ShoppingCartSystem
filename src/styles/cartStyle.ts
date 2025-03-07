import { StyleSheet } from 'react-native';

const cartStyles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    paddingBottom: 120, 
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 55,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgb(177, 10, 88)',
    marginTop: 50,
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginTop: 0,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  originalPrice: {
    marginTop: 2,
    fontSize: 14,
    color: '#888',
  },
  price: {
    fontSize: 14,
    color: '#A31D1D',
    
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  },
  totalCheckoutContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', 
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 30,
  },
  totalInfo: {
    flexDirection: 'column', 
    alignItems: 'flex-end', 
    marginRight: 15, 
  },
  totalItemsText: {
    color: '#333',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 3, 
  },
  totalPriceText: {
    color: 'rgb(247, 20, 88)',
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(247, 20, 88)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  checkoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default cartStyles;