import React from 'react';
import {View, Text,Image, StatusBar, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';



export default function Home() {
   
    return (
        <View style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <FontAwesome name="plus-square-o" style={{fontSize: 24}} />
        <Text
          style={{
            fontFamily: 'Lobster-Regular',
            fontSize: 25,
            fontWeight: '500',
          }}>
          Instagram
        </Text>
        <Feather name="navigation" style={{fontSize: 24}} />
      </View>

      <ScrollView>
        
        <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
          <Ionic
            name="ios-reload-circle-sharp"
            style={{fontSize: 60, opacity: 0.2}}
          />
        </View>
      </ScrollView>

      <Image
          source={require("./../../../../assets/ExamenU2/perfil.png")}
        />
    </View>
    )
}
