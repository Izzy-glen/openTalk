import 'react-native-gesture-handler';
import Amplify from '@aws-amplify/core';
import AWSConfig from './src/aws-exports';


import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './src/navigations/StackNavigator';

Amplify.configure (AWSConfig)

const App = () => {

  return(

    <>
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
    </>
  )
};
export default App;
