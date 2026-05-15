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
    <SafeAreaView style={{ backgroundColor: "#64748b", flex: 1 }}>
      <SearchBar
        onPress={() => setPressedBar(true)}
        value={search}
        placeholder="Cerca qui..."
        onChangeText={setSearch}
        inputStyle={{ color: "white" }}
      ></SearchBar>
      {search.length > 3 && (
        <FlatList
          data={filtered}
          initialNumToRender={10}
          renderItem={({ item }) => (
            <Card
              containerStyle={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card.Title
                onPress={() =>
                  router.navigate({
                    pathname: "/genericAccount",
                    params: { id: item.id },
                  })
                }
              >
                {item.name}{" "}
                <Avatar rounded source={{ uri: item.avatar }}></Avatar>{" "}
              </Card.Title>
            </Card>
          )}
        ></FlatList>
      )}
      {!pressedBar && <Feed></Feed>}
    </SafeAreaView>
  );
};

export default Search;
