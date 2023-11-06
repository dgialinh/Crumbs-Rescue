import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

const DetailProfile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{ height: 108 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: 368,
            height: 40,
            marginTop: 45,
            marginHorizontal: 30,
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
            Trang cá nhân
          </Text>
        </View>
      </View>

      <View
        style={{
          width: 188,
          height: 234,
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <Image source={require("../storages/avt2.png")} style={{}} />
        <Text style={{ fontSize: 24, fontWeight: "900", marginVertical: 10 }}>
          Lưu Phương Trà
        </Text>
        <Text style={{ color: "#757575" }}>@phuongtra12</Text>
        <Text
          style={{
            width: 368,
            height: 35,
            textAlign: "center",
            marginTop: 20,
            color: "#757575",
          }}
        >
          <Text style={{ fontWeight: "800" }}>BIO người dùng:</Text> Lorem ipsum
          is placeholder text commonly used in the graphic
        </Text>
      </View>
      <View style={{ marginTop: 33 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginHorizontal: 30,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "700" }}>45</Text>
            <Text style={{ color: "#757575" }}>Người theo dõi</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "700" }}>345</Text>
            <Text style={{ color: "#757575" }}>Đang theo dõi</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "700" }}>30</Text>
            <Text style={{ color: "#757575" }}>Lượt ủng hộ</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 679,
          backgroundColor: "black",
          marginTop: 45,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
            color: "white",
            marginTop: 33,
            marginLeft: 30,
          }}
        >
          Chiến dịch của bạn:
        </Text>
        <ScrollView horizontal style={{ marginTop: 20 }}>
          <View
            style={{
              width: 202,
              height: 225,
              backgroundColor: "white",
              borderRadius: 10,
              marginLeft: 25,
              marginRight: 20,
            }}
          >
            <View style={{ marginHorizontal: 10, marginTop: 15 }}>
              <Image
                source={require("../storages/cardcategory/img3.png")}
                style={{
                  width: 182,
                  height: 107,
                  borderRadius: 6,
                  resizeMode: "cover",
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 7,
                  }}
                >
                  <EvilIcons name="clock" size={15} color="#FC7900" />
                  <Text style={{ fontSize: 10, color: "#FC7900" }}>
                    Đang thực hiện
                  </Text>
                </View>
                <View
                  style={{
                    width: 47,
                    height: 15,
                    borderRadius: 4,
                    backgroundColor: "rgba(252, 121, 0, 0.5)",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 5,
                  }}
                >
                  <Text style={{ fontSize: 10 }}>32 ngày</Text>
                </View>
              </View>
              <View>
                <Text style={{ fontWeight: "600", marginTop: 7 }}>
                  Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo
                </Text>
              </View>
              <Image
                source={require("../storages/bar2.png")}
                style={{ marginTop: 5 }}
              />
            </View>
          </View>
          <View
            style={{
              width: 202,
              height: 225,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <View style={{ marginHorizontal: 10, marginTop: 15 }}>
              <Image
                source={require("../storages/cardcategory/img3.png")}
                style={{
                  width: 182,
                  height: 107,
                  borderRadius: 6,
                  resizeMode: "cover",
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 7,
                  }}
                >
                  <EvilIcons name="clock" size={15} color="#FC7900" />
                  <Text style={{ fontSize: 10, color: "#FC7900" }}>
                    Đang thực hiện
                  </Text>
                </View>
                <View
                  style={{
                    width: 47,
                    height: 15,
                    borderRadius: 4,
                    backgroundColor: "rgba(252, 121, 0, 0.5)",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 5,
                  }}
                >
                  <Text style={{ fontSize: 10 }}>32 ngày</Text>
                </View>
              </View>
              <View>
                <Text style={{ fontWeight: "600", marginTop: 7 }}>
                  Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo
                </Text>
              </View>
              <Image
                source={require("../storages/bar2.png")}
                style={{ marginTop: 5 }}
              />
            </View>
          </View>
        </ScrollView>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
            color: "white",
            marginLeft: 30,
          }}
        >
          Chiến dịch bạn đã ủng hộ:
        </Text>
        <ScrollView horizontal style={{ marginTop: 20 }}>
          <View
            style={{
              width: 202,
              height: 225,
              backgroundColor: "white",
              borderRadius: 10,
              marginLeft: 25,
              marginRight: 20,
            }}
          >
            <View style={{ marginHorizontal: 10, marginTop: 15 }}>
              <Image
                source={require("../storages/cardcategory/img3.png")}
                style={{
                  width: 182,
                  height: 107,
                  borderRadius: 6,
                  resizeMode: "cover",
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 7,
                  }}
                >
                  <EvilIcons name="clock" size={15} color="#FC7900" />
                  <Text style={{ fontSize: 10, color: "#FC7900" }}>
                    Đang thực hiện
                  </Text>
                </View>
                <View
                  style={{
                    width: 47,
                    height: 15,
                    borderRadius: 4,
                    backgroundColor: "rgba(252, 121, 0, 0.5)",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 5,
                  }}
                >
                  <Text style={{ fontSize: 10 }}>32 ngày</Text>
                </View>
              </View>
              <View>
                <Text style={{ fontWeight: "600", marginTop: 7 }}>
                  Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo
                </Text>
              </View>
              <Image
                source={require("../storages/bar2.png")}
                style={{ marginTop: 5 }}
              />
            </View>
          </View>
          <View
            style={{
              width: 202,
              height: 225,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <View style={{ marginHorizontal: 10, marginTop: 15 }}>
              <Image
                source={require("../storages/cardcategory/img3.png")}
                style={{
                  width: 182,
                  height: 107,
                  borderRadius: 6,
                  resizeMode: "cover",
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 7,
                  }}
                >
                  <EvilIcons name="clock" size={15} color="#FC7900" />
                  <Text style={{ fontSize: 10, color: "#FC7900" }}>
                    Đang thực hiện
                  </Text>
                </View>
                <View
                  style={{
                    width: 47,
                    height: 15,
                    borderRadius: 4,
                    backgroundColor: "rgba(252, 121, 0, 0.5)",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 5,
                  }}
                >
                  <Text style={{ fontSize: 10 }}>32 ngày</Text>
                </View>
              </View>
              <View>
                <Text style={{ fontWeight: "600", marginTop: 7 }}>
                  Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo
                </Text>
              </View>
              <Image
                source={require("../storages/bar2.png")}
                style={{ marginTop: 5 }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default DetailProfile;

const styles = StyleSheet.create({});
