import React from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { LandingPageProps } from "../navigation/types";
import TabViewNavigation from "../navigation/TabViewNavigation";

interface Item {
  id: string;
  image: ImageSourcePropType;
  text: string;
}

const ShopScreen: React.FC<LandingPageProps> = ({ navigation }) => {
  const handleSignInPress = () => {
    navigation.navigate("SuccessLoginScreen");
  };

  const data: Item[] = [
    {
      id: "1",
      image: require("../assets/images/image01.png"),
      text: "Best Sellers",
    },
    {
      id: "2",
      image: require("../assets/images/image5.png"),
      text: "Featured in Nike Air",
    },
  ];

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.smalltitle}>{item.text}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.boxContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Shop</Text>
      </View>
      <TabViewNavigation></TabViewNavigation>

      <Text style={styles.subtitle}>Must-Haves, Best Sellers & More</Text>

      <View style={styles.container}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>

      <ImageBackground
        source={require("../assets/images/image02.png")}
        style={styles.backgroundImage}
      >
        <Text style={[styles.subtitle, { color: "#fff", marginBottom: 0 }]}>
          New & Featured
        </Text>
      </ImageBackground>
      <ImageBackground
        source={require("../assets/images/banner1.png")}
        style={[styles.backgroundImage]}
      >
        <Text style={[styles.subtitle, { color: "#fff", marginBottom: 0 }]}>
          New & Featured
        </Text>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingBottom: 15,
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: "exo-medium",
    fontSize: 28,
    color: "#000",
  },
  container: {
    paddingLeft: 24,
    paddingBottom: 24,
  },
  subtitle: {
    marginLeft: 24,
    marginBottom: 28,
    fontFamily: "exo-medium",
    fontSize: 20,
    color: "#000",
  },
  smalltitle: {
    fontFamily: "exo-medium",
    fontSize: 14,
    color: "#000",
    marginTop: 10,
  },
  flatListContainer: {
    gap: 10,
    marginBottom: 20,
  },
  itemContainer: {
    // Espaçamento entre os itens
  },
  image: {
    width: 216,
    height: 216,
    resizeMode: "contain",
  },
  itemText: {
    fontFamily: "exo-regular",
    fontSize: 16,
    color: "#000",
    marginTop: 5, // Espaçamento entre imagem e texto
  },
  backgroundImage: {
    resizeMode: "contain",
    marginBottom: 5,
    height: 110,
    justifyContent: "center",
  },
});

export default ShopScreen;
