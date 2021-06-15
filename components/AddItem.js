import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const {v4: uuidV4} = require('uuid');

const AddItem = props => {
  const {onNewItem} = props;
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Add ITEM..."
        style={styles.input}
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          const newItem = {
            id: uuidV4(),
            text: text,
          };

          onNewItem(newItem);
          Keyboard.dismiss();
          setText('');
        }}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add ITEM
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
