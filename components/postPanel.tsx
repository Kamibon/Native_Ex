import { ScrollView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppSelector } from "@/app/redux/store";

import Post from "./post";

export default function PostPanel() {
  const posts = useAppSelector((state) => state.fakeGram.posts);

  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        paddingBottom: insets.bottom + 64,
        width: "100%",
      }}
      showsVerticalScrollIndicator = {false}
      contentContainerStyle={{
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 20,
        paddingVertical: 16,
        width: "100%",
      }}
    >
      {posts?.map((item) => (
        <Post key={item.id} item={item} />
      ))}
    </ScrollView>
  );
}
