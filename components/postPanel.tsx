import { ScrollView } from "react-native";
import React from "react";

import { useAppSelector } from "@/app/redux/store";

import Post from "./post";

export default function PostPanel() {
  const posts = useAppSelector((state) => state.fakeGram.posts);

  return (
    <ScrollView
      style={{ marginBottom: 144 }}
      contentContainerStyle={{ alignItems: "center", gap: 10 }}
    >
      {posts?.map((item) => (
        <Post key={item.id} item={item}></Post>
      ))}
    </ScrollView>
  );
}
