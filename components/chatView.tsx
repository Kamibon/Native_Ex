import React from "react";
import { Pressable, Text, View } from "react-native";

import { Avatar } from "@rneui/themed";
import { useRouter } from "expo-router";

import { Divider } from "@rneui/base";

export default function ChatView({
  room,
  avatar,
  name,
  message,
  time,
}: {
  room: number;
  avatar: string;
  name: string;
  message: string;
  time: string;
}) {
  const router = useRouter();

  return (
    <View>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/chatDetails",
            params: { room, avatar, name },
          })
        }
      >
        <View
          key={room.toString()}
          style={{
            paddingHorizontal: 12,
            paddingVertical: 12,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar rounded source={{ uri: avatar }}></Avatar>
          <View style={{ marginLeft: 12 }}>
            <Text style={{ fontWeight: "bold" }}>{name}</Text>
            <Text style={{ overflow: "hidden" }}>{message}</Text>
          </View>
        </View>
        <Text
          style={{
            fontWeight: "200",
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          {time}
        </Text>
      </Pressable>
      <Divider />
    </View>
  );
}
