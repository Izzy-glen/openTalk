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

const DATA = [
    {
        id: '1',
        name: 'John Doe',
        username: '@john_doe',
        title: 'Sport',
        image: {uri: './src/assets/images/soccer.jpg'},
    },
    {
        id: '2',
        name: 'Jane Doe',
        username: '@jane_doe',
        title: 'Dance',
        image: {uri: '../../assets/favicon.png'},
    },
    {
        id: '3',
        name: 'John Doe',
        username: '@john_doe',
        title: 'Movies',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '4',
        name: 'John Doe',
        username: '@john_doe',
        title: 'Food',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '5',
        name: 'John Doe',
        username: '@john_doe',
        title: 'Basketball',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '6',
        name: 'John Doe',
        username: '@john_doe',
        title: 'Architechture',
        image: {uri: '../../assets/bgimage.jpg'},
    },    {
        id: '7',
        name: 'John Doe',
        username: '@john_doe',
        title: 'Nature',
        image: {uri: '../../assets/bgimage.jpg'},
    },    {
        id: '8',
        name: 'John Doe',
        username: '@john_doe',
        title: 'Drink',
        image: {uri: '../../assets/bgimage.jpg'},
    },    {
        id: '9',
        name: 'John Doe',
        username: '@john_doe',
        title: 'Football',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '10',
        name: 'John Doe',
        username: '@john_doe',
        title: 'Cars',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '11',
        name: 'John Doe',
        username: '@john_doe',
        title: 'Weather',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '12',
        name: 'John Doe',
        username: '@john_doe',
        title: 'Skiing',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '13',
        name: 'John Doe',
        username: '@john_doe',
        title: 'Coding',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '14',
        name: 'John Doe',
        username: '@john_doe',
        title: 'Gaming',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '15',
        name: 'John Doe',
        username: '@john_doe',
        title: 'Crypto',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '16',
        name: 'John Doe',
        username: '@john_doe',
        title: 'Politics',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    {
        id: '17',
        name: 'John Doe',
        username: '@john_doe',
        title: 'News',
        image: {uri: '../../assets/bgimage.jpg'},
    },
    
];

const renderItem = ({ item }) => (
    <Item 
    title= {item.title} 
    image= {item.image}
    name= {item.name}
    username = {item.username}

    />     );  


 
const Item = ({ name, username, image }) => {
    
    return (
    <View style = {styles.item}>
    <TouchableOpacity style = {styles.cross}>
        <Text style = {styles.crossText}>x</Text>
    </TouchableOpacity>
    <View style = {styles.profilePic}>
        <Image source={require('../../assets/favicon.png')}/>
        {/* renderItem({Item.image}); */}
        {/* <Item image /> */}
        {/* <Image source={require(image)}/> */}

    </View>
    <View style= {styles.nameArea}>
        <Text style={styles.nameText}>{ name }</Text>
    </View>
    <View style= {styles.usernameArea}>
        <Text style={styles.usernameText}>{ username }</Text>
    </View>
    <TouchableOpacity
    style= {styles.followButton}
    >
        <Text style= {styles.followButtonText}>Follow</Text>
    </TouchableOpacity>

    </View>
)
};

class FollowFriendsScreen extends React.Component {    



render(){
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
                    <View style={styles.leftNavInActive}></View>
                    <View style={styles.leftNavActive}></View>

        
                 <TouchableOpacity
                  style={styles.navLink}
                  onPress={() => {
                            Keyboard.dismiss();
                    this.props.navigation.navigate('LandingScreen')
                    
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
                    <Text style={styles.headerText}>Follow Your Friends</Text>
        
                    <SafeAreaView 
                    style= {styles.itemContainer}
                    >
                        <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor = {item => item.id}
                        horizontal = {false}
                        numColumns = {2}
                        initialNumToRender = {12}
                        showsVerticalScrollIndicator= {false}
                        />
                <TouchableOpacity
                  style={styles.nextStepBtn}
                  onPress={() => {
                            Keyboard.dismiss();
                    this.props.navigation.navigate('LandingScreen')
                    
                  } }
                  >
                   <Text style={styles.nextStepBtnText}> Next Step </Text> 
                  </TouchableOpacity>
        
                    </SafeAreaView>
        
        

                  
        
        
                  </View> 
        
        
            </View>
                
            )   
};
}   

export default FollowFriendsScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
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
itemArea: {
    padding: 8,
    borderRadius: 20,
    borderColor: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 5,
    width: '45%',
    height: 180,
},
item: {
    padding: 8,
    borderRadius: 20,
    borderColor: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.05,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    // elevation: 3,
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    width: '35%',
    height: 220,
    padding: 0,
},
image: {
    flex: 1,
    justifyContent: "center",
    width: 100,
},

itemContainer: {
    flex: 1,
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: '8%',
    zIndex: 0,
    alignItems: 'flex-start',
    marginLeft: '3%',
},
cross: {
 width: 15,
 height: 15,
 marginTop: 5,
 right: -55,
 backgroundColor: 'red',
 justifyContent: 'center',
 alignItems: 'center',
 textAlign: 'center',
 textAlignVertical: 'center',
 borderRadius: 100,
},
crossText: {
    justifyContent: 'center',
    alignItems: 'center',
    top: -1,
    color: 'white',
},
profilePic: {
    borderRadius: 100,
    backgroundColor: 'black',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
},
nameArea: {
    justifyContent: 'center',
    alignItems: 'center',
},
nameText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
},
usernameArea: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
},
usernameText: {
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: 12,
},
followButton: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderStyle: 'solid',
    backgroundColor: '#A428C0',
    height: 30,
    zIndex: 1,
    borderRadius: 30,
    marginTop: '5%',
    marginBottom: '5%',
},
followButtonText: {
    color: 'white',
},
nextStepBtn: {
    position: 'absolute',
    left: 10,
    bottom: 30,
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    backgroundColor: '#A428C0',
    height: '10%',
    zIndex: 1,
    borderRadius: 30,

},
nextStepBtnText: {
    color: "white",
    fontSize: 18,
},

});