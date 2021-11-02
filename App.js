import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, Value, Alert, TextInput, View } from 'react-native';

export default function App() {

  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [result, setResult] = useState(0);

  const buttonSum = () => {
    result => setResult(value + secondValue);
  }
  const buttonSub = () => {
    result => setResult(value - secondValue);
  }
  
  return(
    

    <View style={styles.container}>
     

      <TextInput
        style={{width:200, borderColor:'gray', borderWidth:1}}
        keyboardType='numeric'
        onChangeText={value => setValue(value)}
        value={value}
      />
      <TextInput
        style={{width:200, borderColor:'gray', borderWidth:1}}
        keyboardType='numeric'
        onChangeText={secondValue=>setSecondValue(secondValue)}
        value={secondValue}
      />
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',
      justifyContent: 'space-around'}}>
      <Button onPress={buttonSum} title="+"/>
      <Button onPress={buttonSub} title="-"/>
      </View>
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



});
