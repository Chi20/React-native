import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ cityHandler }){
    const [text,setText] = useState('')
    return(
        <View style={{
            marginTop:15,
            flexDirection:"row",
            alignItems:"center",
            backgroundColor:"#eee",
            borderRadius:20,
            }}>
            <View style={{marginLeft:10}}>
                <Ionicons name="location-sharp" size={24} />
            </View>

            <TextInput
                    placeholder="Search"
                    style={{
                        width:240,
                        height:50,
                        marginLeft:5,
                    }}
                    onChangeText={(inputText)=>{
                        setText(inputText);
                    }}
                />
            <TouchableOpacity onPress = {()=>{
                cityHandler(text);
              }}>
                <View style={{
                    flexDirection:"row",
                    marginRight:8,
                    backgroundColor:"white",
                    padding:9,
                    borderRadius:30,
                    alignItems:"center",

                }}>
                    <AntDesign name="clockcircle" size={11} style={{marginRight:6}}/>
                    <Text>Search</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}