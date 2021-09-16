import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button,
  ScrollView,  
  SafeAreaView, 
  Stylesheet, 
  TouchableOpacity, 
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TextInput, 
  FlatList,
  ImageBackground,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import image from '../assets/images/soccer.jpg'
import { DrawerActions } from '@react-navigation/native';
import { Auth } from '@aws-amplify/auth';





class LandingScreen extends React.Component {    
  handleSignOut = () => {
    try {
         Auth.signOut();
         this.props.navigation.navigate('LoginScreen')
  
    } catch (error) {
        alert('error signing out: ', error.message);
    }
  }
  toggleDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  }
  


render() {
  let size = 40;
  let color = 'white';
  const { navigate } = this.props.navigation;

    return(

<View style={styles.container}>
      <StatusBar style="default" />
      <LinearGradient
          colors={['#671ACF', '#A428C0' ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.linearGradient}
        >

         <View style = {styles.topNav}>
    <TouchableOpacity
      style = {styles.drawer}
      onPress={ this.toggleDrawer }
    >
    <Ionicons name='ios-menu-outline' size={size} color={color} />
    </TouchableOpacity>
    <View style={styles.headingArea}>
    <Text style={styles.heading} >Home</Text>
    </View>
    <TouchableOpacity 
    style={styles.ppArea}
    onPress={() => {
            this.props.navigation.navigate('ProfileScreen')
          } }
    >
    <Image 
    style = {styles.profilePic}
    source={require('../assets/images/soccer.jpg')}

    />
    </TouchableOpacity>

    </View>
          </LinearGradient>
         <View style={styles.body}>

         <TouchableOpacity
      style={styles.confirmBtn}
        onPress = { this.handleSignOut }
      >
      <Text style={styles.confirmBtnText}> Sign Out </Text> 
      </TouchableOpacity>
          


          </View> 


    </View>
        
    )   
        }
};

export default LandingScreen;


const styles = StyleSheet.create({
       container: {
          flex: 1,
          alignItems: 'center',
          height: '90%',
          color: "#FFF",
          width: '100%',
      },
      body: {
        height: '90%',
        width: '100%',
        color: 'black',
        justifyContent: 'center',
      },
      topNav: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        margin: 10,
        marginTop: 40,
        alignContent: 'center',
        justifyContent: 'space-around'
      },
      drawer: {
        width: "25%",
        height: '100%',
        alignItems: 'flex-start',
      },
      ppArea: {
        width: "25%",
        height: '100%',
        justifyContent: 'center',  
        alignItems: 'center',
    },
    profilePic: {
        height: '100%',
        width: '50%',
        zIndex: 5,
        borderRadius: 100,

    },
      headingArea:{
        width: "50%",
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center", 
      },
      heading: {
        color: 'white',
        fontSize: 18, 
        margin: 1,
      },
      linearGradient: {
        top: 0,
        height: '15%',
        width: '100%'
      },
  body: {
    height: '100%',
    width: '100%',
    justifyContent: 'center'
},
headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: '10%',
    marginBottom: '1%',
    paddingLeft: '3%',
    paddingRight: '3%',
    opacity: 0.5,
},
confirmBtn: {
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    backgroundColor: '#A428C0',
    height: '8%',
    zIndex: 1,
    borderRadius: 30,
    marginTop: '5%',
    marginBottom: '5%',
},
confirmBtnText: {
    color: "white",
    fontSize: 16,
},
});

