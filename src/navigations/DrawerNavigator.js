import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import LandingScreen from '../screens/LandingScreen';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import FollowFriendsScreen from '../screens/FollowFriendsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import TabNavigator from './TabNavigators';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >   
          <Drawer.Screen name="Categories" component={CategoriesScreen}/>
          <Drawer.Screen name="FollowFriendsScreen" component={FollowFriendsScreen}/>
          <Drawer.Screen name="Landing" component={TabNavigator} />
        </Drawer.Navigator>
    );
  }
  
  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </DrawerContentScrollView>
    );
  }
  