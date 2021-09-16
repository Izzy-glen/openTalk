import 'react-native-gesture-handler';

import React, {useState} from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import CreateAccount from '../screens/CreateAccount';
import CategoriesScreen from '../screens/CategoriesScreen';
import LandingScreen from '../screens/LandingScreen';
import TabNavigator from './TabNavigators';
import { withAuthenticator } from 'aws-amplify-react-native/dist/Auth';


 const Stack = createStackNavigator();


const AuthNavigator = () => {

  return (
      <>
    <NavigationContainer>
    <Stack.Navigator>
          <Stack.Screen
            name= "Home"
            component={HomeScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name= "LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name= "CreateAccount"
            component={CreateAccount}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name= "CategoriesScreen"
            component={CategoriesScreen}
            options={{
              headerShown: false
            }}
          />
            <Stack.Screen
            name= "Profile"
            component={ProfileScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name= "FollowFrienddsScreen"
            component={FollowFriendsScreen}
            options={{
              headerShown: false
            }}
          />
            <Stack.Screen
            name= "AddPostScreen"
            component={AddPostScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name= "LandingScreen"
            component={TabNavigator}
            options={{
              headerShown: false
            }}
          /> 
    </Stack.Navigator>

    </NavigationContainer>
    </>
  );
};


export default AuthNavigator;


