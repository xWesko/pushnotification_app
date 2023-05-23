import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Pantallas
import Login from './src/views/Login';
import Home from './src/views/Home';

const Stack = createNativeStackNavigator();

const token = '';

const App = () => {
  return (
    <NavigationContainer>
      {token !== '' ? (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
