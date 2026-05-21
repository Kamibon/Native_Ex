import React from "react";

import { useLocalSearchParams } from "expo-router";
import AccountLayout from "../accountLayout";

export default function Account() {
  const params = useLocalSearchParams();
  return <AccountLayout userId={1} />;
}
