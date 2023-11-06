import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const CardSave = () => {
  const cardsave = [
    {
      id: 1,
      img: require("../../storages/save/img1.png"),
      text: "Báo điện tử Dân Trí",
      title: "Ước mơ được đến lớp học của 2 đứa trẻ mồ côi cha",
    },
    {
      id: 2,
      img: require("../../storages/save/img2.png"),
      text: "Helpage International",
      title: "Mẹ già gần 80 tuổi chăm con 47 tuổi chỉ nặng 10kg",
    },
    {
      id: 3,
      img: require("../../storages/save/img3.png"),
      text: "Nguyễn Minh Thảo",
      title:
        "Chồng mất vì tai biến, vợ bệnh tim lo các con thơ đói ăn, thất học",
    },
  ];
  return cardsave.map((data, index) => {
    return (
      <View
        key={index}
        style={{ height: 100, flexDirection: "row", width: 368, marginTop: 30 }}
      >
        <Image source={data.img} style={{ width: 100, height: 100 }} />
        <View
          style={{
            width: 255,
            height: 77,
            justifyContent: "center",
            marginVertical: 15,
            marginLeft: 10,
          }}
        >
          <Text style={{ fontWeight: "700" }}>{data.title}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#757575" }}>Tạo bời: {data.text}</Text>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="heart-sharp" size={24} color="#EA4E4E" />
            </View>
          </View>
        </View>
      </View>
    );
  });
};

export default CardSave;

const styles = StyleSheet.create({});
