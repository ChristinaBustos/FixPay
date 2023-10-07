import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios'

export default function AsistensScreen() {
  const [middleText, setMiddleText] = useState(
    "La aplicación es una ayuda para un mejor manejo de tu dinero y generar conciencia de los gastos o ingresos por año, es por ello de la aplicación."
  );

  const [option, setOption] = useState(1);
  const [question, setQuestion] = useState(0);
  const [response, setReponse] = useState([])
  const navigation = useNavigation();

  const handleButtonClick = (buttonText, optionValue) => {
    if (buttonText === "Pagos") {
      setMiddleText("Esta es nuestra información sobre los pagos.");
    } else if (buttonText === "Cuentas bancarias"){
        setMiddleText("Esta es nuestra información sobre las cuentas bancarias.");
    }else if (buttonText === "Tarjetas"){
        setMiddleText("Esta es nuestra información sobre nuestras tarjetas.");
    }else if (buttonText === "Sobre nosotros"){
        setMiddleText("Esta es nuestra información acerca de lo que somos.");
    }
    setOption(optionValue)
    //asignar question un numero aleatorio entre 0 y 3 que sea entero
    setQuestion(Math.floor(Math.random() * 4))
    console.log(optionValue)
    // También puedes navegar a otras pantallas según el botón presionado
    // Por ejemplo, navigation.navigate('OtraPantalla');
  };


  const fetchData = async () => {
    try {
      console.log(option, question)
        const res = await axios.post('http://10.49.185.164:5000/api/chat', {
            index: option,
            question: question
        });
        console.warn(res.data);
        setReponse(res.data)
    } catch (err) {
        console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }
  , [option, question]);
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
          <Button onPress={() => {
            handleButtonClick("Pagos", 0)
            setOption(0)
            }} style={styles.button}>
            Pagos
          </Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => handleButtonClick("Cuentas bancarias",1)}
            style={styles.button}
          >
            Cuentas bancarias
          </Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={() => handleButtonClick("Tarjetas", 2)} style={styles.button}>
            Tarjetas
          </Button>
          <Button
            onPress={() => handleButtonClick("Sobre nosotros", 3)}
            style={styles.button}
          >
            Sobre Nosotros
          </Button>
        </View>
        <View style={styles.buttonContainer}>

         <Text>
         {response.answer}
         </Text>
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