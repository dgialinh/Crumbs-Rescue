import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../screenComponent/home/Header";
import CardMini from "../screenComponent/home/CardMini";
import Menu from "../screenComponent/home/Menu";
import Campaign from "../screenComponent/home/Campaign";
import CardNews from "../screenComponent/home/CardNews";
import CardNews_1 from "../screenComponent/home/CardNews_1";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Hình nền */}
      <View
        style={{
          height: "50%",
          backgroundColor: "#EBE5F7",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      >
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
      </View>
      <Header />

      {/* ScrollView */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 1700 }}
        scrollEnabled={true}
      >
        <View style={{ height: 254, position: "relative" }}>
          <Image
            source={require("../storages/backgroundhome.png")}
            style={{ position: "absolute" }}
          />

          <View
            style={{
              width: 332,
              height: 135,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 35,
            }}
          >
            <Text
              style={{
                fontWeight: "900",
                fontSize: 24,
                color: "white",
                textShadowColor: "rgba(0, 0, 0, 0.71)",
                textShadowOffset: { width: 1, height: 4 },
                textShadowRadius: 10,
              }}
            >
              Khởi tạo chiến dịch
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: "700",
                textAlign: "center",
                color: "white",
                marginVertical: 18,
                textShadowColor: "rgba(0, 0, 0, 0.75)",
                textShadowOffset: { width: 1, height: 2 },
                textShadowRadius: 10,
              }}
            >
              Bạn có thể tự tạo bài đăng, kêu gọi sự ủng hộ và tài trợ từ các
              nhà hảo tâm sử dụng ứng dụng để giúp đỡ 1 hoàn cảnh khó khăn chưa
              được quan tâm mà bạn đã từng gặp.
            </Text>
            <View
              style={{
                backgroundColor: "#FF617D",
                borderRadius: 14,
                borderWidth: 4,
                borderColor: "#20397A",
              }}
            >
              <Text style={{ paddingVertical: 8, paddingHorizontal: 28 }}>
                Bắt đầu
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 28, marginHorizontal: 30, width: "100%" }}>
            <Text style={{ fontSize: 24, fontWeight: "800", color: "#20397A" }}>
              Gợi ý Theo dõi (NGOS)
            </Text>
            <View style={{ marginTop: 14 }}>
              <CardMini />
            </View>
          </View>

          <View style={{ marginTop: 28, marginHorizontal: 30 }}>
            <Text style={{ fontSize: 24, fontWeight: "800", color: "#20397A" }}>
              Danh mục
            </Text>
            <View style={{ marginTop: 14 }}>
              <Menu />
            </View>
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Campaign />
          </View>
          <View style={{ marginTop: 28, marginHorizontal: 30 }}>
            <Text style={{ fontSize: 24, fontWeight: "800", color: "#20397A" }}>
              Hoàn cảnh nổi bật
            </Text>
            <View style={{ marginTop: 14 }}>
              <CardNews />
            </View>
          </View>
          <View>
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
              <Text
                style={{ fontSize: 16, color: "#20397A", fontWeight: "700" }}
              >
                Xem thêm
              </Text>
            </View>
          </View>
          <View style={{ marginHorizontal: 30 }}>
            <Text style={{ fontSize: 24, fontWeight: "800", color: "#20397A" }}>
              Tin tức
            </Text>
            <View style={{ marginTop: 14 }}>
              <CardNews_1 />
            </View>
          </View>
          <View>
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
              <Text
                style={{ fontSize: 16, color: "#20397A", fontWeight: "700" }}
              >
                Xem thêm
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
