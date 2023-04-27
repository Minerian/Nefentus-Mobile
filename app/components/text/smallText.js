import { StyleSheet, Text } from "react-native";

const SmallText = ({ children, style }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

export default SmallText;

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 12,
  },
});
