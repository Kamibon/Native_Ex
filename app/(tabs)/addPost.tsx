import { Button, Input, Skeleton } from "@rneui/themed";
import * as DocumentPicker from "expo-document-picker";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  createPost,
  loadPost,
  resetPostCreationStatus,
} from "../service/slice";

export default function AddPost() {
  const [description, setDescription] = useState("");
  const [uri, setUri] = useState("");
  const dispatch = useAppDispatch();
  const loadedPost = useAppSelector(
    (state) => state.fakeGram.postCreationStatus,
  );
  const router = useRouter();

  useEffect(() => {
    if (loadedPost === "success") {
      Alert.alert(
        "Post caricato con successo!",
        "Potrai vedere il tuo post sulla bacheca",
      );
      dispatch(loadPost({ id: 500, description, imageUri: uri }));
      const id = setTimeout(() => {
        dispatch(resetPostCreationStatus());

        router.push("/");
      }, 3000);
      return () => clearTimeout(id);
    }
    if (loadedPost === "failure")
      Alert.alert("Fallimento nel caricamento del post");
    /*   */
  }, [loadedPost]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 60}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 20,
            paddingVertical: 24,
          }}
          keyboardShouldPersistTaps="handled"
        >
          {!uri && (
            <Skeleton style={{ borderRadius: 10 }} height={400} width={260} />
          )}
          {uri && (
            <Image
              style={{ borderRadius: 10 }}
              src={uri}
              width={260}
              height={400}
            />
          )}

          <Button
            onPress={async () => {
              const res = await DocumentPicker.getDocumentAsync({
                type: "image/*",
              });
              const { assets } = await res;

              if (assets) setUri(assets[0].uri);
            }}
          >
            Aggiungi foto
          </Button>
          <Input
            keyboardAppearance="dark"
            style={{ margin: 5 }}
            value={description}
            onChangeText={(e) => setDescription(e)}
            placeholder="Aggiungi descrizione"
          />
          <Button
            onPress={() => {
              dispatch(
                createPost({
                  id: 500,
                  description: description,
                  userId:1,
                  imageUri: uri,
                }),
              );
              setTimeout(() => {
                setUri("");
                setDescription("");
              }, 1000);
            }}
          >
            Carica il post
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
