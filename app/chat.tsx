import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { useAppSelector } from "@/app/redux/store";
import { Avatar } from "@rneui/themed";
import ChatView from "@/components/chatView";
import { SafeAreaView } from "react-native-safe-area-context";
import { Message } from "@/data/messages";

export default function Chat() {
  const users = useAppSelector((state) => state.fakeGram.users);
  const rooms = useAppSelector((state) => state.fakeGram.rooms);

  const me = 1;

  return (
    <SafeAreaView className=" p-5">
      <View className=" flex flex-row justify-between ">
        <Text className=" font-bold">Messaggi</Text>
        <Text className=" font-bold text-blue-500 ">Richieste</Text>
      </View>

      <FlatList
        className="mb-5"
        data={rooms.filter((item) => item.room_users.includes(me))}
        renderItem={({ item }) => (
          <ChatView
            room={item.room_id}
            name={
              users.find(
                (el) => el.id === item.room_users.filter((el) => el != me)[0],
              )!.name
            }
            avatar={
              users.find(
                (el) => el.id === item.room_users.filter((el) => el != me)[0],
              )!.avatar
            }
            message={item.message_list[item.message_list.length - 1].text}
            time={item.message_list[item.message_list.length - 1].time}
          ></ChatView>
        )}
      >
        {" "}
      </FlatList>
    </SafeAreaView>
  );
}
