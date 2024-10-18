

import 'react-native-reanimated';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './(tabs)';
import Search from './(tabs)/search';
import { Stack } from 'expo-router';
import { getPosts, getUsers } from './service/slice';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  
  store.dispatch(getUsers())
  store.dispatch(getPosts())
  

  return (
    <Provider store={store}>
     
          
        <Stack initialRouteName='/'>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="chat" options={{ headerShown: false }} />
        <Stack.Screen name="chatDetails" options={{ headerShown: false }} />
        
        <Stack.Screen name="+not-found" />
      </Stack>
      
      </Provider>
   
  );
}
