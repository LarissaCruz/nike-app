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
import { ProgressBar } from "react-native-paper";

export default function PreferencesScreen({ navigation }: LandingPageProps) {
  const goToLogin = () => {
    navigation.navigate("Login"); // Navega para a tela de login
  };
  return (
    <ImageBackground
      source={require("../assets/images/fundo-account.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View
          style={{
            marginBottom: 35,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff", // Cor de fundo para visualização
          }}
        >
          <ProgressBar
            progress={0.15}
            color={"white"}
            style={{ borderRadius: 20, backgroundColor: "#909090", width: 240 }}
          />
        </View>
        <Text style={styles.title}>To personalize your</Text>
        <Text style={styles.title}>experience and</Text>
        <Text style={styles.title}>connect you to sport,</Text>
        <Text style={styles.title}> we’ve got a few </Text>
        <Text style={styles.title}> questions for you. </Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={goToLogin}>
          <Text style={[styles.text, { color: "#000000" }]}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    paddingHorizontal: 25,
    paddingVertical: 80,
    justifyContent: "space-between",
  },
  container: {},
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
    alignItems: "center",
    gap: 20,
  },
});
