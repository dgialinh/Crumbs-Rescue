import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Donation = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../storages/endbackground.png")}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      />
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            height: 108,
            alignItems: "center",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 368,
              height: 40,
              marginTop: 45,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 40,
                height: 40,
                backgroundColor: "rgba(0, 0, 0, 0.22)",
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 14,
              }}
            >
              <AntDesign name="left" size={30} color="white" />
            </TouchableOpacity>
            <Text style={{ fontSize: 24, color: "black", fontWeight: "500" }}>
              Ủng hộ của tôi
            </Text>
          </View>
        </View>
        <View>
          <Image source={require("../storages/total.png")} />
        </View>
        <View
          style={{
            height: 108,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              Danh sách giao dịch
            </Text>
            <Text style={{ width: 368, height: 35, marginTop: 10 }}>
              Sao kê sẽ hiển thị lịch sử giao dịch trong toàn bộ thời gian chiến
              dịch được thực hiện.
            </Text>
          </View>
        </View>
        <View>
          <View style={{ height: 195 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginHorizontal: 30,
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 16 }}>
                Hôm nay, ngày 17/12/2022
              </Text>
              <Text style={{ fontSize: 16 }}>1 giao dịch</Text>
            </View>
            <View
              style={{
                width: 368,
                height: 130,
                backgroundColor: "#EBE5F7",
                alignSelf: "center",
                marginTop: 24,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginHorizontal: 20,
                  marginTop: 14,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text>Từ:</Text>
                  <Image
                    source={require("../storages/avt.png")}
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 30,
                      marginHorizontal: 5,
                    }}
                  />
                  <Text style={{ color: "#FF617D", fontWeight: "600" }}>
                    Phương Trà
                  </Text>
                </View>
                <Text style={{ color: "#FF617D", fontWeight: "700" }}>
                  -200.000
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 20,
                  marginTop: 12,
                }}
              >
                <Text style={{ color: "#757575" }}>
                  Chuc gia dinh luon khoe manh
                </Text>
                <Text style={{ color: "#757575" }}>18:58</Text>
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  marginTop: 10,
                  marginHorizontal: 20,
                  borderColor: "#757575",
                }}
              ></View>
              <View
                style={{
                  height: 26,
                  flexDirection: "row",
                  marginHorizontal: 20,
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 12, color: "#757575" }}>
                  Đến chiến dịch
                </Text>
                <Text
                  style={{
                    width: 246,
                    height: 34,
                    fontSize: 12,
                    color: "#20397A",
                    fontWeight: "600",
                    marginLeft: 10,
                  }}
                >
                  Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo
                </Text>
              </View>
            </View>
          </View>
          <View style={{ height: 195 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginHorizontal: 30,
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 16 }}>
                Hôm nay, ngày 10/12/2022
              </Text>
              <Text style={{ fontSize: 16 }}>2 giao dịch</Text>
            </View>
            <View
              style={{
                width: 368,
                height: 130,
                backgroundColor: "#EBE5F7",
                alignSelf: "center",
                marginTop: 24,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginHorizontal: 20,
                  marginTop: 14,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text>Từ:</Text>
                  <Image
                    source={require("../storages/avt.png")}
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 30,
                      marginHorizontal: 5,
                    }}
                  />
                  <Text style={{ color: "#FF617D", fontWeight: "600" }}>
                    Phương Trà
                  </Text>
                </View>
                <Text style={{ color: "#FF617D", fontWeight: "700" }}>
                  -200.000
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 20,
                  marginTop: 12,
                }}
              >
                <Text style={{ color: "#757575" }}>
                  Chuc gia dinh luon khoe manh
                </Text>
                <Text style={{ color: "#757575" }}>18:58</Text>
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  marginTop: 10,
                  marginHorizontal: 20,
                  borderColor: "#757575",
                }}
              ></View>
              <View
                style={{
                  height: 26,
                  flexDirection: "row",
                  marginHorizontal: 20,
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 12, color: "#757575" }}>
                  Đến chiến dịch
                </Text>
                <Text
                  style={{
                    width: 246,
                    height: 34,
                    fontSize: 12,
                    color: "#20397A",
                    fontWeight: "600",
                    marginLeft: 10,
                  }}
                >
                  Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 368,
                height: 130,
                backgroundColor: "#EBE5F7",
                alignSelf: "center",
                marginTop: 24,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginHorizontal: 20,
                  marginTop: 14,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text>Từ:</Text>
                  <Image
                    source={require("../storages/avt.png")}
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 30,
                      marginHorizontal: 5,
                    }}
                  />
                  <Text style={{ color: "#FF617D", fontWeight: "600" }}>
                    Phương Trà
                  </Text>
                </View>
                <Text style={{ color: "#FF617D", fontWeight: "700" }}>
                  -200.000
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 20,
                  marginTop: 12,
                }}
              >
                <Text style={{ color: "#757575" }}>
                  Chuc gia dinh luon khoe manh
                </Text>
                <Text style={{ color: "#757575" }}>18:58</Text>
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  marginTop: 10,
                  marginHorizontal: 20,
                  borderColor: "#757575",
                }}
              ></View>
              <View
                style={{
                  height: 26,
                  flexDirection: "row",
                  marginHorizontal: 20,
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 12, color: "#757575" }}>
                  Đến chiến dịch
                </Text>
                <Text
                  style={{
                    width: 246,
                    height: 34,
                    fontSize: 12,
                    color: "#20397A",
                    fontWeight: "600",
                    marginLeft: 10,
                  }}
                >
                  Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Donation;

const styles = StyleSheet.create({});
