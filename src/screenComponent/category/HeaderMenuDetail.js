import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import New from "../../screen/New";
import Following from "../../screen/Following";
import HighLight from "../../screen/HighLight";

const HeaderMenuDetail = () => {
  const navigation = useNavigation();
  const [screen, setScreen] = useState("screen1");
  return (
    <View style={{ height: 165 }}>
      <View
        style={{ height: 108, backgroundColor: "#FFDFE5", borderRadius: 25 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 30,
            marginTop: 48,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign
              name="left"
              size={35}
              color="black"
              onPress={() => navigation.goBack()}
            />
            <View
              style={{
                width: 35,
                height: 35,
                backgroundColor: "rgba(255, 97, 125, 0.5)",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 7,
                marginHorizontal: 10,
              }}
            >
              <Image source={require("../../storages/menu/logo11.png")} />
            </View>

            <Text
              style={{
                width: 120,
                height: 27,
                fontSize: 20,
                fontWeight: "900",
              }}
            >
              Người già
            </Text>
          </View>
          <Image source={require("../../storages/icon/bell.png")} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginTop: 30 }}>
            <View style={styles.tabContainer}>
              <TouchableOpacity
                onPress={() => setScreen("screen1")}
                style={[styles.view]}
              >
                {screen === "screen1" ? (
                  <Image source={require("../../storages/radio/radio1.png")} />
                ) : (
                  <Image source={require("../../storages/radio/radio.png")} />
                )}

                <Text
                  style={[
                    styles.tabText,
                    screen === "screen1" && styles.tabTextBold,
                  ]}
                >
                  Nổi bật
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setScreen("screen2")}
                style={[styles.view]}
              >
                {screen === "screen2" ? (
                  <Image source={require("../../storages/radio/radio1.png")} />
                ) : (
                  <Image source={require("../../storages/radio/radio.png")} />
                )}

                <Text
                  style={[
                    styles.tabText,
                    screen === "screen2" && styles.tabTextBold,
                  ]}
                >
                  Mới
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setScreen("screen3")}
                style={[styles.view]}
              >
                {screen === "screen3" ? (
                  <Image source={require("../../storages/radio/radio1.png")} />
                ) : (
                  <Image source={require("../../storages/radio/radio.png")} />
                )}
                <Text
                  style={[
                    styles.tabText,
                    screen === "screen3" && styles.tabTextBold,
                  ]}
                >
                  Đang theo dõi
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{}}>
              {screen === "screen1" && <HighLight />}
              {screen === "screen2" && <New />}
              {screen === "screen3" && <Following />}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderMenuDetail;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 368,
    height: 48,
    alignItems: "center",
    alignSelf: "center",
    marginHorizontal: 30,
  },
  tabText: {
    fontSize: 16,
    color: "#757575",
    fontWeight: "400",
    marginLeft: 5,
  },
  tabTextBold: {
    fontWeight: "bold",
    color: "black",
  },

  view: {
    width: 178,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
