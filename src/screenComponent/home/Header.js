import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={{ height: 143, backgroundColor: "#FFDFE5" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginHorizontal: 30,
          marginTop: 60,
        }}
      >
        <Image source={require("../../storages/avt.png")} />
        <View>
          <Text
            style={{ width: 243, height: 26, fontSize: 20, fontWeight: "900" }}
          >
            Chào Phương Trà
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Đống Đa, Hà Nội, Việt Nam
          </Text>
        </View>
        <Image source={require("../../storages/icon/bell.png")} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
