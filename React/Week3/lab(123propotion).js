import React from 'react';
import {
    View,
    Image,
    Dimensions,
    StyleSheet,
   } from 'react-native';
const images = [
    require('./img/pic0.png'),
    require('./img/pic1.png'),
    require('./img/pic2.png'),
    require('./img/pic3.png'),
    require('./img/pic4.png'),
    require('./img/pic5.png'),
    require('./img/pic6.png'),
    require('./img/pic7.png'),
    require('./img/pic8.png'),
    require('./img/pic9.png'),
    require('./img/pic10.png'),
    require('./img/pic11.png'),
    require('./img/pic12.png'),
]
const ImageElement1 = ({index}) => (
    <Image
    style = {styles.image1}
    source = {images[index]}
    />
)
const ImageElement2 = ({index}) => (
    <Image
    style = {styles.image2}
    source = {images[index]}
    />
)
const ImageElement3 = ({index}) => (
    <Image
    style = {styles.image3}
    source = {images[index]}
    />
)
const App = () => ( 
    <View style ={styles.container}>
        {/* {
            images.map((image,index) => <ImageElement index={index} key = {index}/>)
        } */}
    <ImageElement1 index={0}/>
    <ImageElement2  index={1}/>
    <ImageElement2  index={2}/>
    <ImageElement3  index={3}/>
    <ImageElement3  index={4}/>
    <ImageElement3  index={5}/>
    <ImageElement3  index={6}/>
    <ImageElement3  index={7}/>
    <ImageElement3 index={8}/>
    <ImageElement2  index={9}/>
    <ImageElement2  index={10}/>
    <ImageElement1 index={11}/>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent : 'center',
        // alignItems:'center',
        paddingTop:35,
        flexDirection :'row',
        flexWrap:'wrap',
    },
    image1:{
        width:Dimensions.get('window').width-4,
        height:Dimensions.get('window').width/3-8,
        margin:2,
        padding:2,
        borderWidth :2,
        borderColor:'green',
        borderRadius:Dimensions.get('window').width /2,//圆角处理
    },
    image2:{
        width:Dimensions.get('window').width/2-4,
        height:Dimensions.get('window').width/4-8,
        margin:2,
        padding:2,
        // borderWidth :1,
        // borderRadius:Dimensions.get('window').width /2,//圆角处理
    },
    image3:{
        width:Dimensions.get('window').width/3-4,
        height:Dimensions.get('window').width/4-8,
        margin:2,
        padding:2,
        // borderWidth :1,
        
        // borderRadius:Dimensions.get('window').width /2,//圆角处理
    }
})
export default App
