const { Platform } = require("react-native")

const insturctions = Platform.select({
    ios:"ios platform",
    android:'android platform'
})
const Title = () =>(
    <Text style = {styles.title}>
        Welcome to React Native!
    </Text>
)
const Instructions = () =>(//若改为Instruction= (props)
    <View>
        <Text style={styles.insturctions}>
        to get started, edit App.js. {/*此处改为{props.text} */}
        </Text>
        <Text style = {styles.insturctions}>
            {insturctions}
        </Text>
    </View>
)
const App = () => (
    <View style ={styles.container}>
    <Title/>
    <Insturctions />{/*此处改为<Insturctions text = {'to get...'} /> */}
    </View>
)