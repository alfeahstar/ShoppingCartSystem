import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFF0BD', 
    paddingBottom: 20,
    paddingHorizontal: 15,
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  

  backButton: {
    backgroundColor: 'rgb(255, 255, 255)',
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: -10, 
    borderWidth: 1,
    borderColor: '#ddd',
  },

  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(177, 38, 98)',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  // Open Sign Styles
  clickHereText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
    textTransform: 'uppercase',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    paddingTop: 300,
  },

  openSignButton: {
    marginTop: 5,
    backgroundColor: 'rgb(166, 12, 79)', 
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#FFE7E7',
    shadowColor: '#A60055', 
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 8,
  },

  openSignText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },

   Hometitle: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgb(177, 10, 88)',
    marginTop: 20,
    marginBottom: 10,
  },

  scrollContainer: {
    paddingVertical: 20,
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
  },

  gridItem: {
    width: '48%', 
    backgroundColor: 'rgb(255, 198, 198)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 3, 
    borderColor: 'rgb(255, 255, 255)', 

    shadowColor: '#5D4037',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },

  cakeImage: {
    width: 130,
    height: 130,
    borderRadius: 10,
    marginBottom: 10,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },

  textContainer: {
    flex: 1,
    paddingRight: 10, 
  },

  cakeName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
  },

  cakePrice: {
    fontSize: 14,
    color: '#000',
    textAlign: 'left',
  },

  addToCartButton: {
    backgroundColor: 'rgb(225, 53, 125)',
    padding: 8,
    borderRadius: 10,
  },
  
  
  viewCartButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },

  viewCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(254, 103, 161)',
    paddingVertical: 8,
    paddingHorizontal: 7,
    borderRadius: 5,
    position: 'relative', 
    borderWidth: 1,
    borderColor: 'rgb(251, 51, 128)',
  },
  cartBadge: {
    position: 'absolute',
    top: -9,
    right: -6,
    backgroundColor: 'rgb(117, 7, 53)',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default globalStyles;