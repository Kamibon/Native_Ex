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
          className="my-3 ml-2 flex flex-row items-center"
        >
          <Avatar rounded source={{ uri: avatar }}></Avatar>
          <View className=" ml-3">
            <Text className=" font-bold">{name}</Text>
            <Text className="  overflow-clip">{message}</Text>
          </View>
        </View>
        <Text className=" font-thin absolute bottom-0 right-0">{time}</Text>
      </Pressable>
      <Divider></Divider>
    </View>
  );
}
