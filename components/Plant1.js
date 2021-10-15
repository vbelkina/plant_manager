import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TextInput, Button, Platform } from 'react-native';
import plantsSeen from '../assets/plantsSeen';
import { useState, useEffect }  from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';


const ListDemoScreen = () => {
  const [name,setName] = useState("")
  const [location,setLocation] = useState(null)
  const [image, setImage] = useState(null)
  const [plantLog,setPlantLog]= useState([])
  const [notes, setNotes] = useState("");
  // const [errorMsg, setErrorMsg] = useState(null);
  // const [locationText, setLocationText] = useState("");

  const DATA = plantLog.map((x) => {
    x.id = x.href
    return(x)
  })

  const Item = ({ name, location, image, notes}) => (
        <View style={styles.item}>
         {image && <Image source={{ uri: image }} style={styles.forImages} />}
        <View style={{paddingLeft:20, paddingHorizontal:10, flexDirection:'row'}}>
          <Text style={styles.title}><i style={{fontSize:18}}>Plant</i><br/>{name}<br/>
          <i style={{fontSize:18}}>Location:</i> <br/>{location}</Text>
  
          <View style={{paddingLeft:30, width:500}}>
          <Text><i>Notes:</i></Text>
          <Text>{notes}</Text>
          </View>
        </View>
        </View>
  );

//for async data storage
  useEffect(() => {getData()}
  ,[])

  //for image picker
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  //for location
  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);

  

  //image picker
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const renderItem = ({ item }) => (
    <View>
      <Item
          name={item.name}
          location={item.location}
          image={item.image}
          notes={item.notes}
          />
    </View>
  );

  let debug=false
  const debugView =
    (<View>
      <Text style={styles.headerText}>
        DEBUGGING INFO
      </Text>
      <Text>
         name is ({name})
      </Text>
      <Text>
         location is ({location})
      </Text>
      <Text>
         notes is ({notes})
      </Text>
      {/* <Text>
         image is ({image})
      </Text> */}
      <Text>
         plantLog is {JSON.stringify(plantLog)}
      </Text>
    </View>);

//store data
const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@plantLog', jsonValue)
    } catch (e) {
      console.dir(e)
    }
}

const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@plantLog')
      let data = null
      if (jsonValue!=null) {
        data = JSON.parse(jsonValue)
        setPlantLog(data)
        console.log('just set name, location, image, notes')
      } else {
        console.log('just read a null value from Storage')
        // this happens the first time the app is loaded
        // as there is nothing in storage...
        setPlantLog([])
        setName("")
        setLocation(null)
        setImage(null)
        setNotes("")
      }
    } catch(e) {
      console.dir(e)
    }
}

const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      console.dir(e)
    }
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
      <Text style={{fontSize:32,
                    backgroundColor:'#7a9d86', 
                    padding:10}}>
         Plants I've Seen!
      </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.href}
      />
      </View>
      <View style = {{flex: 1, backgroundColor: '#a9adb7'}}>
        <Text style={{fontSize:32,
                      backgroundColor:'#8d93a0', 
                      padding:10}}>
          Add More Plants!
        </Text>
        <View style = {{padding: 10}}>
        <TextInput 
          style={styles.textInput} 
          placeholder = "plant name"
          onChangeText={text => {
                   setName(text);
                 }}
            value = {name}
          />
          <TextInput 
          style={styles.textInput} 
          placeholder = "location"
          onChangeText={text => {
                   setLocation(text);
                 }}
            value = {location}
          />
          <TextInput 
          style={{borderColor:'black', fontSize:20, borderWidth: 1, height:100}} 
          placeholder = "notes"
          multiline="true"
          onChangeText={text => {
                   setNotes(text);
                 }}
            value = {notes}
          />

        <Button title="Pick an image from camera roll" onPress={pickImage} color='#d4d4d9' />


        </View>
        <Button
               title={"Record"}
               color="#c6c6cd"
               onPress = {() => {
                 const newPlantLog =
                   plantLog.concat(
                     {'name':name,
                      'location':location,
                      'image':image,
                      'notes':notes,
                      'time':new Date()
                   })
                 setPlantLog(newPlantLog)
                 storeData(newPlantLog)
                 setName("")
                 setLocation("")
                 setImage(null)
                 setNotes("")
               }}
               />
        <Button
                title={"Clear"}
                color="#b8b8c1"
                onPress = {() => {
                  clearAll()
                  setPlantLog([])
                }}
                />

    {debug?debugView: <Text></Text>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#c7d4c7', 
    flexDirection: 'row'
  },
  container1:{
    flex: 4,
  },
  item: {
    flexDirection:'row',
    flex:4,
    backgroundColor: '#9db49d',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
    alignSelf: 'center',
    width:150, 
  },
  forImages: {
    width: 125,
    height: 125,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf:'center'
  },
  textInput:{
    borderColor:'black', 
    fontSize:30, 
    borderWidth: 1
  }
});

export default ListDemoScreen;