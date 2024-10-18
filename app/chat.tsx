import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useAppSelector } from '@/app/redux/store'
import { Avatar } from '@rneui/themed'
import ChatView from '@/components/chatView'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Chat() {

const users = useAppSelector(state=>state.fakeGram.users)
const lessUsers = users.filter(el=>el.id<30)

  return (
    <SafeAreaView  className=' p-5'>
      <Text className=' font-bold'>Messaggi</Text>
      <Text className=' font-bold text-blue-500'>Richieste</Text>
      {/*  { lessUsers.map(item=>
       <ChatView id = {item.id} name={item.name} avatar={item.avatar} message={`Ehi, mi chiamo ${item.name}, la mia email 
       è ${item.email}`}  >
 
       </ChatView>*/}
       <FlatList className=' mb-5' data={lessUsers} renderItem={({item})=>
        <ChatView id = {item.id} name={item.name} avatar={item.avatar} message={`Ehi, mi chiamo ${item.name}, la mia email 
       è ${item.email}`}/>}>

       </FlatList>
       
    
    </SafeAreaView>
  )
}