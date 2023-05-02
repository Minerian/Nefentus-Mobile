import { View } from "react-native";
import Heading1 from "../components/text/heading1";
import MediumText from "../components/text/mediumText";
import Paragraph from "../components/text/paragraph";
import { Image } from "react-native";
import { Text } from "react-native";
import Button from "../components/button/Button";
import ItemLayout from "../components/itemLayout/itemLayout";

const Wallet = () => {
  return (
    <View>
      <View style={{ marginHorizontal: 30, marginTop: 30 }}>
        <Image
          style={{ width: 120, marginBottom: 10 }}
          resizeMode="contain"
          source={require("../assets/images/logo.png")}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Paragraph>Total Amount</Paragraph>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: 500,
            paddingVertical: 10,
          }}
        >
          $34,273.68
        </Text>
        <View
          style={{
            backgroundColor: "rgba(179, 241, 155, 0.2)",
            borderRadius: 5,
            width: 120,
            padding: 5,
          }}
        >
          <MediumText style={{ color: "#B3F19B", textAlign: "center" }}>
            323% (+$543)
          </MediumText>
        </View>
      </View>

      <View style={{ paddingHorizontal: 30, marginTop: 30 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "48%" }}>
            <Button
              icon={
                <Image
                  source={require("../assets/images/add.png")}
                  style={{
                    height: 16,
                    width: 16,
                    marginRight: 5,
                    alignItems: "center",
                  }}
                  resizeMode="contain"
                />
              }
            >
              Send
            </Button>
          </View>
          <View style={{ width: "48%" }}>
            <Button
              icon={
                <Image
                  source={require("../assets/images/receive.png")}
                  style={{
                    height: 16,
                    width: 16,
                    marginRight: 10,
                  }}
                  resizeMode="contain"
                />
              }
              gray
            >
              Receive
            </Button>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 30 }}>
        <ItemLayout
          image={require("../assets/images/etherium.png")}
          main="Bitcoin"
          info="BTC"
          data="5,279.00"
          subData="+5.07%"
        />
        <ItemLayout
          image={require("../assets/images/etherium.png")}
          main="Bitcoin"
          info="BTC"
          data="5,279.00"
          subData="+5.07%"
        />
        <ItemLayout
          image={require("../assets/images/etherium.png")}
          main="Bitcoin"
          info="BTC"
          data="5,279.00"
          subData="+5.07%"
        />
        <ItemLayout
          image={require("../assets/images/etherium.png")}
          main="Bitcoin"
          info="BTC"
          data="5,279.00"
          subData="+5.07%"
        />
        <ItemLayout
          image={require("../assets/images/etherium.png")}
          main="Bitcoin"
          info="BTC"
          data="5,279.00"
          subData="+5.07%"
        />
        <ItemLayout
          image={require("../assets/images/etherium.png")}
          main="Bitcoin"
          info="BTC"
          data="5,279.00"
          subData="+5.07%"
        />
      </View>
    </View>
  );
};

export default Wallet;
