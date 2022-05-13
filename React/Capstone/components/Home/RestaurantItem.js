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
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurant=[
    {
        name:"Beachside Bar",
        image_url:
        "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        price:"$$",
        review_count:1244,
        rating:4.5,
        categories: [
            {
                "alias": "seafood",
                "title": "Seafood"
            },
            {
                "alias": "mediterranean",
                "title": "Mediterranean"
            },],
    },
    {
        name:"Benihana",
        image_url:
        "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        price:"$$",
        review_count:1244,
        rating:3.5,
        categories: [
            {
                "alias": "seafood",
                "title": "Seafood"
            },
            {
                "alias": "mediterranean",
                "title": "Mediterranean"
            },],
        },
    {
        name:"Go to the Moon",
        image_url:
        "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        price:"$$",
        review_count:1644,
        rating:4.7,
        categories: [
                        {
                            "alias": "seafood",
                            "title": "Seafood"
                        },
                        {
                            "alias": "mediterranean",
                            "title": "Mediterranean"
                        },],
        },
];

export default function RestaurantItem({navigation,...props}){
        return(
        <>
            {props.restaurantData.map((restaurant,index)=>(
                <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    style={{marginBottom:5}}
                    onPress={()=>navigation.navigate("RestaurantDetail",{  //The route
                        name:restaurant.name,
                        image:restaurant.image_url,
                        prices:restaurant.price,
                        reviews:restaurant.review_count,
                        rating:restaurant.rating,
                        categories:restaurant.categories,
                        id:restaurant.id
                    })}
                >
                    <View
                        style={{
                            marginTop:10,
                            padding:15,
                            backgroundColor:"white",
                        }}>
                            <RestaurantImage image={restaurant.image_url}/>
                            <RestaurantInfo
                                name={restaurant.name}
                                rating={restaurant.rating}/>
                        </View>
                    </TouchableOpacity>
                ))}
        </>
    );
}

const RestaurantImage =(props) =>(
    <>
    <Image
     source={{
        uri:props.image
        }}
     style={{width:"100%",height:180}}
    />
    <TouchableOpacity style={{position:"absolute",right:20,top:20}}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff"/>
     </TouchableOpacity>
     </>
);

const RestaurantInfo=(props)=>(
    <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:10,
        }}>
        <View>
              <Text style={{fontSize:15,fontWeight:"bold"}}>{props.name}</Text>
              <Text style={{fontSize:13,color:"gray"}}>30-45 min</Text>
        </View>
        <View style={{
          backgroundColor:"#eee",
          height:30,
          width:30,
          alignItems:"center",
          justifyContent:"center",
          borderRadius:15,
          }}>
            <Text>{props.rating}</Text>
        </View>
    </View>
);