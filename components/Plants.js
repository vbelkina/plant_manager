import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Plants() {

  return (
    <View style={{flex:1, backgroundColor: '#efeff1'}}>
      <View style={styles.container}>
        <View style={styles.para} >
          <Text style={{fontSize:50}}>PLANT #1</Text>
          <Text>This is the plants page. We will be able to store information about plants we have at home here</Text>
          <Text>This is some more text about plants</Text>
          <Text>This is some more text about plants</Text>
          <Text>This is some more text about plants</Text>
          <Text>This is some more text about plants</Text>
        </View>
        <View style={{flex: 1}}>
        <Image
            style={styles.forImages}
            source={{
              uri: 'https://www.calloways.com/wp-content/uploads/fiddle-leaf-fig-tree-form-0773402761.jpg',
            }}
          />
        </View>
        <View style={styles.para} >
            <Text style={{fontSize:50}}>PLANT #2</Text>
            <Text>This is the plants page. We will be able to store information about plants we have at home here</Text>
            <Text>This is some more text about plants</Text>
            <Text>This is some more text about plants</Text>
            <Text>This is some more text about plants</Text>
            <Text>This is some more text about plants</Text>
        </View>
        <View style={{flex: 1}}>
          <Image
              style={styles.forImages}
              source={{
                uri: 'https://www.thespruce.com/thmb/B4D_VovqxAJErFAMOy2KXWY1KqY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/peperomia-plant-4584414-10-e05d776cfe614311932bc4d25f0bd768.jpg',
              }}
            />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.para} >
          <Text style={{fontSize:50}}>PLANT #3</Text>
          <Text>This is the plants page. We will be able to store information about plants we have at home here</Text>
          <Text>This is some more text about plants</Text>
          <Text>This is some more text about plants</Text>
          <Text>This is some more text about plants</Text>
          <Text>This is some more text about plants</Text>
        </View>
        <View style={{flex: 1}}>
        <Image
            style={styles.forImages}
            source={{
              uri: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2021%2F03%2F18%2FGrow-citrus-indoors-102107770.jpg',
            }}
          />
        </View>
        <View style={styles.para} >
            <Text style={{fontSize:50}}>PLANT #4</Text>
            <Text>This is the plants page. We will be able to store information about plants we have at home here</Text>
            <Text>This is some more text about plants</Text>
            <Text>This is some more text about plants</Text>
            <Text>This is some more text about plants</Text>
            <Text>This is some more text about plants</Text>
        </View>
        <View style={{flex: 1}}>
          <Image
              style={styles.forImages}
              source={{
                uri: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/at%2Fhome-projects%2F2021-03%2Fshutterstock_1119774236',
              }}
            />
        </View>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forImages: {
    width: 300,
    height: 300,
    // borderColor: 'black',
    // borderWidth: 1,
  },
  para: {
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'space-evenly'

  }
});

export default Plants;