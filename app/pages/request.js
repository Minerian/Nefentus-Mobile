import { View } from "react-native";
import Paragraph from "../components/text/paragraph";
import { Image } from "react-native";
import MediumText from "../components/text/mediumText";
import Header from "../components/header/header";
import Heading2 from "../components/text/heading2";
import { useState } from "react";
import { Pressable } from "react-native";
import SectionHeader from "../components/sectionHeader/sectionHeader";
import SmallText from "../components/text/smallText";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../components/button/Button";

const content = [
  {
    label: "Name",
    data: "Kianna Philips",
  },
  {
    label: "Business",
    data: "M. W. L. Sales Institut",
  },
  {
    label: "Phone Number",
    data: "(+33)7 35 55 21 02",
  },
  {
    label: "Email",
    data: "kianphilips@aol.com",
  },
];

const content2 = [
  {
    label: "Join on",
    data: "January 13, 2023",
  },
  {
    label: "User ID",
    data: "#13587",
  },
  {
    label: "Referal",
    data: "-",
  },
];

const document = [
  {
    text: "Profile",
    icon: require("../assets/images/contact.png"),
    docs: "KP_23_Passport",
  },
  {
    text: "Company Reg.",
    icon: require("../assets/images/admin.png"),
    docs: "KP_23_Passport",
  },
  {
    text: "Utility Bill",
    icon: require("../assets/images/kyc.png"),
    docs: "KP_23_Passport",
  },
  {
    text: "Address verification",
    icon: require("../assets/images/secure.png"),
    docs: "KP_23_Passport",
  },
];

const Request = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 150 }}
      showsVerticalScrollIndicator={false}
    >
      <Header>
        <Heading2>User Details</Heading2>
      </Header>
      <View
        style={{
          marginHorizontal: 30,
          marginTop: 30,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/images/avatar.jpg")}
            style={{ height: 60, width: 60, borderRadius: "50%" }}
          />

          <View style={{ marginLeft: 10 }}>
            <Paragraph style={{ opacity: 1 }}>Kianna Philips</Paragraph>
            <MediumText style={{ opacity: 0.6 }}>Vendor</MediumText>
          </View>
        </View>

        <View>
          <Pressable
            style={{
              padding: 10,
              borderRadius: 5,
              backgroundColor: "#1595C2",
            }}
          >
            <MediumText>Accept</MediumText>
          </Pressable>
        </View>
      </View>

      <SectionHeader title="Informations" />

      <View
        style={{
          marginHorizontal: 30,
          paddingVertical: 20,
          paddingHorizontal: 15,
          borderWidth: 1,
          borderColor: "#333",
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          {content.map((item) => (
            <Item label={item.label} data={item.data} />
          ))}
        </View>
        <View>
          {content2.map((item) => (
            <Item label={item.label} data={item.data} />
          ))}
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
        {document.map((items, index) => (
          <View
            style={{
              marginBottom: index === content.length - 1 ? 0 : 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomColor: "#333",
              paddingBottom: index === content.length - 1 ? 0 : 20,
              borderBottomWidth: index === content.length - 1 ? 0 : 1,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ marginLeft: 10 }}>
                <Paragraph style={{ opacity: 1 }}>{items.text}</Paragraph>
              </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MediumText style={{ opacity: 0.6, marginRight: 5 }}>
                {items.docs}
              </MediumText>
              <Image
                source={require("../assets/images/enter.png")}
                style={{ height: 12, width: 7 }}
                resizeMethod="contain"
              />
            </View>
          </View>
        ))}
      </View>

      <View style={{ marginHorizontal: 30, marginTop: 30 }}>
        <Button gray>Decline</Button>
      </View>
    </ScrollView>
  );
};

export default Request;

const Item = ({ label, data }) => {
  return (
    <View style={{ marginBottom: 20, width: 130 }}>
      <SmallText style={{ opacity: 0.6 }}>{label}</SmallText>
      <MediumText style={{ opacity: 1, marginTop: 5 }}>{data}</MediumText>
    </View>
  );
};
