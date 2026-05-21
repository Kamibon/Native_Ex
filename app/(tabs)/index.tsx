import PostPanel from "@/components/postPanel";
import StoryPanel from "@/components/storyPanel";
import TopBar from "@/components/topBar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Homepage() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        gap: 8,
        paddingVertical: 12,
        width: "100%",
      }}
    >
      <TopBar/>
      <StoryPanel />
      <PostPanel />
    </SafeAreaView>
  );
}
