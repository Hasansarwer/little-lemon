import { useEffect, useState, useCallback, useMemo } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  SectionList,
  SafeAreaView,
  StatusBar,
  Alert
 } from 'react-native';
 import { Searchbar } from 'react-native-paper';
 import { dbounce } from 'lodash.debounce';
//  import {
//   createTable,
//   getMenuItems,
//   saveMenuItems,
//   filterQueryAndCategroies,
//  } from './database';
 import Filters from './components/Filters';
//  import { getSectionListData, useUpdatEffect } from './utils';

 const API_URL =
  'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json';
const sections = ['Appetizers', 'Salads', 'Beverages'];

const Item = ({ title, price}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.price}>{price}</Text>
  </View>
);

export default function App() {
  const [data, setData] = useState([]);
  const [searchBarText, setSearchBarText] = useState('');
  const [query, setQuery] = useState('');
  const [filterSelections, setFilterSelections] = useState(
    sections.map(()=> false)
  );

  const handleSearchChange = (text) => {
    setSearchBarText(text);
    debouncedLookup(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search"
        placeholderTextColor={'white'}
        onChangeText={handleSearchChange}
        value={searchBarText}
        style ={styles.searchBar}
        iconColor= 'white'
        inputStyle={{color: 'white'}}
        elevation={0}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : StatusBar.currentHeight,
    backgroundColor: '#495E57'
  },
  SectionList: {
    paddingHorizontal: 16,
  },
  searchBar: {
    marginBottom: 24,
    backgroundColor: '#495E57',
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
});
