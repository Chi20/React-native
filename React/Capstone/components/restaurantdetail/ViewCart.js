import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

export default function ViewCart(){
    return(
    <View style={{
        flex:1,
        alignItems:"center",
        flexDirection:"row",
        position:"absolute",
        bottom:50,
        zIndex:999
    }}>
            <View style={{
                flexDirection:"row",
                justifyContent:"center",
                width:"100%",
            }}>
                <TouchableOpacity style={{
                    marginTop:20,
                    backgroundColor:"black",
                    alignItems:"center",
                    padding:13,
                    borderRadius:30,
                    width:300,
                    position:"relative",
                }}>
                    <Text style={{
                        color:"white",
                        fontSize:20
                    }}>
                    ViewCart
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}