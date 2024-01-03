import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Avatar, ProgressBar, RadioButton } from "react-native-paper";
import { LandingPageProps } from "../../navigation/types";

interface Product {
  id: string;
  name: string;
  image: any; // Alterado para aceitar qualquer tipo de imagem
}
export default function StepScreen01({ navigation }: LandingPageProps) {
  const [checked, setChecked] = useState<string>("first");

  const mensImage = require("../../assets/images/avatar01.png");
  const womensImage = require("../../assets/images/avatar02.png");
  const boysImage = require("../../assets/images/avatar03.png");
  const girlsImage = require("../../assets/images/avatar04.png");
  const products: Product[] = [
    { id: "1", name: "Mens", image: mensImage },
    { id: "2", name: "Womens", image: womensImage },
    { id: "3", name: "Boys", image: boysImage },
    { id: "4", name: "GIrls", image: girlsImage },
  ];
  const goToLogin = () => {
    navigation.navigate("StepScreen02"); // Navega para a tela de login
  };
  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity onPress={() => setChecked(item.name)}>
      <View style={[styles.item, item.id === "4" && { borderBottomWidth: 0 }]}>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
          }}
        >
          <Avatar.Image size={68} source={item.image} />
          <Text style={[styles.title, { fontSize: 20 }]}>{item.name}</Text>
        </View>
        <RadioButton
          value={item.name}
          status={checked === item.name ? "checked" : "unchecked"}
          onPress={() => setChecked(item.name)}
          color={"white"} // Define a cor da marcação como branca
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require("../../assets/images/overlay.png")}
      style={styles.backgroundImage}
    >
      <View
        style={{
          marginBottom: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProgressBar
          progress={0.25}
          color={"white"}
          style={{ borderRadius: 20, backgroundColor: "#909090", width: 240 }}
        />
      </View>
      <Text style={[styles.title, { marginBottom: 30 }]}>
        First up, which product do you use the most?
      </Text>
      <FlatList
        data={products.slice(0, 2)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ flex: 1 }}
      />
      <Text style={[styles.title, { marginBottom: 30 }]}>Any others?</Text>
      <FlatList
        data={products.slice(Math.max(products.length - 2, 0))}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ flex: 1 }}
      />

      <View style={styles.container}>
        <TouchableOpacity style={styles.centeredButton} onPress={goToLogin}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,

    paddingHorizontal: 25,
    paddingVertical: 80,
  },
  title: {
    fontFamily: "exo-medium",
    fontSize: 28,
    color: "#fff",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#57595B",
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  centeredButton: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 60,
    elevation: 3,
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "exo-medium",
  },
});
