import React, { useState} from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import { Image, Input, Icon } from '@rneui/base'
export default function Home() {
    const [images, setimages] = useState([
        require('./../../../../assets/ExamenU2/Gato1.jpeg'),
        require('./../../../../assets/ExamenU2/r34.jpeg'),
        require('./../../../../assets/ExamenU2/Perro1.jpg'),
        require('./../../../../assets/ExamenU2/Moto1.jpg'),
        require('./../../../../assets/ExamenU2/Kendal.jpg'),
        require('./../../../../assets/ExamenU2/mk4.jpg'),
        require('./../../../../assets/ExamenU2/Moto2.jpg'),
        require('./../../../../assets/ExamenU2/R35.jpeg'),
        
      ]);
    return (
        <View>
             <Input
                        placeholder='Buscar'
                        keyboardType='text'
                        rightIcon={
                            <Icon type='material-community' name='magnify' size={22} />
                        }
                    />
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

const styles = StyleSheet.create({})