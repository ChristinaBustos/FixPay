import { StyleSheet,FlatList,Image, Text, View } from 'react-native'
import React, { useState,Component } from 'react'
import { Button } from '@rneui/base'
import { getAuth } from 'firebase/auth'
import Loading from '../../../../kernel/components/Loading'
import { Avatar } from 'react-native-elements';


export default function Profile() {
    
    const [images, setimages] = useState([
        require('./../../../../assets/ExamenU2/paseo.jpg'),
        require('./../../../../assets/ExamenU2/pose.jpg'),
        require('./../../../../assets/ExamenU2/aaaa.jpg'),
        require('./../../../../assets/ExamenU2/gg.jpg'),
        
      ]);
    
    const auth = getAuth()
    const [show, setShow] = useState(false)
    const [text, setText] = useState('')
    const cerrarSesion = () => {
        setText('Cerrando sesión')
        setShow(true)
        return auth.signOut()
    }




    return (
        
        <View style={styles.btnContainer}>
<Text>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</Text>

<Image
          style={{ width: 100, height: 100, marginBottom: 15 }}
          source={require("./../../../../assets/ExamenU2/perfil.png")}
        />
             <Button
                title='Cerrar sesión'
                buttonStyle={styles.btn}
                onPress={cerrarSesion}
            >
            </Button>
            <Loading show={show} text={text} />
            
<Text>Mis publicaciones</Text>
<FlatList
        data={images}
        key={"2"}
        numColumns={2}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={{
              width: 180,
              height: 220,
              borderWidth: 2,
              resizeMode: "contain",
              margin: 6,
            }}
            keyExtractor={(item) => item.id}
          /> 
        )}
      />

           
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        marginTop: 30,
        backgroundColor: 'tomato',
        paddingVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        width: 250
    },
})