import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardRunningMini = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailNews")}
      style={{ height: 342, backgroundColor: "white", borderRadius: 10 }}
    >
      <View>
        <Image source={require("../../storages/cardcategory/img1.png")} />
      </View>
      <View
        style={{
          width: 340,
          height: 162,
          alignSelf: "center",
          marginVertical: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="calendar-clock-outline"
              size={15}
              color="#001A72"
            />
            <Text
              style={{
                fontSize: 12,
                color: "#FF617D",
                fontWeight: "700",
                marginLeft: 5,
              }}
            >
              Sức khoẻ
            </Text>
            <Text style={{ fontSize: 12, color: "#757575" }}> | Hải Dương</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="wallet" size={15} color="#123ADA" />
            <Text style={{ fontSize: 12, color: "#757575", marginLeft: 5 }}>
              Ủng hộ
            </Text>
          </View>
        </View>
        <View style={{ height: 30, height: 340, marginTop: 10 }}>
          <Text
            style={{
              height: 40,
              width: 340,
              fontSize: 16,
              fontWeight: 700,
              color: "#20397A",
            }}
          >
            Bác sĩ Việt Đức kêu gọi giúp đỡ người mẹ nghèo gặp tai nạn thương
            tâm
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ fontSize: 12, color: "#F18B0F", fontWeight: "500" }}
              >
                89.000.000
              </Text>
              <Text style={{ fontSize: 12, color: "#757575" }}>
                /100.000.000vnđ
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 12, color: "#757575" }}>
                còn lại{" "}
                <Text style={{ color: "#EB0000", fontWeight: "900" }}>2!</Text>{" "}
                ngày
              </Text>
            </View>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Image source={require("../../storages/cardnews/bar1.png")} />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="gift-outline" size={12} color="#FF617D" />
            <Text style={{ fontSize: 12, color: "#FF617D", marginLeft: 3 }}>
              439<Text style={{ color: "#757575" }}> người ủng hộ</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../storages/cardcategory/logo1.png")}
                style={{ width: 24, height: 24, marginRight: 5 }}
              />
              <Text style={{ fontSize: 12, fontWeight: "500" }}>
                Action on Poverty in Vietnam
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  height: 30,
                  width: 64,
                  backgroundColor: "#FF617D",
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 5,
                }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "700", color: "white" }}
                >
                  Ủng hộ
                </Text>
              </View>
              <AntDesign name="sharealt" size={30} color="#20397A" />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardRunningMini;

const styles = StyleSheet.create({});
