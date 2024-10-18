import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/base'
import { Icon } from '@rneui/themed'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router'

export default function ChatDetails() {

    const navigation = useNavigation()
    
    

  return (
    <SafeAreaView className=' flex flex-col px-4'>
       <View className=' basis-[12%]  flex flex-row'>
          <Avatar rounded source={{uri:'https://i.imgur.com/LDOO4Qs.jpg'}} title='Utente'></Avatar>
           <View className=' ml-2 flex flex-col'>
            <Text className=' font-bold'>Pinco Panco</Text>
            <Text>Username</Text>

           </View>
           <View className=' flex flex-row absolute right-4'>
            <View className=' mr-4'>
             <Icon type='fontisto' name='phone'></Icon>
             </View>
             <Icon type='octicon' name='device-camera-video'></Icon>

           </View>
       </View>
       
       <View className=' basis-[88%] bg-gray-400 w-full flex flex-col  '>
           <View className='  bg-gray-600 rounded-lg my-3 max-w-[75%]  '>
             <Text className=' text-white p-3'>Ciao, sono Utente, la mia email è utente@gmail.com.</Text>
           </View>
           <View className='  bg-blue-500 rounded-lg my-3 max-w-[75%] '>
             <Text className=' text-white p-3'>Ciao Utente, sono Kami, la mia email è utente47@gmail.com.</Text>
           </View>
           <View className='  bg-gray-600 rounded-lg my-3 max-w-[75%]  '>
             <Text className=' text-white p-3'>Ciao, buona giornata</Text>
           </View>

       </View>
    </SafeAreaView>
  )
}