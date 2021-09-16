import React, {
    useState
} from 'react';
import {
    StyleSheet,
    StatusBar,
    Text,
    View,
    SafeAreaView,
    Button,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Image,
    Keyboard,
    Modal,
} from 'react-native';
import { Input } from 'react-native-elements';
import {
    LinearGradient
} from 'expo-linear-gradient'; 
import { ScrollView, State } from 'react-native-gesture-handler';
import { Auth } from 'aws-amplify';
import { launchImageLibrary } from 'react-native-image-picker';


    class CreateAccount extends React.Component {    
        constructor(props) {
            super(props);
            this.state = {
                style: styles.input,
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                confirmationCode: '',
                image: '',
                modalVisible: false,
                nameLabel: '',
                emailLabel: '',
                passwordLabel: '',
                confirmPasswordLabel: '',
                namePlaceholder: 'Your Name',
                emailPlaceholder: 'Your Email',
                passwordPlaceholder: 'Your Password',
                confirmPasswordPlaceholder: 'Confirm Password',         

            };
        }
        onFocus = () => {
            this.setState({
                style: styles.inputActive,
                nameLabel: 'Name',
                emailLabel: 'Email',
                passwordLabel: 'Password',
                confirmPasswordLabel: 'Confirm Password',
                namePlaceholder: ' ',
                emailPlaceholder: ' ',
                passwordPlaceholder: ' ',
                confirmPasswordPlaceholder: ' ',         
            });
        }
        handleChoosePhoto = async () => 
        {
            try {
                launchImageLibrary({
                    mediaType: 'photo',
                    includeBase64: false,
                    maxHeight: 'auto',
                    maxWidth: 'auto',
                }, (response) => {
                    if (response.uri) {
                        updateAppState( 'imageURI', response.uri )
                        const filename = uuid.v4() + '_profilePic.png'
                        image: filename 
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }

        handleSignUp = () => {
            const {image, username, email, password, confirmPassword } = this.state;

            if (password === confirmPassword) {
                Auth.signUp({
                    username: username,
                    password: password,
                    attributes: {
                        email: email                    },
                })

                .then(() =>  {
                    this.setState({ modalVisible: true});
                    alert('Check Verification Code in Your Email...');
                })

                

                .catch( err => console.log(err));
            } else {
                alert('Passwords do not Match!')
            }
        }

        handleConfirmationCode = () => {
            const {username, confirmationCode } = this.state; 
            Auth.confirmSignUp(username, confirmationCode, {})
            .then(() => {
                alert('Verification Successful...');
                this.setState({ modalVisible: false });
                this.props.navigation.navigate('CategoriesScreen');
            })
            .catch(err => console.log(err));
        }

        resendConfirmationCode = () => {
            const {username} = this.state; 
            try {
                 Auth.resendSignUp(username);
                alert('Code Resent Successfully...');
            } catch (err) {
                alert('Error Resending Code: ', err.message);
            }
        }


        render() {

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
            <View style={styles.leftNavActive}></View>
            <View style={styles.leftNavInActive}></View>
            <View style={styles.leftNavInActive}></View>

         <TouchableOpacity
          style={styles.navLink}
                onPress={() => {
                    Keyboard.dismiss();
            this.props.navigation.navigate('LoginScreen')

          } }
          >

           <Text style={styles.navlinkText}> Sign In </Text> 
          </TouchableOpacity>
          </View>

          <View style={styles.logoContainer}>
 
          <Text style={styles.logoText}>OpenTalk</Text>
          </View>
          </LinearGradient>
          <View style={styles.body}>
            <Text style={styles.headerText}>Create Account</Text>
                    <ScrollView style={styles.inputArea}>


            <TouchableOpacity 
                  style= {styles.imageUpload}
                  onPress= {
                      this.handleChoosePhoto
                  }
                  >
                <Image 
                    style={styles.imageUploadBtn}
                    source={
                        require('../assets/images/camera.png')
                    }
                />
              </TouchableOpacity>


         <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={this.state.style}
        theme={{colors: {primary: '#A428C0'}}}
        >
        <Input
        getRef= {input => this.input = input}   
        rightIcon={{ type: 'font-awesome', name: 'check' }}
        placeholder= { this.state.namePlaceholder } 
        autoCompleteType='username'
        label= { this.state.nameLabel }
        onChangeText = {
            (value) => this.setState({ 
                username: value,
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
        placeholder= { this.state.confirmPasswordPlaceholder } 
        autoCompleteType= 'password'
        label= { this.state.confirmPasswordLabel }
        error= "Check Password"
        onChangeText = {
            (value) => this.setState({ confirmPassword: value })
            } 
        secureTextEntry={true}
        onFocus={ () => this.onFocus() }

            />

      </KeyboardAvoidingView>
         
          <TouchableOpacity
          style={styles.confirmBtn}
          onPress = { this.handleSignUp }
          >
           <Text style={styles.confirmBtnText}> Confirm </Text> 
          </TouchableOpacity>
           
          </ScrollView>

          </View> 
      
                <Modal
          visible={this.state.modalVisible}
          >

<LinearGradient
          colors={['#671ACF', '#A428C0' ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.linearGradient}
        >

         <View style={styles.leftNav}>
            <Text style={styles.leftNavText}>Step</Text>
            <View style={styles.leftNavActive}></View>
            <View style={styles.leftNavInActive}></View>
            <View style={styles.leftNavInActive}></View>

         <TouchableOpacity
          style={styles.navLink}
                onPress={() => {
                    Keyboard.dismiss();
            this.props.navigation.navigate('Categories Navigator')
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
          <Text style={styles.headerText}>Confirmation Code</Text>


          <Input style={styles.input} 
        placeholder='Confirmation Code' 
        rightIcon= {{type: 'font-awesome', name: 'lock'}} 
        onChangeText = {
            (value) => this.setState({ confirmationCode: value})
            } 
        />
       <TouchableOpacity 
        style={styles.confirmBtn}
        onPress= { this.handleConfirmationCode }
       >
       <Text style={styles.confirmBtnText}>Confirm</Text>
       </TouchableOpacity> 

       <TouchableOpacity 
        style={styles.confirmBtn}
        onPress= { this.resendConfirmationCode }
       >
       <Text style={styles.confirmBtnText}>Resend Confirmation Code</Text>
       </TouchableOpacity> 

       </View>
              
          </Modal>
          </View>

        );
    }
}
     
export default CreateAccount;

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
        marginTop: '9%',
        marginBottom: '9%',
        opacity: 0.5,
    },
    imageUpload: {
        borderWidth: 0.5,
        padding: 20,
        borderStyle: 'solid',
        borderRadius: 100,
        alignSelf: 'center',

    },
    imageUploadBtn: {
        height: 20,
        width: 20,
        zIndex: 5,

    },
    inputArea: {
        width: '100%',
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
        marginBottom: '2%',
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
        marginBottom: '5%'
    },
    confirmBtnText: {
        color: "white",
        fontSize: 16,
    },
    
});