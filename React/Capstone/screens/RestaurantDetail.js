import React,{useState,useEffect} from 'react';
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
import {Divider} from "react-native-elements";
import About from "../components/restaurantdetail/About";
import MenuItem,{foods} from "../components/restaurantdetail/MenuItem";


export default function RestaurantDetail({route,navigation}){

    const {name,image,price,review_count,rating,categories,id} = route.params;

    const [reviews, setReviews] = useState(foods);
    const [restaurantID,setRestaurantID] = useState(id)
    const YELP_API_KEY=
    "z7NfbQFAF19MUNsP3H2YWyQPJWw_IHszqVzRR1CP5iy7TFAgBudFe6HYYnQBCvYxIlwr5NqGkjUPDHac0nas73k9Oi64d_vGxxJVmXtZ9s_RwxrlMSiYZxR4EHR7YnYx";

    const getReviewsFromYelp=()=>{
            const yelpUrl =
            `https://api.yelp.com/v3/businesses/${restaurantID}/reviews`;

        const apiOptions={
            headers:{
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

    return fetch(yelpUrl,apiOptions)
                .then((res)=>res.json())
                .then((json) =>
                    setReviews(
                        json.reviews?json.reviews:reviews
                )
            );
        };


    useEffect(() => {
        getReviewsFromYelp();
  }, [restaurantID]); //get a new id,refresh


    return(
        <View>
            <About route={route}/>
            <Divider width={1.8} style={{marginVertical:20}}/>
            <MenuItem reviews={reviews}/>

        </View>
    );
}