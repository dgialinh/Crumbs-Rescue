import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

const Campaign = () => {
  return (
    <View style={{ height: 340 }}>
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          alignSelf: "center",
          top: 0,
        }}
      >
        <Image source={require("../../storages/person1.png")} />
        <Text style={{ marginTop: 45, fontWeight: "700", fontSize: 20 }}>
          CHIẾN DỊCH CỦA BẠN
        </Text>
        <Image source={require("../../storages/person2.png")} />
      </View>
      <View
        style={{
          height: 253,
          backgroundColor: "#FFB1BF",
          marginTop: 100,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: 150,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "700", color: "#FF617D" }}>
              Giáo dục
            </Text>
            <Text style={{ fontSize: 12, color: "#757575" }}>|</Text>
            <Text style={{ fontSize: 12, color: "#757575" }}>Hải Dương</Text>
          </View>
          <View>
            <Text style={{ fontSize: 12, color: "#757575" }}>
              Khởi tạo: 08/12/2022
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 50,
            marginLeft: 25,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              width: 330,
              height: 35,
              letterSpacing: 0.5,
              fontWeight: "700",
            }}
          >
            Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo
          </Text>
        </View>
        <View
          style={{
            height: 160,
            backgroundColor: "black",

            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginHorizontal: 5,
              marginTop: 8,
            }}
          >
            <Image source={require("../../storages/img1.png")} />

            <View>
              <Text
                style={{ color: "white", fontWeight: "900", marginBottom: 8 }}
              >
                Hôm nay
              </Text>
              <View
                style={{
                  width: 251,
                  height: 48,
                  backgroundColor: "#FF617D",
                  borderRadius: 7,
                  marginBottom: 18,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: 10,
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      height: 30,
                    }}
                  >
                    <Ionicons name="gift-outline" size={15} color="black" />
                    <Text style={{ fontSize: 20, fontWeight: "900" }}>5</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={{
                        width: 15,
                        height: 15,
                        borderWidth: 1,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Entypo
                        name="credit"
                        size={10}
                        color="black"
                        style={{ marginLeft: 2 }}
                      />
                    </View>

                    <Text style={{ fontSize: 20, fontWeight: "900" }}>
                      1tr750
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      height: 30,
                    }}
                  >
                    <AntDesign name="hearto" size={15} color="black" />
                    <Text style={{ fontSize: 20, fontWeight: "900" }}>36</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                <Text
                  style={{ fontSize: 12, color: "#FF617D", fontWeight: "500" }}
                >
                  7.000.000
                </Text>
                <Text style={{ fontSize: 10, color: "#757575" }}>
                  /70.000.000vnđ
                </Text>
              </View>
              <View style={{ marginVertical: 7 }}>
                <Image source={require("../../storages/bar1.png")} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="gift-outline" size={10} color="#FF617D" />
                  <Text style={{ fontSize: 10, color: "#FF617D" }}>
                    100<Text style={{ color: "#757575" }}>người ủng hộ</Text>
                  </Text>
                </View>
                <Text style={{ fontSize: 10, color: "#757575" }}>
                  còn 30 ngày
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Campaign;

const styles = StyleSheet.create({});
