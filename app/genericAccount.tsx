import { useLocalSearchParams } from "expo-router";
import React from "react";
import AccountLayout from "./accountLayout";

export default function GenericAccount() {
  const params = useLocalSearchParams();
  const { id } = params as unknown as { id: number };
  return <AccountLayout userId={id} />;
}
