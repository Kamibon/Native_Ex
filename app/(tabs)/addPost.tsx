
import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Button, Input } from '@rneui/themed'
import  DocumentPicker, {pick } from 'react-native-document-picker'

export default function AddPost() {
  return (
    <SafeAreaView>
          <View className=' m-[10%]'>
              
              <Button onPress={async()=>{
                try {
                    const [pickResult] = await DocumentPicker.pick()
                    console.log(pickResult)
                } catch (error) {
                    
                }
              }}> Aggiungi foto </Button>
              <Input placeholder='Aggiungi descrizione'/> 

          </View>

    </SafeAreaView>
  )
}