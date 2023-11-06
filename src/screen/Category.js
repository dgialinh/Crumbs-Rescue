import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../screenComponent/category/Header";

const Category = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../storages/endbackground.png")}
        style={{
          position: "absolute",
          bottom: -75,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      />
      <Header />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
