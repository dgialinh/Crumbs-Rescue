import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardRunning from "../screenComponent/category/CardRunning";

const Running = () => {
  return (
    <View>
      <View>
        <CardRunning />
      </View>
      <View style={{ paddingBottom: 200 }}>
        <View
          style={{
            height: 48,
            width: 344,
            borderWidth: 2,
            borderColor: "#20397A",
            borderRadius: 10,
            alignSelf: "center",
            marginVertical: 28,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "#20397A", fontWeight: "700" }}>
            Xem thêm
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Running;

const styles = StyleSheet.create({});
