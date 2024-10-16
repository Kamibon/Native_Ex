
import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'

import { useAppSelector } from '../redux/store'
import { Avatar, Card, Overlay, Tile } from '@rneui/base';
import { Details } from '@/components/feed';


export default function Account() {

 const posts = useAppSelector(state=> state.fakeGram.posts);

 const user = useAppSelector(state=>state.fakeGram.users[0])
 const selected = posts.filter(el=>el.id<=17)
 const [showDetails, setShownDetails] = useState({ isShown: false, uri:'', description:''})
 
  return (
    <View>
        <View className=' bg-transparent my-5 flex  items-center justify-center h-[10%]'>
          <Avatar rounded size={45} source={{ uri: user.avatar }}></Avatar>
          <Text className=' font-extrabold'>{user.name}</Text>
          <Text>{user.email}</Text>

        </View>
      
        <FlatList key={3}  data={posts} initialNumToRender={15} numColumns={3}  renderItem={({item})=>  
    <View key={item.id} className='   w-[33.3%]'>
      <Tile  featured = {false} containerStyle = {{ margin:0}} contentContainerStyle = {{ height:0}} 
     onPress={()=>{  setShownDetails({isShown:true,
        uri:item.images[0], 
   description:item.description})}}  imageSrc={{uri:item.images[0]} }>

   </Tile> 
   </View>}>
     </FlatList>
       
     <Overlay  onPressOut={()=>setShownDetails({...showDetails, isShown: false})} isVisible = {showDetails.isShown}>
     { showDetails.isShown && <Details  uri = {showDetails.uri} description={showDetails.description}></Details>}
     </Overlay>

    
    </View>
  )
}