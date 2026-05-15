import { View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { Button, Input, Skeleton, Tile } from "@rneui/themed";
import * as DocumentPicker from "expo-document-picker";
import {
  createPost,
  loadPost,
  resetPostCreationStatus,
} from "../service/slice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { CommonActions, useNavigation } from "@react-navigation/native";

export default function AddPost() {
  const [description, setDescription] = useState("");
  const [uri, setUri] = useState("");
  const dispatch = useAppDispatch();
  const loadedPost = useAppSelector(
    (state) => state.fakeGram.postCreationStatus,
  );
  const navigation = useNavigation();

  useEffect(() => {
    if (loadedPost === "success") {
      Alert.alert(
        "Post caricato con successo!",
        "Potrai vedere il tuo post sulla bacheca",
      );
      dispatch(loadPost({ id: 500, description, imageUri: uri }));
    }
    if (loadedPost === "failure")
      Alert.alert("Fallimento nel caricamento del post");
    const id = setTimeout(() => {
      dispatch(resetPostCreationStatus());

      navigation.dispatch(CommonActions.navigate({ name: "index" }));
    }, 3000);
    return () => clearTimeout(id);
  }, [loadedPost]);

  return (
    <SafeAreaView>
      <View style={{ flexDirection: "column", alignItems: "center", margin: "13%", flex: 1 }}>
        {!uri && <Skeleton height={400}></Skeleton>}
        {uri && <Tile imageSrc={{ uri: uri }} width={260} height={400}></Tile>}

        <Button
          onPress={async () => {
            const res = await DocumentPicker.getDocumentAsync({
              type: "image/*",
            });
            const file = await res;

            if (file.assets) setUri(file.assets[0].uri);
          }}
        >
          Aggiungi foto
        </Button>
        <Input
          keyboardAppearance="dark"
          style={{ margin: 5 }}
          onChangeText={(e) => setDescription(e)}
          placeholder="Aggiungi descrizione"
        />
        <Button
          containerStyle={{ position: "absolute", bottom: 0 }}
          onPress={() => {
            dispatch(
              createPost({ id: 500, description: description, imageUri: uri }),
            );
          }}
        >
          Carica il post
        </Button>
      </View>
    </SafeAreaView>
  );
}
