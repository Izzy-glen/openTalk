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
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
 import * as ImagePicker from 'expo-image-picker';
import { back } from 'react-native/Libraries/Animated/src/Easing';
import { white } from 'ansi-colors';
import image from '../assets/images/soccer.jpg'


 const      DATA = [
    {
        id: '1',
        title: 'Sport',
        image: {image},
    },
    {
        id: '2',
        title: 'Dance',
        image: {uri: '../assets/images/soccer.jpg'},
    },
    {
        id: '3',
        title: 'Movies',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '4',
        title: 'Food',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '5',
        title: 'Basketball',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '6',
        title: 'Architechture',
        image: {uri: '../../assets/bgimage.jpg'},
    },    {
        id: '7',
        title: 'Nature',
        image: {uri: '../../assets/bgimage.jpg'},
    },    {
        id: '8',
        title: 'Drink',
        image: {uri: '../../assets/bgimage.jpg'},
    },    {
        id: '9',
        title: 'Football',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '10',
        title: 'Cars',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '11',
        title: 'Weather',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '12',
        title: 'Skiing',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '13',
        title: 'Coding',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '14',
        title: 'Gaming',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '15',
        title: 'Crypto',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '16',
        title: 'Politics',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '17',
        title: 'News',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    
];

const Item = ({ title, image }) => {
    
    return (
    <View style = {styles.item}>
        <ImageBackground
        source= {image}
        resizeMode = "cover"
        style= {styles.image}
        >
        <Text style = {styles.itemTitle}>{title}</Text>
        </ImageBackground>
    </View>
)
};

     const renderItem = ({ item }) => (
        <Item title= {item.title} image= {item.image}/>
     );  



class CategoriesScreen extends React.Component {    


render() {
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
        {/* <Image
        style={styles.logo}
        source={require('./assets/images.jpeg')}
        accessibilityLabel="Open Talk logo"
         /> */}

         <View style={styles.leftNav}>
            <Text style={styles.leftNavText}>Step</Text>
            <View style={styles.leftNavInActive}></View>
            <View style={styles.leftNavActive}></View>
            <View style={styles.leftNavInActive}></View>

         <TouchableOpacity
          style={styles.navLink}
          onPress={() => {
                    Keyboard.dismiss();
            this.props.navigation.navigate('TabNavigator')
            
          } }
          >

           <Text style={styles.navlinkText}> Skip </Text> 
          </TouchableOpacity>
          </View>

          <View style={styles.logoContainer}>
 
          <Text style={styles.logoText}>OpenTalk</Text>
          </View>
          </LinearGradient>
         <View style={styles.body}>
            <Text style={styles.headerText}>Choose your categories</Text>

            <SafeAreaView style= {styles.itemContainer}>
                <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor = {item => item.id}
                horizontal = {false}
                numColumns = {3}
                initialNumToRender = {12}
                showsVerticalScrollIndicator= {false}
                />
                

            </SafeAreaView>

            
            <TouchableOpacity
          style={styles.seeMoreBtn}
          onPress={() => {
              scrollToEnd(true)
            
          } }
          >
           <Text style={styles.seeMoreBtnText}> See More </Text> 
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.nextStepBtn}
          onPress={() => {
                    Keyboard.dismiss();
            this.props.navigation.navigate('FollowFriendsScreen')
            
          } }
          >
           <Text style={styles.nextStepBtnText}> Next Step </Text> 
          </TouchableOpacity>
          


          </View> 


    </View>
        
    )   
        }
};

export default CategoriesScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '30%',
        color: "#FFF",
        width: '100%',
      },
      linearGradient: {
        top: 0,
        flex:1,
        borderRadius: 25,
        height: '10%',
        width: '99.99%',
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
      },
      leftNav: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: '5%',
        marginTop: '10%',
        alignContent: 'center',
    },
    leftNavText: {
        color: 'white',
        marginRight: '5%',
        marginTop: '2.5%',
    },
    leftNavActive: {
        width: '6%',
        height: 9,
        borderRadius: 50,
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: 'white',
        borderColor: 'white',
        marginTop: '4%',
        marginRight: '3%',
    },
    leftNavInActive: {
        width: '2%',
        height: 9,
        borderRadius: 100,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'white',
        marginTop: '4%',
        marginRight: '3%',
    },
    logoContainer: {
      flex: 1,
    },
    logoText:{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      alignSelf: 'center',
      
    },
    navLink: {
      flex: 1,
    },
    navlinkText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: '10%',
    marginTop: '2.5%',
    color: 'white',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: '10%',
        marginBottom: '12%',
        opacity: 0.5,
    },
  body: {
    height: '70%',
    width: '100%',
    color: 'black',
    backgroundColor: 'white',
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
item: {
    padding: 8,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: 80,
},
image: {
    flex: 1,
    justifyContent: "center",
},
itemTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
},
itemContainer: {
    flex: 1,
    width: '100%',
    height: '60%',
    borderRadius: 15,
    marginTop: '8%',
    zIndex: 0,
    alignItems: 'flex-start',
},
nextStepBtn: {
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
nextStepBtnText: {
    color: "white",
    fontSize: 16,
},
seeMoreBtn: {
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: '#A428C0',
    backgroundColor: "white",
    zIndex: 1,
    height: '8%',
    borderRadius: 30,
    marginTop: '5%',
    borderWidth: 1,
},
seeMoreBtnText: {
    color: "#A428C0",
    fontSize: 16,
},
});

