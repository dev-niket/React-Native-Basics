/*
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[name,setName] = useState('A')

  const clickHandler = () => {
    setName('B')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.bigBlue}>Welcome to react native</Text>
      <Text style={styles.setColorWhite}>Open up App.js to start working on your app!</Text>

      <Text style={styles.setColorWhite}>My name is {name}</Text>
      <Text></Text>
      <Button title='Update Name' onPress={clickHandler}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxStyle : {
    width: 50, height: 50, backgroundColor: 'powderblue'
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  setColorWhite: {
    color: 'white'
  }
});
/*


/*
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name,setName] = useState('abdul')
  const [person, setPerson] = useState({name: 'tanveer', age: 123})

  const clickHandler = () => {
    setName('ansari')
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>his name is {person.name} and his age is  {person.age}</Text>
      <TextInput style={styles.input}
      placeholder = 'enter name'/>
      <Button title = 'update state'  onPress = {clickHandler}/>
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

  boxStyle : {
    width: 50, height: 50, backgroundColor: 'powderblue'
  },
  input: {
    border: '1px solid',
    borderColor: 'blue',
    padding: 8,
  }
});
*/

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [people, setPeople] = useState(
    [
      { name: 'Name A', key: '1' },
      { name: 'Name B', key: '2' },
      { name: 'Name C', key: '3' },
      { name: 'Name D', key: '4' },
      { name: 'Name E', key: '5' },
      { name: 'Name F', key: '6' },
      { name: 'Name G', key: '7' },
      { name: 'Name H', key: '8' },
      { name: 'Name I', key: '9' },
      { name: 'Name J', key: '10' },
      { name: 'Name K', key: '11' },
      { name: 'Name L', key: '12' },
      { name: 'Name M', key: '13' },
      { name: 'Name N', key: '14' },
      { name: 'Name O', key: '15' },

    ]
  )

  return (
    <View style={styles.container}>
    <ScrollView>
      {
        people.map((item) => {
          return (
            <View key={item.key}>
              <Text style = {styles.item}>{item.name}</Text>
            </View>
          )
        }
        )}
        </ScrollView>

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

  boxStyle: {
    width: 50, height: 50, backgroundColor: 'powderblue'
  },
  input: {
    border: '1px solid',
    borderColor: 'blue',
    padding: 8,
  },
  item: {
    marginTop: 24, 
    padding: 30, 
    height: 30 ,
    backgroundColor: 'pink',
    fontSize: 24,
  }
});