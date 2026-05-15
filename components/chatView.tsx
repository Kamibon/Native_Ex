import { View, Text, Pressable } from "react-native";
import React from "react";

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

  //navigation.dispatch(CommonActions.navigate({name:'chatDetails', params:{id,avatar,name,message}}))

  return (
    <View>
      <Pressable
        onPress={() =>
          router.navigate({
            pathname: "/chatDetails",
            params: { room, avatar, name },
          })
        }
      >
        <View
          key={room.toString()}
          style={{
            marginVertical: 12,
            marginLeft: 8,
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
      <Divider></Divider>
    </View>
  );
}
