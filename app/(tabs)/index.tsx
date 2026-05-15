import { Tabs, useNavigation, useRouter } from "expo-router";
import { Button, StatusBar, Text, View } from "react-native";
import StoryPanel from "@/components/storyPanel";
import PostPanel from "@/components/postPanel";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "@/components/topBar";

export default function Homepage() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Button
        title="Login"
        onPress={() => router.navigate("/registerScreen")}
      ></Button>
      <TopBar></TopBar>
      <StoryPanel></StoryPanel>
      <PostPanel></PostPanel>
    </SafeAreaView>
  );
}
