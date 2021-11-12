import React, { useState, useEffect } from "react";
import { Button, Text, TextInput, View, FlatList, StatusBar, StyleSheet, SafeAreaView } from "react-native";

const PlantSearch = (props) => {
  const [loading,setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('');
  const [text, setText] = useState('');
  const [data,setData] = useState([]);
  const [change, setChange] = useState(false);

  const getPlantData = async (searchTerm) => {
    try{
      let result = await fetch('http://localhost:3000/plants?common_name_like='+searchTerm)
      let cdata = await result.json()
      setData(cdata)
      setLoading(false)
    }catch(e){
      console.log(`error in getPlantData: ${JSON.stringify(e)}`)
    }
  }

  useEffect(() => {
    getPlantData(searchTerm)
  }, [searchTerm]);


  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={{flex:1, fontSize:15}}>
        Common Name: {item.common_name}{'\n'}
        Symbol: {item.Symbol}{'\n'}
        Scientific Name: {item.scientific_name}{'\n'}
        Family: {item.family}</Text> 
     </View>
  )}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
      <Text style={{fontSize:32,
                    backgroundColor:'#7a9d86', 
                    padding:10}}>
         Plant Search
      </Text>
      
      {change?<FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />: <View style={styles.item}>
        <Text style={{flex:1, fontSize:25}}>None</Text>
     </View>}
     </View>

     <View style = {{flex: 1, backgroundColor: '#a9adb7'}}>
        <Text style={{fontSize:32,
                      backgroundColor:'#8d93a0', 
                      padding:10}}>Plant Name: </Text>
        <TextInput
          style={{height: 40, fontSize:30}}
          placeholder="common name"
          onChangeText={text => {setText(text)}}
        />
        <Button
        color='#b8b8c1'
        onPress={() => {
          setSearchTerm(text),
          setChange(!change)
        }}
        title={change?
        'hide plants':
        'show plants'}
      />
        
        <Text style={{textAlign:'center'}}>
        Data from: {'\n'}
        USDA, NRCS. 2021. The PLANTS Database (http://plants.usda.gov, 11/11/2021). National Plant Data Team, Greensboro, NC USA.</Text>
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
    flexDirection:'column'
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
    // borderColor: 'black',
    // borderWidth: 1,
    alignSelf:'center'
  },
  textInput:{
    fontSize:30, 
  }
});

export default PlantSearch;