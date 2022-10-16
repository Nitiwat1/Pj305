import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const PayScreen = () => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(true);

  const checkTextinput = () => {
    if (name != "username") {
      setShow(true);
      return;
    }
    if (name == "username") {
      setShow(false);
      return;
    }
  };

  return (
    <SafeAreaProvider>
      <View style={{justifyContent: "left", flexDirection: "row" }}>
        <TextInput
          style={{
            width: "80%",
            height: 40,
            paddingHorizontal: 10,
            borderWidth: 0.5,
            marginTop: 25,
            marginLeft:10,
            borderRadius: 20,
          }}
          placeholderTextColor="#D8D6D4"
          placeholder="@username"
          value={name}
          onChangeText={(name) => setName(name)}
          onSubmitEditing={() => checkTextinput()}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity 
          onPress={() => checkTextinput()}>
        <Icon
          style={{ marginTop: 22, padding: 10 }}
          name="search"
          size={25}
          color="#000"
        />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => onPress()}
      >
        <View
          style={{
            marginTop: 10,
            marginLeft: 10,
            justifyContent: "left",
            flexDirection: "row",
          }}
        >
          {show ? null : (
            <Icon
              style={{ marginTop: 8, padding: 10 }}
              name="envelope"
              size={40}
              color="blue"
            />
          )}
          <View style={{ justifyContent: "left", flex: 1 }}>
            {show ? null : (
              <Text
                style={{
                  fontSize: 15,
                  margin: 5,
                  marginTop: 15,
                  fontWeight: "600",
                }}
              >
                ส่งไปที่
              </Text>
            )}
            {show ? null : (
              <Text style={{ fontSize: 12, margin: 5, fontWeight: "600" }}>
                username
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaProvider>
  );
};

export default PayScreen;
