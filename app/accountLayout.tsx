import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import { Details } from "@/components/feed";
import { Avatar, Button, Overlay, Tile } from "@rneui/base";
import { useAppSelector } from "./redux/store";

import NoPosts from "@/components/noPosts";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function AccountLayout({ userId }: { userId: number }) {
  const posts = useAppSelector((state) => state.fakeGram.posts);
  const router = useRouter();

  const user = useAppSelector((state) =>
    state.fakeGram.users.find((el) => el.id == userId),
  );

  const insets = useSafeAreaInsets()

  if (!user) {
    router.replace("/");
    return null;
  }

  const [showDetails, setShownDetails] = useState({
    isShown: false,
    uri: "",
    description: "",
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "100%",
            marginTop: 28,
          }}
        >
          <Button
            buttonStyle={{ backgroundColor: "transparent", paddingRight: 16 }}
            iconPosition="right"
            icon={<Ionicons name="menu" size={20}/>}
          />
      </View>
      <View
        style={{
          flexDirection: "column",
          gap: 8,
          marginTop: 4,
          marginBottom: 16,
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
        style={{ flex: 1, paddingTop: 8 }}
        ListEmptyComponent={<NoPosts />}
        data={posts.filter((el) => el.userId == userId)}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={15}
        numColumns={3}
        columnWrapperStyle={{ flex: 1, margin: 0, padding: 0 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 80, padding: 0, margin: 0 }}
        renderItem={({ item }) => (
          <View style={{ flex: 1, margin: 0, padding: 0, width: "33.3%" }}>
            <Tile
              featured={false}
              containerStyle={{ margin: 0, padding: 0 }}
              onPress={() => {
                setShownDetails({
                  isShown: true,
                  uri: item.images[0],
                  description: item.description,
                });
              }}
              imageSrc={{ uri: item.images[0] }}
            />
          </View>
        )}
      />

      <Overlay
        onPressOut={() => setShownDetails({ ...showDetails, isShown: false })}
        isVisible={showDetails.isShown}
      >
        {showDetails.isShown && (
          <Details
            uri={showDetails.uri}
            description={showDetails.description}
          />
        )}
      </Overlay>
    </SafeAreaView>
  );
}
