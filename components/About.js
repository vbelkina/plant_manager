import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';
import { useState } from "react";


const About = (props) => {
  const [firstName, setFirstName] = useState('{first}');
  const [lastName, setLastName] = useState('{last}');
  const [plants, setPlants] = useState(0);
  const [background, setBackground] = useState('red')


  return (
    <View style={styles.container}>
      <Text style={styles.header}>
         About 
      </Text>
      <TextInput
          style={styles.textinput}
          placeholder="Enter your first name"
          onChangeText={text => {setFirstName(text)}}
      />
      <TextInput
          style={styles.textinput}
          placeholder="Enter your last name"
          onChangeText={text => {setLastName(text)}}
      />
      <TextInput
          style={styles.textinput}
          placeholder="Enter the number of plants you have"
          onChangeText={text => {setPlants(parseFloat(text))}}
      />

      <Text style= {{padding: 10,}}> My name is {firstName} {lastName} and I have {plants} plants. This is my favourite plant: </Text>

      <Image
          style={styles.forImages}
          source={{uri: 'https://www.calloways.com/wp-content/uploads/fiddle-leaf-fig-tree-form-0773402761.jpg'}}
      />
    </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7d4c7',
    alignItems: 'center',
   },
  header: {
    fontSize: 70, 
    color: 'green',
    fontStyle: 'italic'
  }, 
  forImages: {
    width: 300,
    height: 300,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  textinput:{
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    textAlign: 'center',
  }
});

export default About;