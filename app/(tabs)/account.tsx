
import { View, Text, FlatList } from 'react-native'
import React from 'react'

import { useAppSelector } from '../redux/store'
import { Avatar, Card, Tile } from '@rneui/themed';

export default function Account() {

 const posts = useAppSelector(state=> state.fakeGram.posts);

 const user = useAppSelector(state=>state.fakeGram.users[0])
 const selected = posts.filter(el=>el.id<=17)
 
  return (
    <View>
        <View className=' bg-slate-400 flex  items-center justify-center h-[10%]'>
          <Avatar rounded size={45} source={{ uri: user.avatar }}></Avatar>
          <Text className=' font-extrabold'>{user.name}</Text>
          <Text>{user.email}</Text>

        </View>
      <FlatList key={10} refreshing  numColumns={20} data = {selected} renderItem={({item})=>
     <Tile className=' w-[33%] ' imageSrc={{uri:item.images[0]}}></Tile> }></FlatList>
       
     
     
    

    
    </View>
  )
}