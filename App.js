import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default function App () {
  const [inputText, setInputText] = useState('');

  const playText = () => {
    Speech.speak(inputText);
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInputStyle} onChangeText={text => setInputText(text)} value={inputText}></TextInput>
      <Button title='PRESS TO HEAR TEXT' onPress={playText}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    width: 200,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1, 
    marginBottom: 20
  }
});
