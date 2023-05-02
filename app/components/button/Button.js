import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Button = ({ children, gray, style, icon }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        flexDirection: "row",
        backgroundColor: gray ? "#333333" : "#1595C2",
        ...style,
      }}
    >
      {icon && icon}
      <Text style={{ ...styles.buttonText }}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 14,
  },
});
