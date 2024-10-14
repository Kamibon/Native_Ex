import { Tabs, useNavigation } from "expo-router";
import { Button, StatusBar, Text, View } from "react-native";
import StoryPanel from '@/components/storyPanel'
import PostPanel from "@/components/postPanel";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Homepage() {

  
  return (
    <SafeAreaView
      >
        
        <StoryPanel></StoryPanel>
        { <PostPanel></PostPanel> }
        <Button title="Vai a search" onPress={()=>console.log('naviga')}></Button>
      
    </SafeAreaView>
  );
}
