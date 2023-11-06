import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderMenuDetail from "../screenComponent/category/HeaderMenuDetail";

const OldMan = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../storages/endbackground.png")}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      />
      <HeaderMenuDetail />
    </View>
  );
};

export default OldMan;

const styles = StyleSheet.create({});
