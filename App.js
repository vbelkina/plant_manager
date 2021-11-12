import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import ImageSlider from 'react-native-image-slider';

import PlantSearch from './components/PlantSearch';
import PlantsSeen from './components/Plant1';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            //options={{ title: 'Welcome' }}
            options={{ headerShown: false }}
          />
  
          <Stack.Screen name="PlantSearch" component={PlantSearch} />
          <Stack.Screen name="PlantsSeen" component={PlantsSeen}/>
        
        </Stack.Navigator>
      </NavigationContainer>
 
    );
  };

  const HomeScreen = ({ navigation }) => {

    const images = [
      'https://www.gardeningknowhow.com/wp-content/uploads/2020/07/wildflower-staking.jpg',
      'https://www.thespruce.com/thmb/gT3UIvgockUudEPwoHDxYKK6Yv4=/4288x2412/smart/filters:no_upscale()/types-of-wildflowers-4061772-hero-4f093bf89ec94cd9ac766a4e0465238d.jpg',
      'https://afar-production.imgix.net/uploads/images/afar_post_headers/images/vG2KoGqNZ7/original_california_20wildflowers-antelope_20valley.jpg',
      'https://hips.hearstapps.com/hbu.h-cdn.co/assets/15/30/1437681387-daisy-fun-facts.jpg',
      'https://www.adorama.com/alc/wp-content/uploads/2017/01/mezz_wildflowers.jpg',
    ];
  
    return (
      <View style = {{backgroundColor: '#c7d4c7', flex:1}}>
        <View style={{ flexDirection: 'row',
                       margin:25,
                       padding:10,
                       justifyContent: 'space-evenly'}}>
          <Button
            title="Search Plants"
            color='#b8b8c1'
            onPress={() =>
              navigation.navigate('PlantSearch')
            }
          />
  
          <Button
            title="Plants I've Seen"
            color='#b8b8c1'
            onPress={() =>
              navigation.navigate('PlantsSeen')
            }
          />
        </View>
        <View style={{alignItems:'center'}}><Text>WELCOME! You can store your favourite plants that you have seen around the world here!</Text></View>
  
        <ImageSlider
            loopBothSides
            autoPlayWithInterval={5000}
            images={images}
            style={{height:400, width:'100%'}}
          />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    forImages: {
      width: 300,
      height: 300
    }
  });
  
  export default MyStack;