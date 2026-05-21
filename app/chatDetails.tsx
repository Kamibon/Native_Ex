import MessageComp from "@/components/messageComp";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar } from "@rneui/base";
import { Button } from "@rneui/themed";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRecording } from "./hooks/useRecording";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { addMessage } from "./service/slice";

export default function ChatDetails() {
  const params: { room: number; avatar: string; name: string } =
    useLocalSearchParams() as unknown as {
      room: number;
      avatar: string;
      name: string;
    };

  const [audioUri, setAudioUri] = useState<string | null>(null);

  const { stopRecording, startRecording } = useRecording(audioUri);

  const createMessage = (audioUriToSend: string | null = null) => {
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
        audio: audioUriToSend ?? audioUri ?? null,
      }),
    );
    setAudioUri(null);
  };

  const rooms = useAppSelector((state) => state.fakeGram.rooms);
  const roomMessages = rooms.find(
    (el) => el.room_id == params.room,
  )?.message_list;

  const me = 1;

  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, paddingTop: 16 }}
      behavior="padding"
      keyboardVerticalOffset={0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={{ flex: 1, flexDirection: "column", paddingHorizontal: 16 }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                flex: 1,
              }}
            >
              <Avatar rounded source={{ uri: params.avatar }} title="Utente" />
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontWeight: "bold" }}>{params.name}</Text>
                <Text>Username</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Button
                  buttonStyle={{ backgroundColor: "transparent" }}
                  icon={<Ionicons name="call" size={24} />}
                />
              </View>
              <Button
                buttonStyle={{ backgroundColor: "transparent" }}
                icon={<Ionicons name="videocam" size={24} />}
              />
            </View>
          </View>

          <FlatList
            data={roomMessages}
            renderItem={({ item }) => <MessageComp message={item} />}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingVertical: 12, gap: 8 }}
          />

          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              gap: 12,
              paddingHorizontal: 16,
            }}
          >
            <TextInput
              autoFocus
              multiline
              style={{
                flex: 1,
                paddingHorizontal: 12,
                paddingVertical: 10,
                backgroundColor: "#F3E8FF",
                borderRadius: 20,
                textAlignVertical: "top",
              }}
              returnKeyType="send"
              onSubmitEditing={() => {
                createMessage();
                setMessage("");
              }}
              value={message}
              onChangeText={(t) => setMessage(t)}
            />
            <TouchableWithoutFeedback
              onPress={() => {
                if (!message.trim()) {
                  alert("Il messaggio non può essere vuoto");
                  return;
                }
                createMessage();
                setMessage("");
              }}
            >
              <Ionicons name="send" size={24} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Ionicons
                name="mic"
                size={24}
                onPressIn={startRecording}
                onPressOut={async () => {
                  const uri = await stopRecording();
                  if (uri) {
                    setAudioUri(uri);
                    createMessage(uri);
                  }
                }}
              />
            </TouchableWithoutFeedback>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
