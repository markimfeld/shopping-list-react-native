import React, {useState, useEffect} from 'react';
import {View, Alert, FlatList, StyleSheet, Platform} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
const {v4: uuidV4} = require('uuid');

export const baseUrl =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:5000/'
    : 'http://localhost:5000/';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidV4(), text: 'Milk'},
    {id: uuidV4(), text: 'Eggs'},
    {id: uuidV4(), text: 'Bread'},
    {id: uuidV4(), text: 'Juice'},
  ]);
  // const [items, setItems] = useState([]);
  // console.log(items);

  // useEffect(() => {
  //   fetch(baseUrl + '/api/v1.0/items/')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  //       setItems(json);
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  const removeItem = id => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const addItem = newItem => {
    if (!newItem.text) {
      Alert.alert('Error', 'Please enter an item', [{text: 'OK'}]);
    } else {
      setItems(prevItems => [...prevItems, newItem]);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem onNewItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} onRemove={() => removeItem(item.id)} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
