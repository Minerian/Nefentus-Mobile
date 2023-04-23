import { StyleSheet, Text, View } from "react-native";
import Register01 from "./pages/register";
import Welcome from "./pages/welcome";

export default function Page() {
  return (
    <View style={styles.container}>
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#1F1F1F",
  },
});
