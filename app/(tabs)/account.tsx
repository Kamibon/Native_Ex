
import { View, Text, FlatList, DrawerLayoutAndroidComponent, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

import { useAppSelector } from '../redux/store'
import { Avatar, Button, Overlay, Tile } from '@rneui/base';
import { Details } from '@/components/feed';
import { useNavigation } from '@react-navigation/native';
import { Drawer } from 'react-native-drawer-layout';
import Feather from '@expo/vector-icons/Feather';


export default function Account() {
 
 const posts = useAppSelector(state=> state.fakeGram.posts);

 const user = useAppSelector(state=>state.fakeGram.users[0])
 const selected = posts.filter(el=>el.id<=17)
 const [showDetails, setShownDetails] = useState({ isShown: false, uri:'', description:''})
 
 const navigator = useNavigation()


  return (
    <SafeAreaView>
      
        <View className=' bg-transparent flex h-[8%]'>
        <View className=' flex flex-row justify-end w-full mt-7'>
      <Button  buttonStyle = {{backgroundColor:'transparent', width:'40%'}} iconPosition='right' icon = {<Feather name='menu'></Feather>}/>
      </View>
        </View>
          <View className='flex flex-col my-1 items-center justify-center'>
          <Avatar rounded size={45} source={{ uri: user.avatar }}></Avatar>
          <Text className=' font-extrabold'>{user.name}</Text>
          <Text>{user.email}</Text>
          </View>
          
    
        <FlatList className=' mb-36' key={3}  data={posts} initialNumToRender={15} numColumns={3}  renderItem={({item})=>  
    <View key={item.id} className='   w-[33.3%]'>
      <Tile  featured = {false} containerStyle = {{ margin:0}}   contentContainerStyle = {{ height:0}} 
     onPress={()=>{  setShownDetails({isShown:true,
        uri:item.images[0], 
   description:item.description})}}  imageSrc={{uri:item.images[0]} }>

   </Tile> 
   </View>}>
     </FlatList>
       
     <Overlay  onPressOut={()=>setShownDetails({...showDetails, isShown: false})} isVisible = {showDetails.isShown}>
     { showDetails.isShown && <Details  uri = {showDetails.uri} description={showDetails.description}></Details>}
     </Overlay>

    
    </SafeAreaView>
  )
}