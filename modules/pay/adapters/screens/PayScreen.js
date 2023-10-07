import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, StyleSheet, Alert } from "react-native";
import { Image, Input, Icon } from "@rneui/base";
import {
  Modal,
  Portal,
  Button,
  Card,
  Avatar,
  PaperProvider,
} from "react-native-paper";
import client from "../../../../kernel/http-client.gateway";


export default function PayScreen() {
  const navigation = useNavigation();
  const goProductoScreen = () => {
    navigation.navigate("homeStack");
  };
  const [visible, setVisible] = React.useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState({ email: "" });
  const [show, setShow] = useState(false);
  const [conektaData, setConektadata] = useState("");
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };
  
  const pay = () => {
      console.log("Tarejeta de Débito");
      setShow(true);
      setError({ email: "" });
      data = {
        "line_items": [{
          "name": "Tarjeta de Débito",
          "unit_price": 100,
          "quantity": 1
        }],
        "currency": "MXN",
        "customer_info": {
          "name": "Alan Mathew Castañeda",
          "email": email,
          "phone": "777 890 90 77"
        },
        "metadata": {
          "datos_extra": "1234"
        },
        "charges": [{
          "payment_method": {
            "type": "cash",
            "expires_at":1696691521
          }
        }]
      };
      try {
        client.doPost('/orders',data)
      } catch (error) {
        console.log('AAAAAAAaa')
      }
      
    }      
  

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <PaperProvider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Text>PAGO EN EFECTIVO</Text>

            <View>
              <Image
                source={require("../../../../assets/oxxo_pay.png")}
                style={{ width: 250, height: 60, marginRight: 10 }}
              />
              <Input
                placeholder="Correo electronico"
                keyboardType="email-address"
                containerStyle={styles.input}
                onChange={(event) => setEmail(event.nativeEvent.text)}
                errorMessage={error.email}
                autoCapitalize="none"
                rightIcon={
                  <Icon type="material-community" name="email" size={22} />
                }
              />
              <Text style={{ textAlign: "justify" }}>
                Enviaremos una referencia de pago a tu correo para que puedas
                realizar el pago. Sigue las instrucciones del correo para
                completar tu compra.
              </Text>

              <Text style={{ color: "red", textAlign: "justify" }}>
                *La referencia solo dura una hora del día en curso
              </Text>
              
            </View>

            {/* Envuelve el bloque de texto y botones en un View */}
            <View style={{ marginVertical: 15 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  mode="contained"
                  onPress={hideModal}
                  style={{ marginRight: 10 }}
                >
                  Cancelar
                </Button>
                <Button
                  mode="contained"
                  onPress={() => {
                    pay(); 
                    // Mostrar la alerta al hacer clic en el botón "Pagar"
                    Alert.alert(
                      "Referencia de pago enviada al correo electronico proporcionado",
                      "Hemos enviado la referencia de pago a tu correo electrónico, tienes un límite de una hora a partir del momento en que recibes el correo para realizar tu pago.",
                      [
                        {
                          text: "OK",
                          onPress: () => {
                            // Cierra el modal después de aceptar la alerta
                            goProductoScreen();

                            // Redirigir a la pantalla de Productos después de aceptar la alerta
                            navigation.navigate("Productos"); // Reemplaza "Productos" con el nombre de tu pantalla de productos
                          },
                        },
                      ]
                    );
                  }}
                >
                  Pagar
                </Button>
              </View>
            </View>
          </Modal>
        </Portal>

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
        </Card>

        <Card style={styles.card}>
          <Card.Title
            title="Pagar con"
            subtitle={
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Avatar.Image
                  source={{
                    uri: "data:image/png;base64,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",
                  }}
                  size={24} // Ajusta el tamaño del avatar según tus necesidades
                />
                <Text style={{ marginLeft: 8 }}>Conekta</Text>
              </View>
            }
          />
          <Card.Content>
            <Text variant="titleLarge">Selecciona un método de pago</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Button icon="cash" mode="contained" onPress={showModal}>
                Efectivo
              </Button>
              <Button
                icon="credit-card"
                mode="contained"
                onPress={() => console.log("Tarjeta")}
              >
                Tarjeta
              </Button>
            </View>
          </Card.Content>
          <Card.Actions>
            <Button>PAGAR $100Mxn</Button>
          </Card.Actions>
        </Card>
      </PaperProvider>
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

  input: {
    width: "100%",
    marginVertical: 5,
  },
});
