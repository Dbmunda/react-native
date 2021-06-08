import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-community/async-storage';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen';





const Stack = createStackNavigator();
let routeName;
function MyStack() {
  return (
    <Stack.Navigator
    initialRouteName={routeName}
      >
      <Stack.Screen 
        name="onBoarding" 
        component={OnBoardingScreen} 
        options={{header: () => null}}/>
      <Stack.Screen
       name="Login" 
       component={LoginScreen}
       options={{header: () => null}} />
      
    </Stack.Navigator>
  );
}
// headerMode="none"
export default function AuthStack() {

  const[isFirstLaunch,setIsFirstLaunch] =React.useState(null);

  React.useEffect(()=>{
   AsyncStorage.getItem("alreadyLaunched").then(value=>{
     if(value==null){
      AsyncStorage.setItem('alreadyLaunched', 'true');
       setIsFirstLaunch(true);
      
     }
     else{
       setIsFirstLaunch(false);
     }
   });
  },[]);

  if(isFirstLaunch === null)
  {
    return null;
  }
  else if(isFirstLaunch === true)
  {
    routeName= 'onBoarding';
  }
  else{
   routeName= 'Login';
  }

  return (
      <MyStack/>
  )
}
