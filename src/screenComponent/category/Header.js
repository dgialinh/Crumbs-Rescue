import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import Follow from "../../screen/Follow";
import Menu from "../../screen/Menu";

const Header = () => {
  const [screen, setScreen] = useState("screen1");
  return (
    <View style={{ height: 155, backgroundColor: "#FFDFE5", borderRadius: 25 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 30,
          marginTop: 45,
        }}
      >
        <View>
          <Text
            style={{ width: 120, height: 27, fontSize: 20, fontWeight: "900" }}
          >
            Khám phá
          </Text>
        </View>
        <Image source={require("../../storages/icon/bell.png")} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginTop: 15 }}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              onPress={() => setScreen("screen1")}
              style={[styles.view, screen === "screen1" && styles.btn]}
            >
              <Text
                style={[
                  styles.tabText,
                  screen === "screen1" && styles.tabTextBold,
                ]}
              >
                Theo dõi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setScreen("screen2")}
              style={[styles.view, screen === "screen2" && styles.btn]}
            >
              <Text
                style={[
                  styles.tabText,
                  screen === "screen2" && styles.tabTextBold,
                ]}
              >
                Danh mục
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: "10%" }}>
            {screen === "screen1" && <Follow />}
            {screen === "screen2" && <Menu />}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 368,
    height: 48,
    alignItems: "center",
    alignSelf: "center",
    marginHorizontal: 20,
  },
  tabText: {
    fontSize: 16,
    color: "#20397A",
    fontWeight: "700",
  },
  tabTextBold: {
    fontWeight: "bold",
    color: "white",
  },
  btn: {
    width: 178,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#20397A",
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    width: 178,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});
