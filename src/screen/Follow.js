import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import CardMini from "../screenComponent/home/CardMini";
import Running from "./Running";
import Done from "./Done";

const Follow = () => {
  const [screen, setScreen] = useState("screen1");
  return (
    <ScrollView style={{ height: 650 }}>
      <View style={{ width: "100%", marginLeft: 30 }}>
        <Text style={{ fontSize: 24, fontWeight: "800", color: "#20397A" }}>
          Gợi ý Theo dõi (NGOS)
        </Text>
        <View style={{ marginTop: 14 }}>
          <CardMini />
        </View>
      </View>
      <View style={{ width: "100%", marginLeft: 30, marginTop: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: "800", color: "#20397A" }}>
          Bảng tin nhân ái
        </Text>
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
                  Đang chạy
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
                  Hoàn thành
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: "5%" }}>
              {screen === "screen1" && <Running />}
              {screen === "screen2" && <Done />}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Follow;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 368,
    height: 48,
    alignItems: "center",
    alignSelf: "center",
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
