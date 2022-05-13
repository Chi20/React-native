import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HeaderTabs from "../components/Home/HeaderTabs";
import SearchBar from "../components/Home/SearchBar";
import Categories from "../components/Home/Categories";
import BottomTabs from "../components/Home/BottomTabs";
import RestaurantItem,{localRestaurant} from "../components/Home/RestaurantItem";
import {Divider} from "react-native-elements";

export default function Home({navigation}){
    const [restaurantData,setRestaurantData] = useState(localRestaurant);
    const [city, setCity] = useState("");
    const [activeTab,setActiveTab] = useState("Delivery");
    const YELP_API_KEY=
    "z7NfbQFAF19MUNsP3H2YWyQPJWw_IHszqVzRR1CP5iy7TFAgBudFe6HYYnQBCvYxIlwr5NqGkjUPDHac0nas73k9Oi64d_vGxxJVmXtZ9s_RwxrlMSiYZxR4EHR7YnYx";

    const getRestaurantsFromYelp=()=>{
        const yelpUrl =
        `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions={
        headers:{
            Authorization: `Bearer ${YELP_API_KEY}`,
        },
    };
    return fetch(yelpUrl,apiOptions)
            .then((res)=>res.json())
            .then((json) =>
                setRestaurantData(
                    json.businesses.filter((business)=>
                        business.transactions.includes(activeTab.toLowerCase())
                    )             //Delivery & Pickup
            )
        );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
  }, [city,activeTab]); //get a new city,refresh

    return(
        <SafeAreaView style={{backgroundColor:"#eee",flex:1}}>
            <View style={{backgroundColor:"white",padding:15}}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem
                restaurantData={restaurantData}
                navigation={navigation}
                />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    );
}