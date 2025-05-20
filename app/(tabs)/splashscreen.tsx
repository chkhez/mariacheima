import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { useFonts } from 'expo-font'

function SplashScreen () {
  const [fontsLoaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat.ttf'),
    ChakraPetch: require('../assets/fonts/ChakraPetch.ttf')
  })
  if (!fontsLoaded) {
    console.log('Loading fonts...')
  }

  //here start my interface of splash screen
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image
          source={require('../assets/images/epilya_logo.png')}
          style={Styles.logo}
        />
        <Text style={Styles.slogan}>You Heal. We Protect.</Text>
      </View>
      <TouchableOpacity
        style={Styles.button}
        onPress={() => alert('Login button pressed')}
      >
        <Text style={Styles.textButton}>Let's Start</Text>
      </TouchableOpacity>
    </View>
  )
}
const Styles = StyleSheet.create({
  logo: {
    width: 270,
    height: 200,
    marginTop: 240,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  slogan: {
    fontSize: 15,
    color: '#0c144b',
    marginTop: -30,
    marginLeft: 63,
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Montserrat',
    fontWeight: 'bold'
  },
  button: {
    width: 150,
    height: 50,
    marginTop: 250,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#0c144b',
    color: 'white'
  },
  textButton: {
    fontSize: 15,
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'ChakraPetch',
    fontWeight: 'bold'
  },
  shapes: {
    width: 150,
    height: 150,
    //border radius in 50%
    borderRadius: 150,
    borderWidth: 1,
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 100
  }
})

export default SplashScreen
