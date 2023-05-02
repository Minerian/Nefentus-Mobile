import { View } from "react-native";
import Header from "../components/header/header";
import Heading2 from "../components/text/heading2";
import { ScrollView } from "react-native";
import ItemLayout from "../components/itemLayout/itemLayout";
import Input from "../components/input/input";
import SectionHeader from "../components/sectionHeader/sectionHeader";
import { Image } from "react-native";

const KYC = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 100,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Header>
        <Heading2>KYC Request</Heading2>
      </Header>

      <View style={{ paddingHorizontal: 30, paddingTop: 30 }}>
        <Input style={{ marginBottom: 0 }} placeholder={"Search user"} search />
      </View>

      <SectionHeader title="User List" />

      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="Vendor"
        data="enter"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="Vendor"
        data="enter"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="Vendor"
        data="enter"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="Vendor"
        data="enter"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="Vendor"
        data="enter"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="Vendor"
        data="enter"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="Vendor"
        data="enter"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="Vendor"
        data="enter"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="Vendor"
        data="enter"
      />
    </ScrollView>
  );
};

export default KYC;
