
import { View, Text, FlatList, ScrollView, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

import { Button, ButtonGroup, Card } from '@rneui/themed'
import { useAppSelector } from '@/app/redux/store'
import Feather from '@expo/vector-icons/Feather'
import Post from './post'

export default function PostPanel() {
     

     const posts = useAppSelector(state=>state.fakeGram.posts)
    
  return (
   
       <ScrollView  contentContainerStyle = {{ alignItems:'center', gap:10}}>
          {posts?.map(item=> 
          <Post key={item.id} item = {item}></Post>
        )}
       </ScrollView>
        
       
  )
}