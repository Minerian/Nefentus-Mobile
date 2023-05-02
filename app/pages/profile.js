import { Image } from "react-native";
import { ImageBackground } from "react-native";
import { ScrollView } from "react-native";
import { View } from "react-native";
import Heading3 from "../components/text/heading3";
import MediumText from "../components/text/mediumText";
import Paragraph from "../components/text/paragraph";

const content = [
  {
    text: "Contact us",
    icon: require("../assets/images/contact.png"),
  },
  {
    text: "Admin panel",
    icon: require("../assets/images/admin.png"),
  },
  {
    text: "KYC Request",
    icon: require("../assets/images/kyc.png"),
  },
  {
    text: "Secure code",
    icon: require("../assets/images/secure.png"),
  },
  {
    text: "Terms and Condition",
    icon: require("../assets/images/terms.png"),
  },
  {
    text: "Privacy Policiy",
    icon: require("../assets/images/privacy.png"),
  },
  {
    text: "Logout",
    icon: require("../assets/images/logout.png"),
  },
];

const Profile = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 150 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ marginTop: 30 }}>
        <View style={{ marginHorizontal: 30 }}>
          <Image
            style={{ width: 120 }}
            resizeMode="contain"
            source={require("../assets/images/logo.png")}
          />
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: 10, marginBottom: 30 }}>
        <ImageBackground
          source={require("../assets/images/avatar.jpg")}
          style={{ height: 100, width: 100, alignItems: "flex-end" }}
          imageStyle={{ borderRadius: 60 }}
        >
          <View
            style={{
              backgroundColor: "#1595C2",
              width: 30,
              height: 30,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/images/camera.png")}
              style={{ width: 12, height: 10 }}
              resizeMode="contain"
            />
          </View>
        </ImageBackground>

        <View style={{ marginTop: 15 }}>
          <Heading3 style={{ fontWeight: 500 }}>Kianna Philips</Heading3>
          <MediumText
            style={{ textAlign: "center", marginTop: 2.5, opacity: 0.6 }}
          >
            #C233n867z
          </MediumText>
        </View>
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: "#333",
          borderRadius: 10,
          paddingVertical: 20,
          paddingHorizontal: 15,
          marginHorizontal: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 20,
            borderBottomColor: "#333",
            borderBottomWidth: 1,
          }}
        >
          <MediumText>Email</MediumText>
          <MediumText style={{ opacity: 0.6 }}>kian.phill@aol.com</MediumText>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 20,
            borderBottomColor: "#333",
            borderBottomWidth: 1,
          }}
        >
          <MediumText>Phone Number</MediumText>
          <MediumText style={{ opacity: 0.6 }}>(+33)7 35 55 21 02</MediumText>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MediumText>Credit Card</MediumText>
          <MediumText style={{ opacity: 0.6 }}>**** **** 8600 4859</MediumText>
        </View>
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: "#333",
          borderRadius: 10,
          paddingVertical: 20,
          paddingHorizontal: 15,
          marginHorizontal: 30,
          marginTop: 30,
        }}
      >
        {content.map((items, index) => (
          <View
            style={{
              marginBottom: index === content.length - 1 ? 0 : 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: "50%",
                  backgroundColor: "#333",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={items.icon}
                  style={{ height: 12, aspectRatio: 1 }}
                  resizeMode="contain"
                />
              </View>

              <View style={{ marginLeft: 10 }}>
                <Paragraph style={{ opacity: 1 }}>{items.text}</Paragraph>
              </View>
            </View>

            <View>
              <Image
                source={require("../assets/images/enter.png")}
                style={{ height: 12, width: 7 }}
                resizeMethod="contain"
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Profile;
