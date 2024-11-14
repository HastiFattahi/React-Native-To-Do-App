import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen({}) {
    return (

            <ImageBackground
                source={require('../Assets/landing-bg.jpg')}
                style={styles.image}
            >
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require("../Assets/cat-logo.png")}/>
                    <Text>Find vet help online!</Text>
                </View>
                <View style={styles.loginButton}></View>
                <View style={styles.registerButton}></View>
                <View style={styles.toDoButton}>
                  <Button title='To Do List'/>
                </View>
            </ImageBackground>
            

    );
}

const styles=StyleSheet.create({
      image: {
        flex:1,
        justifyContent:"flex-end",
        alignItems:'center'
      },
      loginButton:{
        width:"100%",
        height:70,
        backgroundColor:"#deeef0"
      },
      registerButton:{
        width:"100%",
        height:70,
        backgroundColor:"#c7aef4"
      },
      toDoButton:{
        width:"100%",
        height:70,
        backgroundColor:"#154c79"
      },
      logo:{
        width:200,
        height:200,
        
      },
      logoContainer:{
        position:'absolute',
        top:70,
        alignItems:"center"
      }
})

export default WelcomeScreen;