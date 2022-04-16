import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Onboarding() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a iTask</Text>
      <View style={styles.featureContainer}>
        <Image style={styles.icon} source={require("../assets/arrows.png")} />
        <View style={{ flex: 1 }}>
          <Text style={styles.subTitle}>Administrador tareas diarias</Text>
          <Text style={styles.subHeadline}>
            iTask es una aplicación sencilla que te ayuda a aumentar tu
            productividad.
          </Text>
        </View>
      </View>
      <View style={styles.featureContainer}>
        <Image style={styles.icon} source={require("../assets/bell.png")} />
        <View style={{ flex: 1 }}>
          <Text style={styles.subTitle}>Notificationes</Text>
          <Text style={styles.subHeadline}>
            Reciba notificaciones cuando sea el momento de hacer sus tareas.
          </Text>
        </View>
      </View>
      <View style={styles.featureContainer}>
        <Image style={styles.icon} source={require("../assets/design.png")} />
        <View style={{ flex: 1 }}>
          <Text style={styles.subTitle}>Diseño minimalista</Text>
          <Text style={styles.subHeadline}>
            Disfruta de un diseño simple que te permite concentrarte solo en lo
            que tienes que hacer.
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <Text style={[styles.subTitle, { color: "#fff" }]}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const iphoneHeight = Dimensions.get("window").height;
console.log(iphoneHeight);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: iphoneHeight > 800 ? 70 : 50,
    marginTop: 100,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 22,
  },
  subHeadline: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
    color: "#828282",
  },
  featureContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  icon: {
    width: 42,
    height: 42,
    marginRight: 20,
    resizeMode: "contain",
  },
  button: {
    // backgroundColor: '#007AFF',
    backgroundColor: "#000000",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderRadius: 12,
    marginTop: 100,
    position: "absolute",
    bottom: iphoneHeight > 800 ? 90 : 30,
  },
});
