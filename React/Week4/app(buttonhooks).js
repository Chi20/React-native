import React, { useState } from "react";
import { Image,View,Pressable,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import users from './user.js'
var p = users

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [flag,setFlag] = useState(null)
  const [data,setdata] = useState(p)  
  let text = 'Expand';
  if(flag&&selectedId){text='Collapse';}

  const  Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.login}</Text>
      { (item.id===selectedId)  && flag && <View>
        <Image source={{uri: `${item.avatar_url}`}}
       style={{width: 50, height:50}} />
        <Text style={styles.detail}> {item.followers_url}</Text>
        <Text style={styles.detail}>{item.repos_url}</Text>
        </View> }

       {(item.id===selectedId)&&<TouchableOpacity
         style={styles.button}
         onPress={
             ()=>{
              setFlag(!flag)
             }
         }
       >
        <Text style={styles.expand}>{text}</Text>
       </TouchableOpacity>}

       {(item.id===selectedId)&&!flag&&<TouchableOpacity
         style={styles.button}
         onPress={
             ()=>{
                 var pp = data.filter((elem)=>{return elem['login']!=item.login});
                 p = pp;
                 setdata(p);
             }
         }
       >
        <Text style={styles.remove}>Remove</Text>
       </TouchableOpacity>}

    </TouchableOpacity>
  );




  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      
      <Item
        item={item}
        onPress={() => {[setSelectedId(item.id),setFlag(null)]}}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
     
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  detail: {
    fontSize: 15,
    color:'white'
  },
  expand:{
    fontsize:17,
    color:'lightblue',
    width:60,
    textAlign:'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'yellow',

  },
  remove: {
    fontSize: 16,
    color:'pink',
    width:60,
    textAlign:'center',
    alignSelf:'flex-end',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'red',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default App;