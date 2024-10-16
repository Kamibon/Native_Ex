import { Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export default function TabLayout() {
  return (
    <Tabs initialRouteName='index' screenOptions={{ tabBarActiveTintColor: 'black' }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown:false,
            
          title: 'Homepage',
          tabBarIcon:()=> <Feather name="home" size={24} color="black" />
          
        }}
        
      />
      <Tabs.Screen
        
        name="search"
        options={{
          headerShown:false,
          title: 'Search',
          tabBarIcon:()=><AntDesign name="search1" size={24} color="black" />
        }}
      />
       <Tabs.Screen
        
        name="addPost"
        options={{
          headerShown:false,
          title: 'Aggiungi post',
          tabBarIcon:()=><AntDesign name="plus" size={24} color="black" />
        }}
      />
      <Tabs.Screen
        
        name="account"
        options={{
          headerShown:false,
          title: 'Your account',
          tabBarIcon:()=><MaterialCommunityIcons name="account" size={24} color="black" />
        }}
      />
    

    </Tabs>
  );
} 