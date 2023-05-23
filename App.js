import React from 'react';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import messaging from '@react-native-firebase/messaging';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Alert} from 'react-native';

import {
  notificationListener,
  requestUserPermission,
} from './src/services/notification';

//Pantallas
import Login from './src/views/Login';
import Logout from './src/views/Logout';
import Home from './src/views/Home';
import Listado from './src/views/Listado';

const Stack = createNativeStackNavigator();
const token = 'abc123';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const App = () => {
  React.useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);

  React.useEffect(() => {
    messaging().onMessage(async remoteMessage => {
      console.log('remoteMessage: ', remoteMessage);
      Alert.alert(
        remoteMessage.notification.title,
        remoteMessage.notification.body,
        [
          {
            text: 'Cerrar',
            style: 'cancel',
          },
        ],
      );
    });

    messaging()
      .subscribeToTopic('general')
      .then(() => console.log('Mensajes para general'));

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('background: ', remoteMessage);
    });
  }, []);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {token !== '' ? (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Listado" component={Listado} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Logout" component={Logout} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
