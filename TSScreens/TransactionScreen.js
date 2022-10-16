import { View, Text, Button, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TransactionScreen = () => {
  const [string, setString] = useState("String");

  const generateRandomString = () => {
    const char =
      "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
    const random = Array.from(
      { length: 10 },
      () => char[Math.floor(Math.random() * char.length)]
    );
    const randomString = random.join("");
    return setString(randomString);
  };

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.5,
          backgroundColor: "#FFFF",
          flexDirection: "row",
          alignItems: "center",
          padding:5
        }}
      >
        <Image
          source={require("../assets/T.png")}
          
          style={{
            height: 40,
            width: 40,
            resizeMode: "stretch",
          }}
        />
        <Text style={{ fontSize: 15,fontWeight: "bold" }}>
          Trans currency
        </Text>
      </View>
      <View
        style={{
          flex: 2.5,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5F4F3",
        }}
      >
        <Icon
          name="check"
          size={50}
          color="#0054B4"
        />
        <Text style={{ fontSize: 25, fontWeight: "100" }}>
          คุณจ่าย 500 usd
        </Text>
        <Text style={{ fontSize: 12, fontWeight: "100" }}>to username</Text>
      </View>
      <View style={{ margin: 30, flex: 3 }}>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>จ่ายด้วย</Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "100" }}>
            Card x..ดึง4ตัวท้ายจากของเอิร์ธ..
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "100" }}>500 usd</Text>
        </View>
        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 20 }}>
          รายละเอียดผู้รับ
        </Text>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "100" }}>
            เลขธุรกรรม : {string}
          </Text>
          <Text style={{ marginTop: 10, fontSize: 14, fontWeight: "100" }}>
            เราจะส่งการยืนยันไปที่ :
          </Text>
          <Text style={{ marginTop: 10, fontSize: 14, fontWeight: "100" }}>
            username
          </Text>
        </View>
        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 20 }}>
          รายละเอียดผู้โอน
        </Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "100" }}>id คนโอน</Text>
        </View>
      </View>
      <View style={{ margin: 30, flex: 0.1, justifyContent: "flex-end" }}>
        <Button
          title="กลับหน้าหลัก"
          color="#56B2F9"
          onPress={() => checkTextinput()}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default TransactionScreen;
