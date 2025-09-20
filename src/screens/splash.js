import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'


const splash = ({navigation}) => {
    useEffect(()=>{
   const timer =setTimeout(()=>{
        navigation.replace('Login')
      },2000)
      return()=>clearTimeout(timer)
    },[])
  return (
    <View style={style.container}>
      {/* <Text style={style.title}>Welcome to flipkart</Text> */}
      <Image source={require('../assets/Images/flipkart-icon.png')} style={{width:200,height:200,resizeMode:'contain'}}/>
    </View>
  )
}

export default splash

const style =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#4A90E2"
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    }
})