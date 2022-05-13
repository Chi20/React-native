import React,{useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Platform,
} from 'react-native';
import {Divider} from "react-native-elements";
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const styles = StyleSheet.create({
    menuItemStyle:{
        flexDirection:"row",
        justifyContent:'space-between',
        margin:5,
    },
    titleStyle:{
        fontSize:19,
        fontWeight:"600",
    },
});


export const foods=[
    {
        "id": "xcIyCAx95xABh0aPaFHLaw",
        "url": "https://www.yelp.com/biz/juniper-on-the-water-hallandale-beach-2?adjust_creative=RS4jc-ERm7q1Xqn6OqPoTA&hrid=xcIyCAx95xABh0aPaFHLaw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=RS4jc-ERm7q1Xqn6OqPoTA",
        "text": "We came here twice on our 1 week vacation! The food was good and the creme brulee was fantastic! But the best part was our server Imani!! She was...",
        "rating": 5,
        "time_created": "2022-04-08 11:25:57",
        "user": {
            "id": "Mt6LPFak-qgF5O6pm2Sd4w",
            "profile_url": "https://www.yelp.com/user_details?userid=Mt6LPFak-qgF5O6pm2Sd4w",
            "image_url": null,
            "name": "Sharleen F."
        }
    },
    {
                "id": "4PTDfS1KXOOgks0mACKLMQ",
                "url": "https://www.yelp.com/biz/juniper-on-the-water-hallandale-beach-2?adjust_creative=RS4jc-ERm7q1Xqn6OqPoTA&hrid=4PTDfS1KXOOgks0mACKLMQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=RS4jc-ERm7q1Xqn6OqPoTA",
                "text": "Food is always good! Fresh oysters and tasty appetizers! \nThey need to train their staff, some of them don't speak English at all... \nNice view of the...",
                "rating": 5,
                "time_created": "2022-05-07 13:03:02",
                "user": {
                    "id": "XiKvPCdocQb2jGChl65bgw",
                    "profile_url": "https://www.yelp.com/user_details?userid=XiKvPCdocQb2jGChl65bgw",
                    "image_url": "https://s3-media4.fl.yelpcdn.com/photo/sjk5EAG0XkSFtqXkF3w_VA/o.jpg",
                    "name": "Love B."
                }
            },
            {
                "id": "g3Y8WTzF3BMAUDqkM6ehkw",
                "url": "https://www.yelp.com/biz/juniper-on-the-water-hallandale-beach-2?adjust_creative=RS4jc-ERm7q1Xqn6OqPoTA&hrid=g3Y8WTzF3BMAUDqkM6ehkw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=RS4jc-ERm7q1Xqn6OqPoTA",
                "text": "A very okay experience. First, valet. Free Valet but it is very short staffed. One person running the show on a busy Friday night. \n\nThe restaurant is nice...",
                "rating": 3,
                "time_created": "2022-05-09 16:05:44",
                "user": {
                    "id": "BuUHXeBAyNZUeAn_dLY31Q",
                    "profile_url": "https://www.yelp.com/user_details?userid=BuUHXeBAyNZUeAn_dLY31Q",
                    "image_url": "https://s3-media3.fl.yelpcdn.com/photo/wKGtI13y09x0Gbtg-aNVGA/o.jpg",
                    "name": "My-Oanh N."
                }
            }
]

export default function MenuItem(props){
    const [selectedId, setSelectedId] = useState(null);

    const Item=({item,onPress})=>(
        <TouchableOpacity onPress={onPress}>
          <View style={styles.menuItemStyle}>
              <FoodInfo food={item}/>
          </View>
          { (item.id===selectedId)  &&
          <View style={{
            marginLeft:25,
            marginRight:25,
            fontFamily: "lucida grande",
          }}>
            <Text>{item.text}</Text>
            </View> }
        </TouchableOpacity>
    );

    const renderItem=({item})=>{
        return (
            <Item
                item={item}
                onPress={()=>[setSelectedId(item.id)]}
            />
        );
    }
    return(
        <FlatList
            data={props.reviews}
            renderItem = {renderItem}
            keyExtractor = {(item) => item.id}

            extraData={selectedId}
            />
    );
}

const FoodInfo =(props)=>(
    <View style={{
        width:"100%",
        justifyContent:'space-evenly',
        borderRadius:20,
        paddingLeft:20,
        paddingRight:30,
        marginTop:5,
        marginBottom:5
    }}>
    <View style={{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        }}>
        <Image
            source={{uri:props.food.user.image_url?props.food.user.image_url:"https://img2.baidu.com/it/u=3973855039,4170930478&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500"}}
            style={{
                width:50,
                height:50,
                borderRadius:40,
            }}
        />
        <Text style={styles.titleStyle}>   {props.food.user.name}</Text>
    </View>
        <Text>Rating:{props.food.rating}</Text>
        <Text>Time:{props.food.time_created}</Text>
    </View>
);


