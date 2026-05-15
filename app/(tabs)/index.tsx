import PostPanel from "@/components/postPanel";
import StoryPanel from "@/components/storyPanel";
import TopBar from "@/components/topBar";
import { useRouter } from "expo-router";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Homepage() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Button
        title="Login"
        onPress={() => router.replace("/registerScreen")}
      ></Button>
      {/* <TopBar></TopBar> */}
      <StoryPanel/>
      <PostPanel/>
    </SafeAreaView>
  );
}
