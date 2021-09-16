import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from '../screens/LoginScreen';
import CreateAccount from '../screens/CreateAccount';
import CategoriesScreen from '../screens/CategoriesScreen';
import TabNavigator from './TabNavigators';
import HomeScreen from "../screens/Home";
import FollowFriendsScreen from '../screens/FollowFriendsScreen';
import AddPostScreen from '../screens/AddPostScreen';
import ProfileScreen from "../screens/ProfileScreen";
import LandingScreen from "../screens/LandingScreen";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
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
            component={DrawerNavigator}
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
  );
}

export { MainStackNavigator };