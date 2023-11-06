import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardNews_1 = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("DetailNews")}>
      <View
        style={{
          width: 280,
          height: 347,
          backgroundColor: "black",
          borderRadius: 10,
        }}
      >
        <View>
          <Image source={require("../../storages/cardnews/news_1.png")} />
        </View>
        <View
          style={{
            width: 252,
            height: 167,
            alignSelf: "center",
            marginVertical: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("../../storages/icon/calendar.png")} />
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
            <Text style={{ fontSize: 12, color: "#757575" }}> | Bạc Liêu</Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: "700", color: "white" }}>
              Hoàn cảnh cháu bé "học thêm năm nữa rồi ở nhà" được giúp 200 triệu
              đồng
            </Text>
          </View>
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
                200.000.000 vnd
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 12, color: "#757575" }}>
                Kết thúc: 2/12/2022
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Ionicons name="gift-outline" size={12} color="#FF617D" />
            <Text style={{ fontSize: 12, color: "#FF617D", marginLeft: 3 }}>
              100<Text style={{ color: "#757575" }}> người ủng hộ</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../storages/cardimg/logo/logo5.png")}
                style={{ width: 24, height: 24, marginRight: 5 }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: "white",
                  width: 138,
                  height: 30,
                }}
              >
                Save the Children Viet Nam
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="sharealt" size={30} color="white" />
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: "white",
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 8,
                }}
              >
                <AntDesign name="hearto" size={20} color="#FF617D" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardNews_1;

const styles = StyleSheet.create({});
