import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function TopBar() {
  const router = useRouter();

  return (
    <View style={{ marginBottom: 4 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          width: "100%",
        }}
      >
        <TouchableOpacity onPress={() => router.push("/addPost")}>
          <Ionicons name="add" size={28} />
        </TouchableOpacity>
        <Text style={{ fontWeight: "800", fontSize: 24 }}>Per te</Text>

        <Ionicons
          onPress={() => router.push("/chat")}
          name="paper-plane-outline"
          size={24}
        />
      </View>
    </View>
  );
}
