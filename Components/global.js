import React,{useEffect,useState} from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';
import AnimateNumber from 'react-native-countup'
import axios from 'axios';
import CollapsibleList from "react-native-collapsible-list";

const airdrop = () => {
    
    const [data,setData]=useState([])
    const [trending,setTrending]=useState([])
    const [news,setNews]=useState([])
    useEffect(() => {

        const getData=async()=>{
            const tr = await axios.get('https://api.coingecko.com/api/v3/search/trending');
            const ne = await axios.get('https://api.coingecko.com/api/v3/status_updates');
            console.log(ne.data.status_updates[0])
            setTrending(tr.data.coins);
            const updatedNews = await ne.data.status_updates.slice(0,20);
            setNews(updatedNews)
        }
        getData()
    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                    <View style={styles.innerContainer}>
                    <CollapsibleList
                    style={styles.infoContainer}
                    numberOfVisibleItems={0}
                    wrapperStyle={styles.wrapperCollapsibleList}
                    buttonContent={
                        <View style={styles.textsContainerAccordion}>
                            <Text style={styles.title}>Number of Coins:</Text>
                        </View>
                    }>
                        <AnimateNumber value={9200} timing="easeOut" style={styles.value} formatter={(val) => {
                            return parseInt(val).toFixed(2)
                        }}/>
                        </CollapsibleList>
                    </View>

            <View style={styles.innerContainer}>
                    <CollapsibleList
                    style={styles.infoContainer}
                    numberOfVisibleItems={0}
                    wrapperStyle={styles.wrapperCollapsibleList}
                    buttonContent={
                        <View style={styles.textsContainerAccordion}>
                            <Text style={styles.title}>Trending Coins on CG:</Text>
                        </View>
                    }>
                        {trending.map(({item})=>(
                                <View style={styles.MainContainer} key={item.id}>
                                    <View style={styles.childContainer}>
                                        <Image
                                            style={styles.tinyLogo}
                                            source={{
                                            uri:item.small,
                                            }}
                                        />
                                        <View style={styles.symbolContainer}>
                                            <Text style={styles.symbol}>{item.name}</Text>
                                            <Text style={{textTransform:'uppercase',color:'grey'}}>{item.symbol}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.container2}>
                                        <Text style={styles.price}>Market Cap Rank</Text>
                                        <Text style={{color:'green',fontSize:26,marginTop:10}}>{item.market_cap_rank}</Text>
                                    </View>
                                    <View style={styles.container2}>
                                        <Text style={styles.price}>$ {item.price_btc}</Text>
                                    </View>
                                </View>
                        ))}
                    </CollapsibleList>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Top News From CG:</Text>
                {news.map((item,i)=>
                    <CollapsibleList
                    key={i}
                    numberOfVisibleItems={0}
                    wrapperStyle={styles.infoContainer}
                    buttonContent={
                        <View>
                            <Text style={styles.title}>
                        <View style={styles.childContainer}>
                            <Image
                                style={styles.tinyLogo}
                                source={{
                                uri:item.project.image.small,
                                }}
                            />
                            <View style={styles.symbolContainer}>
                                <Text style={styles.symbol}>{item.project.name}</Text>
                                <Text style={{textTransform:'uppercase',color:'grey'}}>{item.project.symbol}</Text>
                            </View>
                        </View></Text>
                        </View>
                    }>
                    <View style={styles.MainContainer}>
                        <View style={styles.childContainer}>
                            <View>
                                <Text style={styles.symbol}>{item.description}</Text>
                            </View>
                        </View>
                    </View>
                    </CollapsibleList>
                )}
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
    },
    innerContainer:{
    },
    title:{
        padding:20,
        fontWeight:'bold',
        fontSize:30
    },
    value:{
        padding:20,
        paddingVertical:10,
        fontSize:24
    },
    childContainer: {
        paddingBottom:20,
        marginTop:30,
        flex:1,
        flexDirection:'row',
    },
    symbolContainer:{
        flexDirection:'column',
        paddingLeft:20,
    },
    infoContainer:{
        borderWidth:0.4,
        borderColor:'black',
        marginVertical:10,
        marginHorizontal:10,
        borderRadius:20,
        backgroundColor:'white',
    },
    container2:{
        display:'flex',
        marginTop:30,
        flex:1,
    },
    container3:{
        marginLeft:100,
    },
    MainContainer:{
        paddingHorizontal:20,
        marginVertical:20,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        paddingBottom:5,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    symbol:{
        fontSize:18,
        fontWeight:'bold'
    },
    price:{
        fontSize:16,
        fontWeight:'bold'
    },
})

export default airdrop
