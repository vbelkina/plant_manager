import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, Image} from 'react-native';

import Plants from './components/Plants';
import About from './components/About';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          //options={{ title: 'Welcome' }}
        />

        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Plants" component={Plants} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
    <View style = {{backgroundColor: 'lavender', flex:1}}>
      <View style={{ flexDirection: 'row',
                     margin:"25px",
                     border:"solid black",
                     padding:'10px',
                     justifyContent: 'space-around', }}>
        <Button
          title="About"
          color='green'
          onPress={() =>
            navigation.navigate('About')
          }
        />  

        <Button
          title="Plants"
          color='green'
          onPress={() =>
            navigation.navigate('Plants')
          }
        />
      </View>

      <View style = {{justifyContent: 'center', alignItems: 'center'}}>
          <Text> Home Screen. There will be stuff about plants and whatnot here</Text>
          <View style={{flexDirection:'row'}}>
          <Image
              style={styles.forImages}
              source={{
                uri: 'https://cdn.britannica.com/20/211920-050-8E3E17C5/flowering-dogwood-tree.jpg',
              }}
            />
          <Image
              style={styles.forImages}
              source={{
                uri: 'https://bloximages.newyork1.vip.townnews.com/greensboro.com/content/tncms/assets/v3/editorial/8/77/8776e160-e286-11eb-ba69-83c2c4f6cbf5/60eb54631e955.image.jpg?resize=1200%2C800',
              }}
            />
            <Image
              style={styles.forImages}
              source={{
                uri: 'https://www.calloways.com/wp-content/uploads/fiddle-leaf-fig-tree-form-0773402761.jpg',
              }}
            />
            <Image
              style={styles.forImages}
              source={{
                uri: 'https://hips.hearstapps.com/hbu.h-cdn.co/assets/15/30/1437681387-daisy-fun-facts.jpg',
              }}
            />
            <Image
              style={styles.forImages}
              source={{
                uri: 'https://i.pinimg.com/originals/0e/2e/c8/0e2ec83000543de204474e5e7e9ff4b1.jpg',
              }}
            />
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forImages: {
    width: 300,
    height: 300,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default MyStack;

