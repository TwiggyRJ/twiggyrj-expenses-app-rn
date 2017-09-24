import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  alignRight:{
    textAlign: 'right',
  },
  item: {
    padding: 10,
    borderBottomColor: 'rgba(255,255,255,0.25)',
    borderBottomWidth: 2
  },
  itemActive:{
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  itemContainer:{
    flex: 1
  },
  itemFirst:{
    padding: 10,
    borderTopColor: 'rgba(255,255,255,0.25)',
    borderTopWidth: 2
  },
  itemRow:{
    flexDirection: 'row'
  },
  itemText: {
    color: '#fff',
    fontSize: 16
  },
  itemTitle: {
    color: '#fff',
    fontSize: 20
  },
});
