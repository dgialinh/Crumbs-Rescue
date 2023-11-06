import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import CardRunningMini from "./CardRunningMini";
import CardRunningMini_1 from "./CardRunningMini_1";
import CardRunningMini_2 from "./CardRunningMini_2";

const CardRunning = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../storages/cardcategory/logo1.png")}
            style={{ width: 57, height: 57 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                marginBottom: 5,
              }}
            >
              Action on Poverty in Vietnam
            </Text>
            <Text style={{ fontSize: 12, color: "#757575" }}>
              Khởi tạo: 02/10/2022
            </Text>
          </View>
        </View>
        <Feather name="user-check" size={24} color="#001A72" />
      </View>
      <View style={{ marginTop: 15 }}>
        <CardRunningMini />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 25,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../storages/cardcategory/logo2.png")}
            style={{ width: 57, height: 57 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                marginBottom: 5,
              }}
            >
              Helpage International
            </Text>
            <Text style={{ fontSize: 12, color: "#757575" }}>
              Khởi tạo: Hôm nay, 15/12/2022
            </Text>
          </View>
        </View>
        <Feather name="user-check" size={24} color="#001A72" />
      </View>
      <View style={{ marginTop: 15 }}>
        <CardRunningMini_1 />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 25,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../storages/cardcategory/logo3.png")}
            style={{ width: 57, height: 57 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                marginBottom: 5,
              }}
            >
              Báo điện tử Dân Trí
            </Text>
            <Text style={{ fontSize: 12, color: "#757575" }}>
              Khởi tạo: 02/11/2022
            </Text>
          </View>
        </View>
        <Feather name="user-check" size={24} color="#001A72" />
      </View>
      <View style={{ marginTop: 15 }}>
        <CardRunningMini_2 />
      </View>
    </View>
  );
};

export default CardRunning;

const styles = StyleSheet.create({});
