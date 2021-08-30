import React,{useEffect, useState, useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Dimensions, Linking} from 'react-native';
import {ChartDot, ChartPath, ChartPathProvider, monotoneCubicInterpolation,ChartYLabel} from '@rainbow-me/animated-charts';
import axios from 'axios';
import CollapsibleList from "react-native-collapsible-list";
import { useSharedValue } from 'react-native-reanimated';

const detailedCrypto = ({route}) => {
    
    const SIZE= Dimensions.get('window').width;
    const [coin,setCoin]=useState([]);
    const [dataChart,setDataChart]=useState([])
    const [coinLoaded,setCoinLoaded]=useState(false);
    const [chartLoaded,setChartLoaded]=useState(false);
    const data = [
        {x: 1453075200, y: 1.47}, {x: 1453161600, y: 1.37},
        {x: 1453248000, y: 1.53}, {x: 1453334400, y: 1.54},
        {x: 1453420800, y: 1.52}, {x: 1453507200, y: 2.03},
        {x: 1453593600, y: 2.10}, {x: 1453680000, y: 2.50},
        {x: 1453593600, y: 2.10}, {x: 1453680000, y: 2.50},
      ];
      
      const latestCurrentPrice = useSharedValue(route.params.current_price);
        const formatUSD = value => {
            'worklet';
            if (value === '') {
            const formattedValue = `$${latestCurrentPrice.value.toLocaleString('en-US', { currency: 'USD' })}`
            return formattedValue;
            }
            let formattedValue;
            if(route.params.current_price<0.01)                
                formattedValue =`$${parseFloat(value).toFixed(10).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
            else
                formattedValue =`$${parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
            return formattedValue;
        };
        if (route.params.sparkline_in_7d.price.length === 0) {
            return <Text>Loading...</Text>
        } 

        const buildChart = (data) =>{
            let chart = [];
            let index = 1453075200;
            data.forEach(element => {
                let newDataPoint = {
                x: index,
                y: element,
                };
                index += 3600;
                chart.push(newDataPoint);
            });
            
        return chart;
        }
        const points = monotoneCubicInterpolation({ dataChart, range: 40 })
    useEffect(()=>{
        const fetchData=async()=>{
            const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${route.params.id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
            setCoin(res.data);
            setCoinLoaded(true)
            //await axios.get(`https://api.coingecko.com/api/v3/coins/${route.params.name.toLowerCase()}/market_chart?vs_currency=usd&days=30&interval=daily`)
            // .then((r)=>{
                //const modifiedData = buildChart(r.data.prices)
                const modifiedData = buildChart(route.params.sparkline_in_7d.price);
                //console.log(typeof modifiedData[Symbol.iterator] === 'function');
                setDataChart(modifiedData);
            //})
            //.then(()=>{
                setChartLoaded(true);
            //});
        }
        fetchData()
    },[])
   //console.log(dataChart)
    const MaxSupply = ()=>{
        return(
            <View style={styles.textsContainer}>
                <Text style={[styles.titleInfo]}>Total Supply:</Text>
                <Text style={styles.texts}>{JSON.stringify(route.params.total_supply)}</Text>
            </View>
        )
    }

    const FullyDilutedValuation = () =>{
        if(JSON.stringify(route.params.fully_diluted_valuation)!='null')
        return(
        <Text style={styles.texts}>${JSON.stringify(route.params.fully_diluted_valuation)}</Text>
        )
        else 
        return <Text style={styles.texts}>Unknown</Text>
    }
    
    
    return (
        <ScrollView>
             <ChartPathProvider data={{points: dataChart, smoothingStrategy: 'bezier'}}>
            <View style={styles.chartContainer}>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Image style={styles.tinyLogo} source={{uri:route.params.image,}} />
                    <View style={styles.symbolContainer}>
                        <Text style={{fontWeight:'bold',textTransform:'uppercase',marginLeft:10}}>{route.params.symbol}</Text>
                    </View>
                    <View style={styles.percentContainer}>
                        <Text style={{color:'grey',}}>7D</Text>
                        {coinLoaded ? coin?.market_data.price_change_percentage_7d.toString().charAt(0)=="-"?
                        <Text style={{fontWeight:'bold',textTransform:'uppercase',color:'red'}}>
                            %{coin.market_data.price_change_percentage_7d}
                        </Text>
                        :
                        <Text style={{fontWeight:'bold',textTransform:'uppercase',color:'green'}}>
                            %{coin.market_data.price_change_percentage_7d}
                        </Text>:null}
                    </View>
                </View>
                <ChartYLabel
                format={formatUSD}
                style={styles.chartPrice}
                />
            </View>
            <View style={styles.styledChart}>
{chartLoaded &&     <>
                    <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
                    <ChartDot style={{ backgroundColor: 'orange' }} />
{/*                     <ChartYLabel
                    format={formatUSD}
                    /> */}</>}
            </View>
                {/* Main Info */}
                {coinLoaded && 
                    <CollapsibleList
                    style={styles.infoContainer}
                    buttonPosition="top"
                    numberOfVisibleItems={0}
                    wrapperStyle={styles.infoContainer}
                    buttonContent={
                        <View style={styles.textsContainerAccordion}>
                            <Text style={styles.titleInfoAccordion}>Basic Info</Text>
                        </View>
                    }
                    >
                <View style={styles.textsContainer}>
                        <Text style={[styles.titleInfo]}>Description:</Text>
                        <Text style={styles.texts}>{coin.description?.en.replace(/(<([^>]+)>)/ig, '')}</Text>
                    </View>
                    <View style={styles.textsContainer}>
                        <Text style={[styles.titleInfo]}>Block Time in Mins:</Text>
                        <Text style={styles.texts}>{coin?.block_time_in_minutes}</Text>
                    </View>
                    <View style={styles.textsContainer}>
                        <Text style={[styles.titleInfo]}>Hashing Algorithm:</Text>
                        <Text style={styles.texts}>{coin?.hashing_algorithm}</Text>
                    </View>
                    <View style={styles.textsContainer}>
                        <Text style={[styles.titleInfo]}>Links</Text>
                        <Text style={[styles.texts,{color:'blue'}]}
                        onPress={() => Linking.openURL(coin.links.official_forum_url[0])}>
                            {coin.links.official_forum_url[0] &&"Forum"}
                            </Text>
                        <Text style={[styles.texts,{color:'blue'}]}
                        onPress={() => Linking.openURL(coin.links?.subreddit_url)}>
                            {coin.links.subreddit_url && "Reddit"}
                            </Text>
                        <Text style={[styles.texts,{color:'blue'}]}
                        onPress={() => Linking.openURL(coin.links?.repos_url.github[0])}>
                            {coin.links.repos_url.github[0] && "Github"}
                            </Text>
                    </View>
                </CollapsibleList>}
                {/* Data Info */}
                <CollapsibleList
                style={styles.infoContainer}
                buttonPosition="top"
                numberOfVisibleItems={0}
                wrapperStyle={styles.infoContainer}
                buttonContent={
                    <View style={styles.textsContainerAccordion}>
                        <Text style={styles.titleInfoAccordion}>Data</Text>
                    </View>
                }
                >
                <View style={styles.textsContainer}>
                    <Text style={[styles.titleInfo]}>Current Price:</Text>
                    <Text style={styles.texts}>${JSON.stringify(route.params.current_price)}</Text>
                </View>
                <View style={styles.textsContainer}>
                    <Text style={[styles.titleInfo]}>Market Cap:</Text>
                    <Text style={styles.texts}>${JSON.stringify(route.params.market_cap)}</Text>
                </View>
                <View style={styles.textsContainer}>
                    <Text style={[styles.titleInfo]}>Fully Diluted Valuation:</Text>
                    <FullyDilutedValuation />
                </View>
                <View style={styles.textsContainer}>
                    <Text style={[styles.titleInfo]}>Total Volume:</Text>
                    <Text style={styles.texts}>${JSON.stringify(route.params.total_volume)}</Text>
                </View>
                {JSON.stringify(route.params.total_supply)? <MaxSupply />:null}
                <View style={styles.textsContainer}>
                    <Text style={[styles.titleInfo]}>Circulating Supply:</Text>
                    <Text style={styles.texts}>${JSON.stringify(route.params.circulating_supply)}</Text>
                </View>
                <View style={styles.textsContainer}>
                    <Text style={[styles.titleInfo]}>All Time Low Change Percentage:</Text>
                    {JSON.stringify(route.params.atl_change_percentage).toString().charAt(0)=='-'?
                    <Text style={[styles.texts,{color:'red'}]}>{JSON.stringify(route.params.atl_change_percentage)}%</Text>:
                    <Text style={[styles.texts,{color:'green'}]}>{JSON.stringify(route.params.atl_change_percentage)}%</Text>
                    }
                </View>
                <View style={styles.textsContainer}>
                    <Text style={[styles.titleInfo]}>All Time Low Date:</Text>
                    <Text style={styles.texts}>{JSON.stringify(route.params.atl_date).substr(1,10)}</Text>
                </View>
            </CollapsibleList>
            {/* ath atl*/}
            
            <CollapsibleList
                style={styles.infoContainer}
                numberOfVisibleItems={0}
                wrapperStyle={styles.infoContainer}
                buttonPosition="top"
                buttonContent={
                    <View style={styles.textsContainerAccordion}>
                        <Text style={styles.titleInfoAccordion}>ATH - ATL</Text>
                    </View>
                }
                >
                <View style={styles.textsContainer}>
                    <Text style={[styles.titleInfo]}>All Time High:</Text>
                    <Text style={styles.texts}>{JSON.stringify(route.params.ath)}</Text>
                </View>
                <View style={styles.textsContainer}>
                    <Text style={[styles.titleInfo]}>All Time High Change Percentage:</Text>
                    <Text style={[styles.texts,{color:'red'}]}>{JSON.stringify(route.params.ath_change_percentage)}%</Text>
                </View>
                <View style={styles.textsContainer}>
                    <Text style={[styles.titleInfo]}>All Time High Date:</Text>
                    <Text style={styles.texts}>{JSON.stringify(route.params.ath_date).substr(1,10)}</Text>
                </View>
                <View style={styles.textsContainer}>
                    <Text style={[styles.titleInfo]}>All Time Low:</Text>
                    <Text style={styles.texts}>{JSON.stringify(route.params.atl)}</Text>
                </View>
                <View style={styles.textsContainer}>
                    <Text style={[styles.titleInfo]}>All Time Low Change Percentage:</Text>
                    {JSON.stringify(route.params.atl_change_percentage).toString().charAt(0)=='-'?
                    <Text style={[styles.texts,{color:'red'}]}>{JSON.stringify(route.params.atl_change_percentage)}%</Text>:
                    <Text style={[styles.texts,{color:'green'}]}>{JSON.stringify(route.params.atl_change_percentage)}%</Text>
                    }
                </View>
                <View style={styles.textsContainer}>
                    <Text style={[styles.titleInfo]}>All Time Low Date:</Text>
                    <Text style={styles.texts}>{JSON.stringify(route.params.atl_date).substr(1,10)}</Text>
                </View>
            </CollapsibleList>
            {/* Changes in 24h */}
                <CollapsibleList
                style={styles.infoContainer}
                numberOfVisibleItems={0}
                buttonPosition="top"
                wrapperStyle={styles.infoContainer}
                buttonContent={
                    <View style={styles.textsContainerAccordion}>
                        <Text style={styles.titleInfoAccordion}>Changes in 24h</Text>
                    </View>
                }
                >
                <View style={styles.textsContainer}>
                    <Text style={[styles.titleInfo]}>High 24h:</Text>
                    <Text style={styles.texts}>${JSON.stringify(route.params.high_24h)}</Text>
                </View>
                <View style={styles.textsContainer}>
                    <Text style={[styles.titleInfo]}>Low 24h:</Text>
                    <Text style={styles.texts}>${JSON.stringify(route.params.low_24h)}</Text>
                </View>
                <View style={styles.textsContainer}>
                    <Text style={[styles.titleInfo]}>Price Change in 24h:</Text>
                    {JSON.stringify(route.params.price_change_24h).toString().charAt(0)=='-'?
                    <Text style={[styles.texts,{color:'red'}]}>${JSON.stringify(route.params.price_change_24h)}</Text>:
                    <Text style={[styles.texts,{color:'green'}]}>${JSON.stringify(route.params.price_change_24h)}</Text>
                    }
                </View>
                <View style={styles.textsContainer}>
                    <Text style={[styles.titleInfo]}>Price Change Rate in 24h:</Text>
                    {JSON.stringify(route.params.price_change_percentage_24h).toString().charAt(0)=='-'?
                    <Text style={[styles.texts,{color:'red'}]}>{JSON.stringify(route.params.price_change_percentage_24h)}%</Text>:
                    <Text style={[styles.texts,{color:'green'}]}>{JSON.stringify(route.params.price_change_percentage_24h)}%</Text>
                    }
                </View>
            </CollapsibleList>
            </ChartPathProvider>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    texts:{
        fontSize:18,
        display:'flex',
        padding:10,
    },
    chartPrice:{
        fontSize:24,
        fontWeight:'700',
        color:'black',
    },
    titleInfo:{
        width:180,
        fontSize:18,
        fontWeight: '700',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
        paddingLeft:0
    },
    chart:{
        marginTop:100,
    },
    styledChart:{
        marginBottom:40,
    },
    textsContainer:{
        marginVertical:5,
        marginHorizontal:20,
        paddingVertical:5,
        paddingBottom:15,
        display:'flex',
        flexDirection:'column',
    },
    infoContainer:{
        borderWidth:0.4,
        borderColor:'#ffb733',
        marginVertical:10,
        marginHorizontal:10,
        borderRadius:20,
        backgroundColor:'white',
    },
    chartContainer:{
        marginHorizontal:20,
        marginVertical:20,
        marginBottom:40,
    },
    tinyLogo: {
      width: 60,
      height: 60,
    },
    symbolContainer:{
        display:'flex',
        flexDirection:'column',
    },
    percentContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-end',
        justifyContent:'flex-end',
        flex:1,
        marginRight:10,
    },
    titleInfoAccordion:{
        marginLeft:10,
        fontSize:26,
        fontWeight: '700',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
        paddingLeft:0,
        color:'white',
    },
    textsContainerAccordion:{
        backgroundColor:'#ffb733',
        borderRadius:20,
        paddingVertical:5,
        paddingBottom:15,
        display:'flex',
        flexDirection:'row',
    },
})

export default detailedCrypto
