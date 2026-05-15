import { View } from "react-native";
import React, { useState } from "react";
import { Button, ButtonGroup, Card } from "@rneui/themed";
import { PostDto } from "@/app/service/slice";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesone from "@expo/vector-icons/FontAwesome";

export default function Post({ item }: { item: PostDto }) {
  const [liked, setLiked] = useState(false);

  return (
    <Card
      key={item.id}
    >
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
          buttonStyle={{ backgroundColor: "transparent" }}
          icon={
            liked ? (
              <AntDesign color={"red"} name="heart"></AntDesign>
            ) : (
              <AntDesign name="heart"></AntDesign>
            )
          }
        />
        <Button
          buttonStyle={{ backgroundColor: "transparent" }}
          icon={<FontAwesone name="comment-o"></FontAwesone>}
        />
      </View>
    </Card>
  );
}
