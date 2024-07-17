import { View, Text, Image } from "react-native";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

interface ITabIcon {
  icon: any;
  color: string;
  focused: boolean;
  name: string;
}

const TabIcon = ({ icon, color, focused, name }: ITabIcon) => {
  return (
    <View className="items-center justify-center gap-2">
      <Ionicons name={icon} size={28} color={color} />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#1ca9c9",
          tabBarInactiveTintColor: "#005689",
          tabBarStyle: {
            backgroundColor: "#FAF9F6",
            borderTopWidth: 0,
            borderTopColor: "#FAF9F6",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="home-outline"
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="myTasks"
          options={{
            title: "My Tasks",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="My Tasks"
                icon="reader-outline"
                color={color}
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Create"
                icon="add-circle-outline"
                color={color}
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                name="Account"
                icon="person-outline"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
