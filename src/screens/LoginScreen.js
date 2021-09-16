import React from 'react';
import {
    StyleSheet,
    StatusBar,
    Text,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    TextInput
} from 'react-native';
import { Input } from 'react-native-elements';
import {
    LinearGradient
} from 'expo-linear-gradient';
import { Auth } from '@aws-amplify/auth';


class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: styles.input,
            email: '',
            password: '',
            user: {},
            emailLabel: '',
            passwordLabel: '',
            emailPlaceholder: 'Your Email',
            passwordPlaceholder: 'Your Password'
        };
    }
        onFocus = () => {
            this.setState({
                style: styles.inputActive,
                emailLabel: 'Email',
                passwordLabel: 'Password',
                emailPlaceholder: ' ',
                passwordPlaceholder: ' '           
            });
        }

    handleSignIn = () => {
        const { email, password } = this.state;
        Auth.signIn(email, password)

        .then( user => {
            this.setState({ user });
            this.props.navigation.navigate('LandingScreen');
            alert('Signing In..');
        }
            )

        .catch(err => alert(err.message));
    }

        


    render() {


        return ( 
        <View
             style = {
            styles.container
            } >
            <StatusBar style = "none" />

            <LinearGradient colors = {
                ['#671ACF', '#A428C0']
            }
            start = {
                {
                    x: 0,
                    y: 0
                }
            }
            end = {
                {
                    x: 1,
                    y: 1
                }
            }
            style = {
                styles.linearGradient
            }>
            <View style={styles.leftNav}>


         <TouchableOpacity
          style={styles.navLink}
          onPress={() => {
            this.props.navigation.navigate('CreateAccount')
          } }
          >

           <Text style={styles.navlinkText}> Sign Up </Text> 
          </TouchableOpacity>
          </View>
            <View style={styles.logo}>
 
                <Text style={styles.logoText}>OpenTalk</Text>
            </View>



            </LinearGradient> 

            <View style={styles.body}>
            <Text style={styles.headerText}>Login</Text>

         <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={this.state.style}
        theme={{colors: {primary: '#A428C0'}}}
        >
        <Input   
        rightIcon={{ type: 'font-awesome', name: 'check' }}
        placeholder= { this.state.emailPlaceholder } 
        autoCompleteType='email'
        label= { this.state.emailLabel }
        onChangeText = {
            (value) => this.setState({ 
                email: value,
                })
            }
        onFocus={ () => this.onFocus() }
 
        />

      </KeyboardAvoidingView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={this.state.style}
        theme={{colors: {primary: '#A428C0'}}}
        >
        <Input 
        getRef= {input => this.input = input}
        rightIcon={{ type: 'font-awesome', name: 'eye' }}
        placeholder= { this.state.passwordPlaceholder } 
        autoCompleteType= 'password'
        label= { this.state.passwordLabel }
        error= "Check Password"
        onChangeText = {
            (value) => this.setState({ password: value })
            } 
        secureTextEntry={true}
            />

      </KeyboardAvoidingView>
      <TouchableOpacity
          style={styles.forgotPass}
          onPress = {
                this.handleSignIn
            }
          >
           <Text style={styles.forgotPassText}> Forgot your password? </Text> 
          </TouchableOpacity>

          
          <TouchableOpacity
          style={styles.confirmBtn}
          onPress = {
                this.handleSignIn
            }
          >
           <Text style={styles.confirmBtnText}> Confirm </Text> 
          </TouchableOpacity>
           


          </View> 

            </View>

        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: "#FFF",
        width: '100%',
    },
    linearGradient: {
        top: 0,
        flex: 1,
        borderRadius: 25,
        height: '10%',
        width: '99.99%',
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
    },
    body: {
        height: '70%',
        width: '100%',
        color: 'black',
        backgroundColor: 'white',
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
    logoContainer: {
        flex: 1,
    },
    logoText: {
        top: 0,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginBottom: 20,
    },
    navLink: {
        flex: 1,
    },
    navlinkText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: '10%',
        marginTop: '2 %',
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
    input: {
        width: '90%',
        opacity: 0.5,
        alignSelf: 'center',
        marginBottom: '5%',
    },
    inputActive:{
        width: '90%',
        color: '#A428C0',
        alignSelf: 'center',
        marginBottom: '5%',
    },
    passText: {

    },
    forgotPass: {

    },
    forgotPassText: {
        textAlign: 'right',
        marginRight: '5%',
        marginBottom: '20%',
        marginTop: '2%',
        opacity: 0.3,
    },
    confirmBtn: {
        alignSelf: 'center',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        backgroundColor: '#A428C0',
        height: 50,
        borderRadius: 30,
        marginTop: '5%',
    },
    confirmBtnText: {
        color: "white",
        fontSize: 16,
    },
    
});