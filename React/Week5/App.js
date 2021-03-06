import React, {Component} from 'react';
import {Platform, 
  StyleSheet,
  Text,
  View, 
  TextInput, 
  Button, 
  Alert, 
  Keyboard, 
  AsyncStorage, 
  ActivityIndicator} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import Header from "./app/components/header";
import Footer from "./app/components/footer";
import Row from "./app/components/row";


const filterItems = (filter, items) => {
    return items.filter((item)=>{
        if (filter==="ALL") return true;
        if (filter==="COMPLETED") return item.complete;
        if (filter==="ACTIVE") return !item.complete;
    })
};//fiter algorithms linked to handle filter ,footer

export default class App extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1!==r2});//speed up
        this.state = {
            value: "",
            items: [],
            allComplete: false,
            dataSource: ds.cloneWithRows([]),//speed up of rendering listview
            filter: "ALL",
            loading: true
        }
        this.handleAddItem = this.handleAddItem.bind(this);//asynchronous,not the same time
        this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
        this.setSource = this.setSource.bind(this);
        this.handleToggleComplete = this.handleToggleComplete.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleClearComplete = this.handleClearComplete.bind(this);

    }

    componentDidMount() {
        AsyncStorage.getItem("items").then((json)=>{
            try {
                const items = JSON.parse(json);
                this.setSource(items, items, { loading: false });
            } catch (error) {
                console.log(json)
                this.setSource([],[], {loading: false });
            }
        })
    }

    handleAddItem(){
        if(!this.state.value) return;
        const newItems = [
            ... this.state.items,//ssprea in ES6,use original items + object to array to items
            {
                key: Date.now(),
                text: this.state.value,
                complete: false
            }
        ];
        this.setSource(newItems, filterItems(this.state.filter, newItems), { value: "" });
    }

    handleToggleAllComplete(){
        const complete = !this.state.allComplete;
        const newItems = this.state.items.map((item)=>({ ... item, complete }));
        this.setSource(newItems, filterItems(this.state.filter, newItems), {allComplete: complete});//value changed,re-render datasource
    }

    setSource(items, itemsDatasource, otherState={}){
        this.setState({
            items,
            dataSource: this.state.dataSource.cloneWithRows(itemsDatasource),
            ...otherState
        })

        AsyncStorage.setItem("items", JSON.stringify(items));
    }

    handleToggleComplete(key, complete){
        const newItems = this.state.items.map((item) => { 
            if(item.key !== key) return item;
            return {
                ...item,
                complete
            }
         });
        this.setSource(newItems, filterItems(this.state.filter, newItems));
    }

    handleRemoveItem(key){
        const newItems = this.state.items.filter((item)=>{
            return item.key !== key
        })
        this.setSource(newItems, filterItems(this.state.filter, newItems));
    }

    handleFilter(filter){
        this.setSource(this.state.items, filterItems(filter, this.state.items), {filter});
    }//setsource to render different items into corresponding view

    handleClearComplete(){
        const newItems = filterItems("ACTIVE", this.state.items);
        this.setSource(newItems, filterItems(this.state.filter, newItems));
    }


    render(){
        return(
            <View style = {styles.container}>
                <Header
                    value={this.state.value}
                    onAddItem={this.handleAddItem}//wire up
                    onChange={(value=>this.setState({ value }))}
                    onToggleAllComplete={this.handleToggleAllComplete}
                />
                <View style={styles.content}>
                    <ListView
                        style={styles.list}
                        enableEmptySections
                        dataSource={this.state.dataSource}
                        onScroll={()=> Keyboard.dismiss()}
                        renderRow={({ key, ...value})=>{
                            return(
                                <Row
                                    key={key}
                                    {...value}
                                    onComplete={(complete) => this.handleToggleComplete(key, complete)}
                                    onRemove={() => this.handleRemoveItem(key)}
                                ></Row>
                            )
                        }}
                        renderSeparator={(sectionId, rowId)=>{
                            return <View key={rowId} style={styles.separator}></View>
                        }}
                    ></ListView>
                </View>
                <Footer
                    count={filterItems("ACTIVE", this.state.items).length}
                    onFilter={this.handleFilter} 
                    filter={this.state.filter}
                    onClearComplete={this.handleClearComplete}
                />
                {this.state.loading && 
                <View style={styles.loading}>
                    <ActivityIndicator 
                    animating
                    size="large"
                    />
                </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        ... Platform.select({
            android: { paddingTop: 20 }
        })
    },
    content: {
        flex: 1
    },
    list: {
        backgroundColor: "#F5F5F5",
    },
    separator: {
        borderWidth: 1,
        borderColor: "#F5F5F5"
    },
    loading: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,.2)"
    }
});