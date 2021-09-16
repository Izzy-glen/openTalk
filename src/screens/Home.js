import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity ,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


class HomeScreen extends React.Component {    
    render() {
        
        return(
            <View style={styles.container}>
    
            <LinearGradient
              colors={['#671ACF', '#A428C0' ]}
             style={styles.linearGradient}
        >
          
          <Text style={styles.logoText}>OpenTalk</Text>

          <Text style={styles.descr}>
          Follow your best friends and exchange messages about your activity and experience  
          </Text>

          
          <TouchableOpacity
          style={styles.login}
          onPress={() => 
                
                this.props.navigation.navigate('LoginScreen')}
          >
           <Text style={styles.loginBtnText}> Log In </Text> 
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.ca}
          onPress={() => 
                
                this.props.navigation.navigate('CreateAccount')}
          >
            <Text style={styles.caBtnText}> Create Account </Text>
          </TouchableOpacity>
          <View style={styles.footerArea}>
          <Text style={styles.footerAreaText}>
          Hosted by Kola 
          </Text> 
          </View>
        </LinearGradient>
        </View>
        )
    }
}; export default HomeScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: "#FFF",
    },
    linearGradient: {
      top: 0,
      flex:1,
      alignItems: 'center',
      justifyContent:'center',
      height: '100%',
      width: '100%',
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
    },
    logoText: {
      top: '12%',
      fontSize: 27,
      fontWeight: 'bold',
      color: 'white',
    },
    descr:{
      top: '16%',
      width: '80%',
      height: 'auto',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
      opacity: 0.5,
      lineHeight: 30,
    },
    login:{
      top: '23%',
      width: '80%',
      height: 50,
      borderRadius: 80,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: 'white',
      fontWeight: 'bold',
    },
    ca:{
      top: '25%',
      width: '80%',
      height: 50,
      borderRadius: 80,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    caBtnText:{
      color: "#FFF",
      fontWeight: 'bold',
    },
    loginBtnText:{
      color: "#A428C0",
      fontWeight: 'bold',
    },
    footerArea:{
      position: 'absolute',
      top: '95%',
      height: '5%',
    },
    footerAreaText:{
      color: "#FFF",
      opacity: 0.5,
      top: '100%'
    },
  });