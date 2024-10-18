import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { UserDto } from '@/app/service/slice'
import { Avatar } from '@rneui/themed'
import { useNavigation } from 'expo-router'
import { CommonActions } from '@react-navigation/native'

export default function ChatView( {id, avatar, name, message} :{id:Number, avatar: string, name:string, message: string}) {

const navigation = useNavigation()

  return (
    <View >
        <Pressable onPress={()=>navigation.dispatch(CommonActions.navigate({name:'chatDetails', params:{id,avatar,name,message}}))}>
      <View  key={id.toString()} className='my-3 ml-2 flex flex-row items-center'>
          <Avatar  rounded source={{uri:avatar}}></Avatar>
            <View className=' ml-3'>
           <Text className=' font-bold'>{name}</Text>
           <Text className='  overflow-clip'>{message}</Text>
           </View>
       </View>
       </Pressable>
    </View>
  )
}