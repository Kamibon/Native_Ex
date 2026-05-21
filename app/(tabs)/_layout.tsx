import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Homepage",
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? "home" : "home-outline"} size={24} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? "search" : "search-outline"} size={24} />,
        }}
      />
      <Tabs.Screen
        name="addPost"
        options={{
          headerShown: false,
          title: "Aggiungi post",
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? "add" : "add-outline"} size={24} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,

          title: "Your account",
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? "person" : "person-outline"} size={24} />,
        }}
      />
    </Tabs>
  );
}
