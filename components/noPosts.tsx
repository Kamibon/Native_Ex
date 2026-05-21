import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function NoPosts() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 16, gap: 8 }}>
      <Ionicons name="camera" size={28} />
      <Text>Nessun post pubblicato</Text>
    </View>
  );
}
