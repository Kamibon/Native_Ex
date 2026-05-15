import { View, Text } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "expo-router";
import { CommonActions } from "@react-navigation/native";

export default function TopBar() {
  const navigation = useNavigation();

  return (
    <View style={{ marginBottom: 12 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon
          containerStyle={{ marginHorizontal: 5 }}
          icon={{ name: "instagram", type: "antdesign" }}
        ></Icon>
        <Text style={{ fontWeight: "800", fontSize: 24 }}>Per te</Text>

        <View style={{ flexDirection: "row", position: "absolute", right: 12 }}>
          <View style={{ marginHorizontal: 8 }}>
            <Icon icon={{ name: "heart-outline", type: "ionicon" }}></Icon>
          </View>
          <Icon
            onPress={() =>
              navigation.dispatch(CommonActions.navigate({ name: "chat" }))
            }
            icon={{ name: "paper-plane", type: "simple-line-icon" }}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
