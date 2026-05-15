import { useAppSelector } from "@/app/redux/store";
import ChatView from "@/components/chatView";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Chat() {
  const users = useAppSelector((state) => state.fakeGram.users);
  const rooms = useAppSelector((state) => state.fakeGram.rooms);

  const me = 1;

  return (
    <SafeAreaView style={{ padding: 5 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "bold" }}>Messaggi</Text>
        <Text style={{ fontWeight: "bold", color: "#3b82f6" }}>Richieste</Text>
      </View>

      <FlatList
        style={{ marginBottom: 5 }}
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
