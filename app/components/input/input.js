import { TextInput } from "react-native-gesture-handler";
import Heading3 from "../text/heading3";

const Input = ({ placeholder, style, label }) => {
  return (
    <>
      {label && <Heading3 style={{ marginBottom: 15 }}>{label}</Heading3>}
      <TextInput
        placeholder={placeholder}
        style={{
          fontSize: 14,
          padding: 20,
          borderWidth: 1,
          borderColor: "#333",
          borderRadius: 10,

          ...style,
        }}
      ></TextInput>
    </>
  );
};

export default Input;
