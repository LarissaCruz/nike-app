import * as React from "react";
import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

// Componente customizado para as guias (tabs)
const CustomTabBar = (props: any) => {
  const { navigationState, position, onPress } = props;

  return (
    <View
      style={{
        alignItems: "flex-start",
        flexDirection: "row",
        backgroundColor: "white",
        borderBottomColor: "#CDCDCD",
        borderBottomWidth: 1,
        marginBottom: 24,
        position: "relative", // Para que o indicador fique posicionado corretamente
      }}
    >
      {navigationState.routes.map((route: any, index: any) => {
        const isRouteActive = index === navigationState.index;
        const textColor = isRouteActive ? "#000" : "#999"; // Cor do texto ativo e inativo
        const fontWeight = isRouteActive ? "bold" : "normal"; // Peso da fonte ativo e inativo
        const font = "exo-medium";

        return (
          <TouchableOpacity
            key={index}
            style={{
              alignItems: "flex-start",
              paddingHorizontal: 16,
              paddingTop: 12,
              paddingBottom: 16,
              marginHorizontal: 8,
            }}
            onPress={() => onPress(index)}
          >
            <Text
              style={{
                color: textColor,
                fontFamily: font,
                fontSize: 16,
              }}
            >
              {route.title}
            </Text>
            {isRouteActive && ( // Adiciona o indicador somente se a aba estiver ativa
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 15,
                  height: 2,
                  width: "100%", // Largura do indicador
                  backgroundColor: "#000", // Cor do indicador
                }}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }}>
    {/* Conteúdo da primeira guia */}
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }}>
    {/* Conteúdo da segunda guia */}
  </View>
);

const renderScene = SceneMap({
  Men: FirstRoute,
  Women: SecondRoute,
  Kids: SecondRoute,
});

export default function TabViewNavigation() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Men", title: "Men" },
    { key: "Women", title: "Women" },
    { key: "Kids", title: "Kids" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <CustomTabBar {...props} onPress={(index: any) => setIndex(index)} />
      )}
    />
  );
}
