import { PostDto } from "@/app/service/slice";
import { Button, Card } from "@rneui/themed";
import React, { useState } from "react";
import { View } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Post({ item }: { item: PostDto }) {
  const [liked, setLiked] = useState(false);

  return (
    <Card containerStyle={{ borderRadius: 10, width: "100%" }} key={item.id}>
      <Card.Title>{item.title}</Card.Title>
      <Card.Divider />
      <Card.Image source={{ uri: item.images[0] }} />
      <Card.FeaturedSubtitle style={{ color: "black", fontWeight: "light" }}>
        {item.description}
      </Card.FeaturedSubtitle>
      <Card.Divider />

      <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <Button
          onPress={() => setLiked((prev) => !prev)}
          buttonStyle={{ backgroundColor: "transparent", transitionProperty: "all", transitionDuration: "300ms" }}
          icon={
            liked ? (
              <AntDesign color={"red"} name="heart" size={20}/>
            ) : (
              <Ionicons name="heart-outline" size={20}/>
            )
          }
        />
        <Button
          buttonStyle={{ backgroundColor: "transparent" }}
          icon={<Ionicons name="chatbox-outline" size={20}/>}
        />
      </View>
    </Card>
  );
}
