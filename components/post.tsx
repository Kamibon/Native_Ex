import { View, Text } from 'react-native'
import React from 'react'
import { ButtonGroup, Card } from '@rneui/themed'

export default function Post({item}) {
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
    <ButtonGroup textStyle = {{ fontSize:10}} buttons={['Like', 'Commenta', 'Share']}>
       
    </ButtonGroup>
    </Card>
  )
}