import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function Register01() {
  return (
    <View style={styles.Register01}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Register01: {
    display: "flex",
  },
});
