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
      <SafeAreaView className=" flex flex-col px-4">
        <View className=" basis-[12%]  flex flex-row">
          <Avatar
            rounded
            source={{ uri: params.avatar }}
            title="Utente"
          ></Avatar>
          <View className=" ml-2 flex flex-col">
            <Text className=" font-bold">{params.name}</Text>
            <Text>Username</Text>
          </View>
          <View className=" flex flex-row absolute right-4">
            <View className=" mr-4">
              <Button
                buttonStyle={{ backgroundColor: "transparent" }}
                icon={<Icon type="fontisto" name="phone"></Icon>}
              ></Button>
            </View>
            <Button
              buttonStyle={{ backgroundColor: "transparent" }}
              icon={<Icon type="octicon" name="device-camera-video"></Icon>}
            ></Button>
          </View>
        </View>

        <View className=" basis-[80%]  w-full flex flex-col  ">
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
        <View className=" flex flex-row fixed bottom-[1%] right-1">
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
