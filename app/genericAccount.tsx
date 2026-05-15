import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import AccountLayout from "./accountLayout";

export default function GenericAccount() {
  const params = useLocalSearchParams();
  const id = params.id as unknown as number;
  return <AccountLayout userId={id}></AccountLayout>;
}
