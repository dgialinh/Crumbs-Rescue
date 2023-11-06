import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Menu = () => {
  const menu = [
    {
      id: 1,
      logo: require("../../storages/menu/logo1.png"),
      text: "Đời sống",
    },
    {
      id: 2,
      logo: require("../../storages/menu/logo2.png"),
      text: "Sức khỏe",
    },
    {
      id: 3,
      logo: require("../../storages/menu/logo3.png"),
      text: "Thiên tai",
    },
    {
      id: 4,
      logo: require("../../storages/menu/logo4.png"),
      text: "Giáo dục",
    },
    {
      id: 5,
      logo: require("../../storages/menu/logo5.png"),
      text: "Tất cả",
    },
  ];
  return (
    <ScrollView horizontal scrollEnabled={false}>
      {menu.map((data, index) => {
        return (
          <View
            key={index}
            style={{
              width: 55,
              height: 76,
              alignItems: "center",
              marginRight: 23,
            }}
          >
            <View
              style={{
                width: 54,
                height: 54,
                backgroundColor: "rgba(255, 97, 125, 0.5)",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <Image source={data.logo} />
            </View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                color: "#9D9D9D",
              }}
            >
              {data.text}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({});
