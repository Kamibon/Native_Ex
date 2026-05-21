import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Card, SearchBar } from "@rneui/themed";
import { useAppSelector } from "../redux/store";
import Feed from "@/components/feed";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Search = () => {
  const [search, setSearch] = useState("");
  const users = useAppSelector((state) => state.fakeGram.users);
  const [filtered, setFiltered] = useState(
    users.filter((el) => el.name.includes(search)),
  );
  const [pressedBar, setPressedBar] = useState(false);

  const router = useRouter();
  useEffect(() => {
    search.length > 3 ? setPressedBar(true) : setPressedBar(false);
    setFiltered(users.filter((el) => el.name.includes(search)));
  }, [search]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <SearchBar
        onPress={() => setPressedBar(true)}
        value={search}
        placeholder="Cerca qui..."
        onChangeText={setSearch}
        inputStyle={{ color: "white" }}
      />
      {search.length > 3 && (
        <FlatList
          ListEmptyComponent={<Text>Nessun utente trovato</Text>}
          contentContainerStyle = {{ padding: filtered.length > 0 ? 0 : 16, gap: 12 }}
          data={filtered}
          initialNumToRender={10}
          renderItem={({ item }) => (
            <Card
              containerStyle={{
                borderWidth: 0,
                borderColor: "white",
                shadowColor: "white",
              }}
            >
              <View
                style={{
                  gap: 12,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Avatar rounded source={{ uri: item.avatar }} />
                <Text
                style = {{fontSize: 16, fontWeight: 'bold'}}
                  onPress={() =>
                    router.push({
                      pathname: "/genericAccount",
                      params: { id: item.id },
                    })
                  }
                >
                  {item.name}
                </Text>
              </View>
            </Card>
          )}
        />
      )}
      {!pressedBar && <Feed />}
    </SafeAreaView>
  );
};

export default Search;
