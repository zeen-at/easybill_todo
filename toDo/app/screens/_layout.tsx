import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function ScreenLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <StatusBar backgroundColor="white" style="dark" />
    </Stack>
  );
}
