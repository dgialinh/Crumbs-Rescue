import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardSave from "../screenComponent/save/CardSave";

const Save = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../storages/endbackground.png")}
        style={{
          position: "absolute",
          bottom: -75,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      />
      <View
        style={{ height: 111, backgroundColor: "#FFDFE5", borderRadius: 25 }}
      >
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
              style={{
                width: 120,
                height: 27,
                fontSize: 20,
                fontWeight: "900",
              }}
            >
              Đã lưu
            </Text>
          </View>
          <Image source={require("../storages/icon/bell.png")} />
        </View>
      </View>
      <View
        style={{ marginTop: 38, marginHorizontal: 30, alignSelf: "center" }}
      >
        <CardSave />
      </View>
    </View>
  );
};

export default Save;

const styles = StyleSheet.create({});
