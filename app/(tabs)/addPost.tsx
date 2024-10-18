
import { View, Text, SafeAreaView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Input, Skeleton, Tile } from '@rneui/themed'
import * as DocumentPicker from 'expo-document-picker'
import { createPost, resetPostCreationStatus } from '../service/slice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { CommonActions, useNavigation } from '@react-navigation/native';


 

export default function AddPost() {

    const [description, setDescription] = useState('');
    const [uri, setUri] = useState('');
    const dispatch = useAppDispatch()
    const loadedPost = useAppSelector(state=>state.fakeGram.postCreationStatus)
    const navigation = useNavigation()
    
    


    useEffect(()=>{
        if(loadedPost === "success")
          Alert.alert("Post caricato con successo!", "Potrai vedere il tuo post sulla bacheca");
        if(loadedPost === "failure")
          Alert.alert("Fallimento nel caricamento del post")
        const id = setTimeout(() => {
          dispatch(resetPostCreationStatus())
          navigation.dispatch(CommonActions.navigate({ name: "index" }));
          
          
        }, 3000);
        return ()=>clearTimeout(id)

    }, [loadedPost])
    


  return (
    <SafeAreaView>
          <View className=' flex flex-col align-middle m-[13%]'>
              
              { !uri && <Skeleton height={400}></Skeleton>}
              { uri && <Tile imageSrc={{ uri: uri}} width={260} height={400}></Tile>}

              <Button onPress={async()=>
                { const res = await DocumentPicker.getDocumentAsync({type:'image/*'})
                  const file = await(res);
                  
                  if(file.assets)
                  setUri(file.assets[0].uri)                
                }}>
                   Aggiungi foto</Button>
              <Input keyboardAppearance='dark' style = {{ margin:5}} onChangeText={(e)=>setDescription(e)} 
              placeholder='Aggiungi descrizione'/> 
              <Button className=' absolute bottom-0' onPress={()=>{ 
                dispatch(createPost({ id: 500, description: description, imageUri: uri }))}}>
                Carica il post
                </Button>
                

          </View>

    </SafeAreaView>
  )
}