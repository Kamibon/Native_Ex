 import { View, Text } from 'react-native'
 import React from 'react'
import { Icon } from '@rneui/themed'
import { useNavigation } from 'expo-router'
import { CommonActions } from '@react-navigation/native'
 
 export default function TopBar() {

const navigation = useNavigation()

   return (
     <View className='mb-3'> 
       <View className=' flex flex-row items-center'>
         
        <Icon style={{ marginHorizontal:5}} type='antdesign' name='instagram'></Icon>
        <Text className=' font-extrabold text-2xl'>Per te</Text>

        <View className=' flex flex-row absolute right-3'>
            <View className=' mx-2'>
        <Icon  type='ionicon' name='heart-outline'></Icon>
        </View>
        <Icon onPress={()=>navigation.dispatch(CommonActions.navigate({name:'chat'}))}  type='simple-line-icon' name='paper-plane'></Icon>
        </View>
       </View>
     </View>
   )
 }