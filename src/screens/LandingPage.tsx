import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LandingPageProps } from "../navigation/types";

export default function LandingPage({ navigation }: LandingPageProps) {
  const goToLogin = () => {
    navigation.navigate("Login"); // Navega para a tela de login
  };

  const goToSignIn = () => {
    navigation.navigate("SignIn"); // Navega para a tela de signup
  };
  return (
    <ImageBackground
      source={require("../assets/images/fundo-sign-up.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.imagem}
        />
        <Text style={styles.title}>Nike App</Text>
        <Text style={styles.title}>
          Bringing Nike Members the best products, inspiration and stories in
          sport.
        </Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={goToLogin}>
            <Text style={[styles.text, { color: "#000000" }]}>Join Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOutline} onPress={goToSignIn}>
            <Text style={styles.text}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
  },
  container: {
    marginBottom: 70,
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
  button: {
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 55,
    backgroundColor: "#fff",
    color: "red",
  },
  buttonOutline: {
    borderWidth: 0.5,
    borderColor: "#fff",
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 55,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "exo-regular",
  },
  row: {
    marginTop: 24,
    flexDirection: "row",
    gap: 20,
  },
});
