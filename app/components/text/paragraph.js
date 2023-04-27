import { StyleSheet, Text } from "react-native";

const Paragraph = ({ children, style }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

export default Paragraph;

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 20,
    opacity: 0.6,
  },
});
