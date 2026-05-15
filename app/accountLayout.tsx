import { View, Text, FlatList} from "react-native";
import React, { useState } from "react";
import {SafeAreaView} from "react-native-safe-area-context";

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
      <View style={{ backgroundColor: "transparent", height: "8%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "100%",
            marginTop: 28,
          }}
          <Button
            buttonStyle={{ backgroundColor: "transparent", width: "40%" }}
            iconPosition="right"
            icon={<Feather name="menu"></Feather>}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          marginVertical: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar rounded size={45} source={{ uri: user!.avatar }}></Avatar>
        <Text style={{ fontWeight: "800" }}>{user!.name}</Text>
        <Text>{user!.email}</Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>
            Post {"\n"}
            <Text style={{ fontWeight: "300" }}>{posts.length}</Text>
          </Text>
          <Text style={{ fontWeight: "bold" }}>
            Follower {"\n"}
            <Text style={{ fontWeight: "300" }}>{user?.password.length}</Text>
          </Text>
          <Text style={{ fontWeight: "bold" }}>
            Seguiti {"\n"}
            <Text style={{ fontWeight: "300" }}>{user?.email.length}</Text>
          </Text>
        </View>
      </View>

      <FlatList
        style={{ marginBottom: 144 }}
        key={3}
        data={posts.filter((el) => el.id < 20)}
        initialNumToRender={15}
        numColumns={3}
        renderItem={({ item }) => (
          <View key={item.id} style={{ width: "33.3%" }}>
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
