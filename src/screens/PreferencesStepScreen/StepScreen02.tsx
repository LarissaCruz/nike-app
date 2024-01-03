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
  const goToLogin = () => {
    navigation.navigate("TabNavigator"); // Navega para a tela de login
  };
  const runningImage = require("../../assets/images/avatar05.png");
  const lifestyleImage = require("../../assets/images/avatar06.png");
  const basketImage = require("../../assets/images/avatar07.png");
  const soccerImage = require("../../assets/images/avatar08.png");
  const jordanImage = require("../../assets/images/avatar09.png");
  const nikeImage = require("../../assets/images/avatar10.png");
  const products: Product[] = [
    { id: "1", name: "Running", image: runningImage },
    { id: "2", name: "Lifestyle", image: lifestyleImage },
    { id: "3", name: "Basketball", image: basketImage },
    { id: "4", name: "Soccer", image: soccerImage },
    { id: "5", name: "Jordan", image: jordanImage },
    { id: "6", name: "Nike By You", image: nikeImage },
  ];

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity onPress={() => setChecked(item.name)}>
      <View style={[styles.item, item.id === "6" && { borderBottomWidth: 0 }]}>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
          }}
        >
          <Avatar.Image size={68} source={item.image} />
          <Text
            style={[
              styles.title,
              { fontSize: 20 },
              checked === "unchecked" && { color: "#767676" },
            ]}
          >
            {item.name}
          </Text>
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
        What sports, brands and collections are you interested in?
      </Text>
      <FlatList
        data={products}
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
