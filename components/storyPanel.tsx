import { View,   FlatList, Text, useWindowDimensions, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar,  LinearProgress, Overlay, Tile } from '@rneui/themed';

import { useAppSelector } from '@/app/redux/store';




const StoryPanel = () => {
    
    const users = useAppSelector(state=>state.fakeGram.users)
    const [openModal, setOpenModal] = useState({ isOpen:false, uri:''})
    const [currentIndex, setCurrentIndex] = useState(0)
    const [progress, setProgress] = useState(0)
    const screenHeight = useWindowDimensions().height

  const nextStory = ()=>{
    if(currentIndex+1< users.length)
    {setOpenModal({...openModal, uri: users[currentIndex+1].avatar}); setCurrentIndex(prev=>prev+1)}
    if(currentIndex+1 === users.length) setOpenModal({...openModal, isOpen: false}) 
  } 

  useEffect(()=>{
    const tid = setInterval(() => {
      setProgress(prev=>prev+0.1)
     
    }, 100);
    if(progress>=2) {nextStory(), setProgress(0)}
    return ()=>clearInterval(tid)
  }, [progress])
    
  return (
    <View className=' fixed top-0'>
      
        
        <FlatList initialNumToRender={15} contentInset={{right:5, left:5}} showsHorizontalScrollIndicator={false} 
        contentContainerStyle = {{padding:5, gap:10}} horizontal data={users} 
        renderItem={({item, index})=>
          <View >
        <Avatar onPress={()=>{setOpenModal({isOpen:true, uri: item.avatar}); setCurrentIndex(index); setProgress(0.1) }} 
        avatarStyle={{ borderColor:'red', borderWidth:2}} key={item.name} rounded 
        size={55} title={item.name} source={{ uri:item?.avatar}} >
       
        </Avatar>
        <Text className=' font-bold'>{item.name}</Text>
        </View>}>
        </FlatList>  
       { openModal.isOpen && <Overlay onBackdropPress={()=> setOpenModal({...openModal, isOpen: false})} isVisible = {openModal.isOpen}>
        <LinearProgress style = {{marginVertical:5}} value={progress} color='black' variant='determinate'></LinearProgress>
         <Tile title={ users[0].name} titleStyle = {{ fontSize : 10}} onPress={()=> nextStory() } 
        height={screenHeight*0.9} imageSrc={{uri:openModal.uri}}></Tile> 
        </Overlay>}
         

    </View>
  )
}

export default StoryPanel