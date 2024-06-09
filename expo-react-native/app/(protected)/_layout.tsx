import { Stack } from "expo-router";

const ProtectedLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6c47ff",
        },
        headerTintColor: "#fff",
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen 
        name="profile" 
        options={{
          headerTitle: "Member Profile"
        }}
      />
    </Stack>
  );
};

export default ProtectedLayout;
