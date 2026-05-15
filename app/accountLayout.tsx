import { View, Text, FlatList, SafeAreaView } from "react-native";
import React, { useState } from "react";

import { useAppSelector } from "./redux/store";
import { Avatar, Button, Overlay, Tile } from "@rneui/base";
import { Details } from "@/components/feed";

import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";

export default function AccountLayout({ userId }: { userId: number }) {
  const posts = useAppSelector((state) => state.fakeGram.posts);
  const router = useRouter();

  const user = useAppSelector((state) =>
    state.fakeGram.users.find((el) => el.id == userId),
  );

  if (!user) router.navigate("/(tabs)/");

  const [showDetails, setShownDetails] = useState({
    isShown: false,
    uri: "",
    description: "",
  });

  return (
    <SafeAreaView>
      <View className=" bg-transparent flex h-[8%]">
        <View className=" flex flex-row justify-end w-full mt-7">
          <Button
            buttonStyle={{ backgroundColor: "transparent", width: "40%" }}
            iconPosition="right"
            icon={<Feather name="menu"></Feather>}
          />
        </View>
      </View>
      <View className="flex flex-col my-1 items-center justify-center">
        <Avatar rounded size={45} source={{ uri: user!.avatar }}></Avatar>
        <Text className=" font-extrabold">{user!.name}</Text>
        <Text>{user!.email}</Text>
        <View className=" flex flex-row w-full justify-around">
          <Text className=" font-bold">
            Post {"\n"}
            <Text className=" font-light">{posts.length}</Text>
          </Text>
          <Text className=" font-bold">
            Follower {"\n"}
            <Text className=" font-light">{user?.password.length}</Text>
          </Text>
          <Text className=" font-bold">
            Seguiti {"\n"}
            <Text className=" font-light">{user?.email.length}</Text>
          </Text>
        </View>
      </View>

      <FlatList
        className=" mb-36"
        key={3}
        data={posts.filter((el) => el.id < 20)}
        initialNumToRender={15}
        numColumns={3}
        renderItem={({ item }) => (
          <View key={item.id} className="   w-[33.3%]">
            <Tile
              featured={false}
              containerStyle={{ margin: 0 }}
              contentContainerStyle={{ height: 0 }}
              onPress={() => {
                setShownDetails({
                  isShown: true,
                  uri: item.images[0],
                  description: item.description,
                });
              }}
              imageSrc={{ uri: item.images[0] }}
            ></Tile>
          </View>
        )}
      ></FlatList>

      <Overlay
        onPressOut={() => setShownDetails({ ...showDetails, isShown: false })}
        isVisible={showDetails.isShown}
      >
        {showDetails.isShown && (
          <Details
            uri={showDetails.uri}
            description={showDetails.description}
          ></Details>
        )}
      </Overlay>
    </SafeAreaView>
  );
}
