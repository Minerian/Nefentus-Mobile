import { StyleSheet, Text } from "react-native";

const Heading1 = ({ children, style }) => {
  return <Text style={{ ...style, ...styles.heading1 }}>{children}</Text>;
};

export default Heading1;

const styles = StyleSheet.create({
  heading1: {
    color: "#ffffff",
    fontSize: 30,
    lineHeight: 38,
    fontWeight: 500,
  },
});
