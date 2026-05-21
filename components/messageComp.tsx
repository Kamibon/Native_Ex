import { useRecording } from "@/app/hooks/useRecording";
import { Message } from "@/data/messages";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function MessageComp({ message }: { message: Message }) {
  const { playAudio, isPlaying } = useRecording(
    message.audio ?? null,
  );
  return (
    <View
      style={{
        flexDirection: "column",
        alignSelf: message.s_userId === 1 ? "flex-end" : "flex-start",
        padding: 12,
        backgroundColor: message.s_userId === 1 ? "#2563eb" : "#6b7280",
        borderRadius: 12,
        maxWidth: "75%",
      }}
    >
      {message.text && (
        <Text style={{ color: "white", fontSize: 16 }}>{message.text}</Text>
      )}
      {message.audio && (
        <TouchableOpacity onPress={() => playAudio()}>
          <Ionicons name="mic" color={isPlaying? '#add8e6': 'white'} size={20}/>
        </TouchableOpacity>
      )}
      <View style={{ alignItems: "flex-end" }}>
        <Text
          style={{
            color: "white",
            fontWeight: "200",
            fontSize: 12,
          }}
        >
          {message.time}
        </Text>
      </View>
    </View>
  );
}
