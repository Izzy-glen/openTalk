// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingScreen from '../screens/LandingScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessageScreen from '../screens/MessageScreen';
import {
  LinearGradient
} from 'expo-linear-gradient';


const Tab = createBottomTabNavigator(

);

export default function TabNavigator() {
  return (
    <LinearGradient
    colors={['#671ACF', '#A428C0' ]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.linearGradient}
  >
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: styles.tabBar,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            }else if (route.name === 'Notifications') {
              iconName = focused ? 'ios-notifications' : 'notifications-outline';
            }else if (route.name === 'Message') {
              iconName = focused ? 'ios-mail' : 'ios-mail-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
        })}
      >
        <Tab.Screen name="Home" component={LandingScreen} options={{
              headerShown: false,
              tabBarShowLabel: false,

            }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{
              headerShown: false,
              tabBarShowLabel: false,
            }}/>
        <Tab.Screen name="Notifications" component={NotificationsScreen} options={{
              headerShown: false,
              tabBarBadge: '7',
              tabBarShowLabel: false,
            }} />
        <Tab.Screen name="Message" component={MessageScreen} options={{
              headerShown: false,
              tabBarShowLabel: false,
            }}/>

      </Tab.Navigator>
      </LinearGradient>
  );
}const styles = StyleSheet.create({
  tabBar: {
      width: '100%',
      bottom: 0,
      backgroundColor: 'none'
  },
  linearGradient: {
    flex: 1,
    bottom: 0,
    borderRadius: 20,
    height: '10%',
    width: '100%',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
},
});