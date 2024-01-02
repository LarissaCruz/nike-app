import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LandingPageProps } from "../navigation/types";

export default function LoginScreen({ navigation }: LandingPageProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignInPress = () => {
    navigation.navigate("SuccessLoginScreen");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo-black.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Enter your email to join us or sign in.</Text>
      <Text style={styles.subTitle}>Moldova Change</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#767676"
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputIcon}
          secureTextEntry={!showPassword}
          placeholder="Password"
          placeholderTextColor="#767676"
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.icon}
        >
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="#000000"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => null}>
        <Text style={styles.link}>Forgotten your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignInPress} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 110,
  },
  image: {
    width: 50.4,
    height: 18,
    resizeMode: "contain",
    marginBottom: 40,
  },
  title: {
    color: "#000",
    fontSize: 28,
    fontFamily: "exo-regular",
  },
  subTitle: {
    marginTop: 16,
    color: "#767676",
    fontSize: 16,
    fontFamily: "exo-regular",
    marginBottom: 42,
  },
  input: {
    borderWidth: 1,
    borderColor: "#767676",
    borderRadius: 10,
    padding: 12,
    marginBottom: 32,
    fontSize: 16,
    fontFamily: "exo-regular",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#767676",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  inputIcon: {
    flex: 1,
    height: 40,
    color: "#000",
    fontSize: 16,
    fontFamily: "exo-regular",
  },
  icon: {
    paddingHorizontal: 10,
  },
  link: {
    textDecorationLine: "underline",
    color: "#000",
    fontSize: 16,
    fontFamily: "exo-medium",
    marginBottom: 32,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 51,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#E25319",
    backgroundColor: "#E25319",
  },
  buttonText: {
    fontFamily: "exo-regular",
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
  },
});
