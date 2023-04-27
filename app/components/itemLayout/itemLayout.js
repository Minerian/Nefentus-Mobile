import { Image, ImageBackground, View } from "react-native";
import Paragraph from "../text/paragraph";
import SmallText from "../text/smallText";
import MediumText from "../text/mediumText";

const ItemLayout = ({ image, main, info, data }) => {
  return (
    <View
      style={{
        marginHorizontal: 30,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={image}
          style={{ height: 40, width: 40, borderRadius: "50%" }}
        />

        <View style={{ marginLeft: 10 }}>
          <Paragraph style={{ opacity: 1 }}>{main}</Paragraph>
          <MediumText style={{ opacity: 0.6 }}>{info}</MediumText>
        </View>
      </View>

      <View>
        <Paragraph style={{ opacity: 1, fontWeight: 600 }}>{data}</Paragraph>
      </View>
    </View>
  );
};

export default ItemLayout;
