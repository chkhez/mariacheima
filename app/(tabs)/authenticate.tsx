import { View, StyleSheet, Image, Text, TextInput, TouchableHighlight } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import User from '../modules/user';
import { Alert } from "react-native";
function Authenticate() {
    const [fontsLoaded] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat.ttf'),
        ChakraPetch: require('../assets/fonts/ChakraPetch.ttf')
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef(null);
    const pwdRef = useRef(null);
    const navigation = useNavigation();

    if (!fontsLoaded) {
        return <Text>Loading fonts...</Text>;
    }

    const handle = async () => {
        const user = new User({ email, password });
        if (!(user.checkEmail() && user.checkPassword())) {
            // Optionally show an error message here
            
        try {
            const response = await fetch(
                'https://127.0.0.1:8000/api/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );
            const data = await response.json();
            if (data.success) {
                if (data.user.role === 'admin') {
             Alert.alert(
            "Succès",
            `Bienvenue `,
            [
              {
                text: "Aller au tableau de bord",
                onPress: () => 
                    <link href="/dashboardAdmin" />
              }
            ],
          );
                } else if (data.user.role === 'doctor') {
                     Alert.alert(
            "Succès",
            `Bienvenue ${data.user.name}`,
            [
              {
                text: "Aller au tableau de bord",
                onPress: () => 
                    <link href="/dashboardDoctor" />
              }
            ],
          );
            ;
                }
                // TODO: generate a JWT token and store it in local storage
                // TODO: send data with username to the other dashboard
            } else {
                // Optionally show an error message here
            }
        } catch (error) {

            console.error('Error:', error);
            // Optionally handle fetch/network errors here
        }
    }
    };

    return (
        <View style={Styles.container}>
            <Image source={require('../assets/images/epilya_logo.png')} resizeMode="contain" style={Styles.logo} />
            <Text style={Styles.welcome}>Welcome Back!</Text>
            <View style={Styles.containerInput}>
                <View>
                    <Text style={Styles.label}>Email or Username or Telephone</Text>
                    <TextInput
                        style={Styles.input}
                        placeholder="Enter your email or username or telephone"
                        value={email}
                        ref={emailRef}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={Styles.label}>Password</Text>
                    <TextInput
                        style={Styles.input}
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        value={password}
                        ref={pwdRef}
                        onChangeText={setPassword}
                    />
                </View>
            </View>
            <TouchableHighlight style={Styles.button} underlayColor="#45A18D" onPress={handle}>
                <Text style={Styles.textButton}>Login</Text>
            </TouchableHighlight>
            <Text style={Styles.contactAdmin}>
                If having a problem in logging in, Please Contact the admin
            </Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 70,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    welcome: {
        fontSize: 25,
        color: '#0c144b',
        marginTop: -35,
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: 'ChakraPetch',
        fontWeight: 'bold',
    },
    input: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#0c144b',
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
    },
    button: {
        width: 100,
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#0c144b',
        color: 'white',
        marginTop: 20,
    },
    textButton: {
        fontSize: 15,
        color: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: 'ChakraPetch',
        fontWeight: 'bold',
    },
    label: {
        fontSize: 13,
        color: '#0c144b',
        marginTop: 10,
        marginLeft: 35,
        fontFamily: 'ChakraPetch',
        fontWeight: 'bold',
    },
    containerInput: {
        marginTop: 20,
        marginBottom: 30,
    },
    contactAdmin: {
        fontSize: 10,
        color: '#0c144b',
        marginLeft: 50,
        fontFamily: 'ChakraPetch',
        fontWeight: 'bold',
        marginTop: 180,
        alignContent: 'center',
        justifyContent: 'center',
    }
});

export default Authenticate;
