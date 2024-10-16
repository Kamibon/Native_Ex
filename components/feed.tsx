import { View, Text, ScrollView, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '@/app/redux/store'
import { Tile } from '@rneui/themed'
import { Overlay } from '@rneui/base'


 export function Details({ uri, description }: { uri: string, description: string }) {
     return (
         <Tile
             overlayContainerStyle={{ backgroundColor: 'blue', width: '60%' }}
             imageSrc={{ uri }}
             title={description}
             titleStyle={{ fontSize: 10, color: 'white' }}
         />
     );
 }

export default function Feed() {

const posts = useAppSelector(state=>state.fakeGram.posts)

const [showDetails, setShownDetails] = useState({ isShown: false, uri:'', description:''})



  return (
    <View>
    
    <FlatList key={2}  data={posts} initialNumToRender={15} numColumns={2}  renderItem={({item})=>  
    <View key={item.id} className='   w-[50%]'>
      <Tile contentContainerStyle = {{ height:0}}    
     onPress={()=>{  setShownDetails({isShown:true,
        uri:item.images[0], 
   description:item.description})}}  imageSrc={{uri:item.images[0]} }>

   </Tile> 
   </View>}>
     </FlatList>

      <Overlay onPressOut={()=>{ setShownDetails({...showDetails, isShown:false})}} 
      isVisible = {showDetails.isShown}>
        <Details uri = {showDetails.uri} description={showDetails.description}>

      </Details>
      </Overlay>
   
    </View>
  )
}

