import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

export default function About(props){
    console.log(props.route.params)
    const {name,image,price,reviews,rating,categories,id} =
        props.route.params;

    const formattedCategories = categories.map((cat)=>cat.title).join('·');

    const description = `${formattedCategories} ${price ? ' · ' + price:""} · $$ · ${rating} · (${reviews}+)`;

    return(
        <View>
            <RestaurantImage image={image}/>
            <RestaurantName name={name}/>
            <RestaurantDescription description={description}/>
        </View>
    );
}

const RestaurantImage=(props)=>(
    <Image
        source={{uri:props.image}}
        style={{
            width:"100%",
            height:180,
        }}
    />
)
const RestaurantName=(props)=>(
    <Text style={{
        fontSize:29,
        fontWeight:"600",
        marginTop:10,
        marginHorizontal:15,
    }}>
        {props.name}
    </Text>
)

const RestaurantDescription=(props)=>(
    <Text style={{
        fontSize:15.5,
        fontWeight:"400",
        marginTop:10,
        marginHorizontal:15,
    }}>
        {props.description}
    </Text>
)