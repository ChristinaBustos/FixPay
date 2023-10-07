import React from "react";
import { StyleSheet, ScrollView, Text, Alert } from "react-native";
import { Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  const goPayScreen = () => {
    navigation.navigate("PayScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Card style={styles.card}>
        <Card.Title
          title="Tarjeta de crédito"
          subtitle="Saldo disponible: $36,000.00Mxn"
        />
        <Card.Content>
          <Text variant="titleLarge">Costo del servicio</Text>
          <Text variant="bodyMedium">$100.00Mx</Text>
        </Card.Content>
        <Card.Cover
          source={require("../../../../assets/TarjetaBnz.png")}
          style={styles.coverImage}
        />
        <Card.Actions>
          <Button onPress={goPayScreen}>Adquirir</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Title
          title="Asesoría financiera"
          subtitle="¡Encuentra el camino hacia la prosperidad!"
        />
        <Card.Content>
          <Text variant="titleLarge">Costo del servicio</Text>
          <Text variant="bodyMedium">$200.00Mx</Text>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://static.wixstatic.com/media/cb26bb_ab8d855bd2c34460974b9261d060d8af~mv2.gif",
          }}
        />
        <Card.Actions>
          <Button
            onPress={() => {
              Alert.alert(
                "Servicio no disponible!",
                "Por el momento no esta activo este servici, favor de itentar mas tarde.",
                [
                  {
                    text: "OK",
                   
                  },
                ]
              );
            }}
          >
            Adquirir
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Title
          title="Gestión de inversiones"
          subtitle="Un plan financiero adaptado a tus metas"
        />
        <Card.Content>
          <Text variant="titleLarge">Costo del servicio</Text>
          <Text variant="bodyMedium">$150.00Mx</Text>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://www.pngwing.com/es/free-png-tvhsp"
                      }}            />
        <Card.Actions>
          <Button
            onPress={() => {
              Alert.alert(
                "Servicio no disponible!",
                "Por el momento no esta activo este servici, favor de itentar mas tarde.",
                [
                  {
                    text: "OK",
                   
                  },
                ]
              );
            }}
          >
            Adquirir
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ECF8F8", // Cambia el color de fondo a gris
    borderWidth: 4,
    borderColor: "#93E1E5", // Cambia esto al color de borde que desees
    borderRadius: 10,
    overflow: "hidden",
    margin: 16, // Margen alrededor de la tarjeta
  },
  coverImage: {
    margin: 16, // Margen alrededor de la imagen
  },
});
