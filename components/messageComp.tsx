import { View, Text, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";

export default function MessageComp({
  message,
  time,
  whoSentThis,
}: {
  message: string;
  time: string;
  whoSentThis: boolean;
}) {
  return (
    <KeyboardAvoidingView>
      <View style={{ flexDirection: "row", justifyContent: whoSentThis ? "flex-end" : "flex-start" }}>
        <View
          style={{
            backgroundColor: whoSentThis ? "#2563eb" : "#6b7280",
            borderRadius: 12,
            marginVertical: 12,
            maxWidth: "75%",
          }}
        >
          <Text style={{ color: "white", padding: 12 }}>{message}</Text>
          <Text
            style={{
              color: "white",
              fontWeight: "200",
              position: "absolute",
              right: 4,
              bottom: 0,
              marginTop: 8,
            }}
          >
            {time}
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
