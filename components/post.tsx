import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, ButtonGroup, Card } from '@rneui/themed'
import { PostDto } from '@/app/service/slice'
import Feather from '@expo/vector-icons/Feather'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesone from '@expo/vector-icons/FontAwesome'



export default function Post({item} : {item:PostDto}) {

  const [liked, setLiked] = useState(false)

  return (
    <Card key={item.id} containerStyle = {{ width:'65%'}} wrapperStyle = {{ padding:'2%'}} >
    <Card.Title>
       {item.title}
    </Card.Title>
    <Card.Divider></Card.Divider>
    <Card.Image style = {{ width:'95%'}}  source={{uri:item.images[0]}}>

    </Card.Image>
    <Card.FeaturedSubtitle className=' overflow-clip text-black font-light'>{item.description}</Card.FeaturedSubtitle>
    <Card.Divider>
    </Card.Divider>
    {/* <ButtonGroup  textStyle = {{ fontSize:10}} buttons={['Like', 'Commenta', 'Share']}>
       
    </ButtonGroup> */}
    <View className=' flex flex-row justify-start '>
     <Button onPress={()=>setLiked(prev=>!prev)} buttonStyle = {{ backgroundColor: 'transparent'}}  icon = {liked? <AntDesign color={'red'} name='heart'></AntDesign>: <AntDesign  name='hearto'></AntDesign>}></Button>
     <Button buttonStyle = {{ backgroundColor: 'transparent'}}  icon = {<FontAwesone name='comment-o'></FontAwesone>}></Button>
     </View>
    </Card>
  )
}