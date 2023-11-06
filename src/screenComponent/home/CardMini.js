import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const CardMini = () => {
  const card = [
    {
      id: 1,
      img: require("../../storages/cardimg/card1.png"),
      logo: require("../../storages/cardimg/logo/logo1.png"),
      text: "Báo điện tử Dân Trí",
    },
    {
      id: 2,
      img: require("../../storages/cardimg/card2.png"),
      logo: require("../../storages/cardimg/logo/logo2.png"),
      text: "Unicef Viet Nam",
    },
    {
      id: 3,
      img: require("../../storages/cardimg/card3.png"),
      logo: require("../../storages/cardimg/logo/logo3.png"),
      text: "Action on Poverty",
    },
    {
      id: 4,
      img: require("../../storages/cardimg/card4.avif"),
      logo: require("../../storages/cardimg/logo/logo4.png"),
      text: "Helpage International",
    },
  ];
  return (
    <ScrollView horizontal>
      {card.map((data, index) => {
        return (
          <View
            key={index}
            style={{
              width: 108,
              height: 154,
              borderRadius: 10,
              marginRight: 10,
            }}
          >
            <Image
              source={data.img}
              style={{
                borderRadius: 10,
                width: 108,
                height: 154,
              }}
            />
            <View
              style={{
                position: "absolute",
                width: 24,
                height: 24,
                backgroundColor: "black",
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
                right: 5,
                top: 6,
              }}
            >
              <Feather name="user-plus" size={20} color="white" />
            </View>
            <View
              style={{
                position: "absolute",
                height: 40,
                backgroundColor: "rgba(255, 255, 255, 0.81)",
                width: "100%",
                bottom: 0,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={data.logo} />
              <Text
                style={{
                  fontSize: 10,
                  width: 68,
                  height: 25,
                  fontWeight: "700",
                  marginLeft: 5,
                }}
              >
                {data.text}
              </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default CardMini;

const styles = StyleSheet.create({});
