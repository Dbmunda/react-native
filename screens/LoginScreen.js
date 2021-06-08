import React from 'react';

import FormButton from '../components/FormButton';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
const LoginScreen=()=>{

  return(
    <View style={styles.container}>
      <Image source={require('../assets/rn-social-logo.png')} 
        style={styles.logo} />
      <Text style={styles.text}>
        Login Screen
      </Text>
      
      <Button title="click here" onPress={()=>alert("boutton was clicked")} />
    </View>
  )
}

export default LoginScreen;

const styles= StyleSheet.create({
    container:{
        backgroundColor: '#f9fafd',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo:{
      height: 150,
      width: 150,
      resizeMode:'cover'
    },
    text:{
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f'
    },
    navButton:{
      marginTop: 15,
    },
    forgotButton:{
      marginVertical: 35,
    },
    navButtonText:{
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily:'Late-Regular'
    }
})