import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function AsistensScreen() {
  const [middleText, setMiddleText] = useState(
    "La aplicación es una ayuda para un mejor manejo de tu dinero y generar conciencia de los gastos o ingresos por año, es por ello de la aplicación."
  );
  const navigation = useNavigation();

  const handleButtonClick = (buttonText) => {
    if (buttonText === "Pagos") {
      setMiddleText("Esta es nuestra información sobre los pagos.");
    } else if (buttonText === "Cuentas bancarias"){
        setMiddleText("Esta es nuestra información sobre las cuentas bancarias.");
    }else if (buttonText === "Tarjetas"){
        setMiddleText("Esta es nuestra información sobre nuestras tarjetas.");
    }else if (buttonText === "Sobre nosotros"){
        setMiddleText("Esta es nuestra información acerca de lo que somos.");
    }

    // También puedes navegar a otras pantallas según el botón presionado
    // Por ejemplo, navigation.navigate('OtraPantalla');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Card style={styles.card}>
        <Card.Title
          style={{ marginVertical: 10 }}
          title="CONSEJOS FINANCIEROS"
        />
        <Card.Content>
          <Text style={{ marginVertical: 20 }}>{middleText}</Text>
        </Card.Content>

        <View style={styles.buttonContainer}>
          <Button onPress={() => handleButtonClick("Pagos")} style={styles.button}>
            Pagos
          </Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => handleButtonClick("Cuentas bancarias")}
            style={styles.button}
          >
            Cuentas bancarias
          </Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={() => handleButtonClick("Tarjetas")} style={styles.button}>
            Tarjetas
          </Button>
          <Button
            onPress={() => handleButtonClick("Sobre nosotros")}
            style={styles.button}
          >
            Sobre Nosotros
          </Button>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: "#ECF8F8",
    borderWidth: 4,
    borderColor: "#93E1E5",
    borderRadius: 10,
    overflow: "hidden",
    margin: 16,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: 5,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
});