import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Onboarding from 'react-native-onboarding-swiper';

const Skip =({...props})=>(
<TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
   ><Text>Skip</Text></TouchableOpacity>
);
const Next =({...props})=>(
   <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
   ><Text>Next</Text></TouchableOpacity>);


    const Done =({...props})=>(
        <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
   ><Text>Done</Text></TouchableOpacity>
        );
const Dots =({selected})=>{
    let backgroundColor;
    backgroundColor= selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)'
    return(
        <View
        style={{
            width:6,
            height:6,
            marginHorizontal:3,
            backgroundColor
        }}
        
        />
            
        
    )
}


const OnBoardingScreen=({navigation})=>{

  return(
    <Onboarding
    SkipButtonComponent={Skip}
    NextButtonComponent={Next}
    DoneButtonComponent={Done}
    DotComponent={Dots}
    onSkip={()=>navigation.replace('Login')}
    onDone={()=>navigation.navigate('Login')}
  pages={[
    {
      backgroundColor: '#a6e4d0',
      image: <Image source={require('../assets/onboarding-img1.png')} />,
      title: 'Onboarding 1',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#fdeb93',
        image: <Image source={require('../assets/onboarding-img2.png')} />,
        title: 'Onboarding 2',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#FFB6C1',
        image: <Image source={require('../assets/onboarding-img3.png')} />,
        title: 'Onboarding 3',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
  ]}
/>
  )
}

export default OnBoardingScreen;

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})