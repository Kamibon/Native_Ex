import { useAppSelector } from "@/app/redux/store";
import { Overlay } from "@rneui/base";
import { Tile } from "@rneui/themed";
import React, { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Details({
  uri,
  description,
}: {
  uri: string;
  description: string;
}) {
  return (
    <Tile
      overlayContainerStyle={{ backgroundColor: "blue", width: "60%" }}
      imageSrc={{ uri }}
      title={description}
      titleStyle={{ fontSize: 10, color: "white" }}
    />
  );
}

export default function Feed() {
  const posts = useAppSelector((state) => state.fakeGram.posts);

  const insets = useSafeAreaInsets();

  const [showDetails, setShownDetails] = useState({
    isShown: false,
    uri: "",
    description: "",
  });

  return (
    <View>
      <FlatList
        contentContainerStyle = {{ backgroundColor: 'white', paddingBottom: insets.bottom }}
        data={posts}
        initialNumToRender={15}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} style={{ width: "50%" }}>
            <Tile
              contentContainerStyle={{ height: 0 }}
              onPress={() => {
                setShownDetails({
                  isShown: true,
                  uri: item.images[0],
                  description: item.description,
                });
              }}
              imageSrc={{ uri: item.images[0] }}
            />
          </TouchableOpacity>
        )}
      />

      <Overlay
        onPressOut={() => {
          setShownDetails({ ...showDetails, isShown: false });
        }}
        isVisible={showDetails.isShown}
      >
        <Details
          uri={showDetails.uri}
          description={showDetails.description}
        />
      </Overlay>
    </View>
  );
}
