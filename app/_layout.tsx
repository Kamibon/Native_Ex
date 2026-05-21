import "react-native-reanimated";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "../global.css";
import { Stack } from "expo-router";
import { getPosts, getUsers } from "./service/slice";

export default function App() {
  store.dispatch(getUsers());
  store.dispatch(getPosts());

  return (
    <Provider store={store}>
      <Stack >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="chat" options={{ headerShown: false }} />
        <Stack.Screen name="chatDetails" options={{ headerShown: false }} />
        <Stack.Screen name="genericAccount" options={{ headerShown: false }} />
        <Stack.Screen name="registerScreen" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
