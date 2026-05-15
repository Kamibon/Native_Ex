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
      <View
        className={`flex flex-row ${whoSentThis ? "justify-end" : "justify-start"}`}
      >
        <View
          className={` ${whoSentThis ? "bg-blue-600" : "bg-gray-500"}  rounded-lg my-3 max-w-[75%]`}
        >
          <Text className=" text-white p-3">{message}</Text>
          <Text className=" text-white font-thin absolute right-1 bottom-0 mt-2">
            {" "}
            {time}
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
