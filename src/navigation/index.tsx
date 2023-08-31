import {View, Text} from 'react-native';
import React from 'react';
import Home from '../screens/home';
import LoginScreen from '../screens/loginScreen';
import SignUpScreen from '../screens/signupScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from '../../App';
import ResetPassword from '../screens/resetPassword';

const AppStack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="LoginScreen" component={LoginScreen} />
        <AppStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <AppStack.Screen name="ResetPassword" component={ResetPassword} />
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
