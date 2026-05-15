import { View, Text, KeyboardAvoidingView, FlatList } from "react-native";
import React, { useState } from "react";
import { Avatar } from "@rneui/base";
import { Button, Icon, Input } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useAppDispatch, useAppSelector } from "./redux/store";
import MessageComp from "@/components/messageComp";
import { addMessage } from "./service/slice";

export default function ChatDetails() {
  const params: { room: number; avatar: string; name: string } =
    useLocalSearchParams() as unknown as {
      room: number;
      avatar: string;
      name: string;
    };

  const rooms = useAppSelector((state) => state.fakeGram.rooms);
  const roomMessages = rooms.find(
    (el) => el.room_id == params.room,
  )?.message_list;

  const me = 1;

  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();

  return (
    <KeyboardAvoidingView>
      <SafeAreaView style={{ flex: 1, flexDirection: "column", paddingHorizontal: 16 }}>
        <View style={{ flexBasis: "12%", flexDirection: "row" }}>
          <Avatar
            rounded
            source={{ uri: params.avatar }}
            title="Utente"
          ></Avatar>
          <View style={{ marginLeft: 8, flexDirection: "column" }}>
            <Text style={{ fontWeight: "bold" }}>{params.name}</Text>
            <Text>Username</Text>
          </View>
          <View style={{ flexDirection: "row", position: "absolute", right: 16 }}>
            <View style={{ marginRight: 16 }}>
              <Button
                buttonStyle={{ backgroundColor: "transparent" }}
                icon={{ name: "phone", type: "fontisto" }}
              ></Button>
            </View>
            <Button
              buttonStyle={{ backgroundColor: "transparent" }}
              icon={{ name: "device-camera-video", type: "octicon" }}
            ></Button>
          </View>
        </View>

        <View style={{ flexBasis: "80%", width: "100%", flexDirection: "column" }}>
          <FlatList
            data={roomMessages}
            renderItem={({ item }) => (
              <MessageComp
                message={item.text}
                time={item.time}
                whoSentThis={item.s_userId === me}
              ></MessageComp>
            )}
          ></FlatList>
        </View>
        <View style={{ flexDirection: "row", position: "absolute", bottom: "1%", right: 4 }}>
          <Input
            returnKeyType="send"
            onSubmitEditing={() => {
              dispatch(
                addMessage({
                  text: message,
                  time: (
                    new Date().getHours() +
                    ":" +
                    new Date().getMinutes()
                  ).toString(),
                  s_userId: me,
                  room_id: params.room,
                }),
              );

              setMessage("");
            }}
            value={message}
            onChangeText={(t) => setMessage(t)}
          />
          <Button
            onPress={() => {
              dispatch(
                addMessage({
                  text: message,
                  time: (
                    new Date().getHours() +
                    ":" +
                    new Date().getMinutes()
                  ).toString(),
                  s_userId: me,
                  room_id: params.room,
                }),
              );
              setMessage("");
            }}
            icon={<FontAwesome name="paper-plane"></FontAwesome>}
          ></Button>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
