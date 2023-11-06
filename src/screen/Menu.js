import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MenuBtn from "../screenComponent/category/MenuBtn";

const Menu = () => {
  return (
    <View>
      <View style={{ width: "100%", marginLeft: 30 }}>
        <Text style={{ fontSize: 24, fontWeight: "800", color: "#20397A" }}>
          Danh mục
        </Text>
        <View style={{ marginTop: 20, height: 360 }}>
          <MenuBtn />
        </View>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({});
