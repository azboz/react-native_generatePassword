import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";

import Clipboard from "expo-clipboard";

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvxz";
export default function App() {
  const [pass, setPass] = useState();
  const [size, setSize] = useState(10);

  function generetepass() {
    let pass = "";
    for (let index = 0, n = charset.length; index < size; index++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    setPass(pass);
  }

  function copypass() {
    Clipboard.setString(pass);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" color="black" />

      <Image
        source={require("./src/assets/ico.png")}
        style={{ width: 150, height: 150 }}
      />

      <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>
        {size} Caracteres
      </Text>

      <View style={styles.box_slider}>
        <Slider
          style={{ width: 220, height: 60 }}
          minimumValue={8}
          maximumValue={50}
          minimumTrackTintColor="#dddd"
          maximumTrackTintColor="#000000"
          thumbTintColor="black"
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
        />
      </View>

      <TouchableOpacity
        onPress={generetepass}
        style={{
          width: 240,
          height: 50,
          backgroundColor: "#FFA500",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#f5f5f5", fontWeight: "bold", fontSize: 18 }}>
          Gerar Senha
        </Text>
      </TouchableOpacity>

      <View
        style={{
          backgroundColor: "#FAFAD2",
          marginTop: 40,
          width: 240,
          height: 50,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{ color: "#000", fontWeight: "bold", fontSize: 15 }}
          onLongPress={copypass}
        >
          {pass}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FFF0",
    alignItems: "center",
    justifyContent: "center",
  },
});
