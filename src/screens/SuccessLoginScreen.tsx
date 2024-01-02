import React, { useState, useEffect, useRef } from "react";
import { View, Image, Text, StyleSheet, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LandingPageProps } from "../navigation/types";

const SuccessLoginScreen = ({ navigation }: LandingPageProps) => {
  const [showLogo, setShowLogo] = useState(true);
  const [showText, setShowText] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setShowLogo(false);
        setShowText(true);

        Animated.timing(fadeText, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        }).start(() => {
          // Após a transição do texto, navegue para outra página
          navigation.navigate("PreferencesScreen");
        });
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [fadeAnim, fadeText, navigation]);

  return (
    <>
      {showLogo ? (
        <View style={styles.container}>
          <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
            <Image
              source={require("../assets/images/loading.png")}
              style={styles.logo}
            />
          </Animated.View>
        </View>
      ) : (
        <View style={styles.containerText}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.imagem}
          />
          {showText && (
            <Animated.Text style={[styles.title, { opacity: fadeText }]}>
              Hi Jack,
              {"\n"}
              Welcome to Nike.
              {"\n"}
              Thanks for becoming a Member!
            </Animated.Text>
          )}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E25319",
  },
  containerText: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#E25319",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 106,
    height: 106,
    resizeMode: "contain",
  },
  imagem: {
    width: 70,
    height: 25,
    resizeMode: "contain",
    marginBottom: 30,
  },
  title: {
    fontFamily: "exo-medium",
    fontSize: 28,
    color: "#fff",
  },
});

export default SuccessLoginScreen;
