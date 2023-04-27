import { View } from "react-native";
import Heading3 from "../text/heading3";

const SectionHeader = ({ title, children }) => {
  return (
    <View
      style={{
        marginTop: 30,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 30,
      }}
    >
      <Heading3>{title}</Heading3>

      {children && children}
    </View>
  );
};

export default SectionHeader;
