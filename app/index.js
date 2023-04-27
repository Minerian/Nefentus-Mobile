import { StyleSheet, Text, View } from "react-native";
import Register from "./pages/register";
import Welcome from "./pages/welcome";
import Login from "./pages/login";
import Home from "./pages/home";

export default function Page() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F",
  },
});
