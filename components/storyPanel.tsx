import { View,   FlatList, Text, useWindowDimensions, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Divider, Header, SearchBar } from '@rneui/themed';
import { useSelector } from 'react-redux';
import { useAppSelector } from '@/app/redux/store';




const StoryPanel = () => {
    
    const users = useAppSelector(state=>state.fakeGram.users)
    
  return (
    <View className=' fixed top-0'>
      
        
        <FlatList initialNumToRender={15} contentInset={{right:5, left:5}} showsHorizontalScrollIndicator={false} 
        contentContainerStyle = {{padding:5, gap:10}} ItemSeparatorComponent={()=><Divider ></Divider>} horizontal data={users} 
        renderItem={({item})=>
        <Avatar key={item.name} rounded 
        size={40} title={item.name} source={{ uri:item.avatar}} >
        
        </Avatar>}>
        </FlatList>  
       
         

    </View>
  )
}

export default StoryPanel