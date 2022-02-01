import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import  React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';


export default function Laskin({ navigation }) {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState(0);

  var tulos = 0;
  const [data, setData] = useState([]);
  var text = '';
  

  const addNumbers = () => {
    tulos = parseInt(a) + parseInt(b);
    setC(tulos);
    text = a + ' + ' + b + ' = ' + tulos;
    addHistory();
  }

  function subtractNumbers(){
    tulos = parseInt(a) - parseInt(b);
    setC(tulos);
    text = a + ' - ' + b + ' = ' + tulos;
    addHistory();
  }

  const addHistory = () => {
    setData([...data, { title: text }]);
  }


  return (
    <View style={styles.container}>
        <Text>Tulos: {c}</Text>
        <TextInput style={styles.input} keyboardType='numeric' onChangeText={input => setA(input)}></TextInput>
        <TextInput style={styles.input} keyboardType='numeric' onChangeText={input => setB(input)}></TextInput>
      <View style={styles.buttons}> 
        <View style={styles.button}>
          <Button onPress={addNumbers} title='+'/>
        </View>
        <View style={styles.button}>
          <Button onPress={subtractNumbers} title='-'/>
        </View>
      </View>
      <Button title="Historia" onPress={() => navigation.navigate('Historia', {data})}/>
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
  input : {
    marginTop: 20,
    width: 100,
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    width: '10%',
    margin: 10
  }
});
