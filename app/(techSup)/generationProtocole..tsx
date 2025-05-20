import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useFonts } from "expo-font";

function GenerationProtocole() {
  const [fontsLoaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat.ttf'),
    ChakraPetch: require('../assets/fonts/ChakraPetch.ttf')
  });



  const [nomProtocole, setNomProtocole] = useState('');
  const [quantiteTraitement, setQuantiteTraitement] = useState('');
  const [quantiteTraitementSecond, setQuantiteTraitementSecond] = useState('');

  if (!fontsLoaded) {
    console.log('Loading fonts...');
    return null;
  }

  const handleSubmit = () => {
    console.log('Formulaire soumis !', { nomProtocole, quantiteTraitement, quantiteTraitementSecond });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Titre */}
      <Text style={styles.title}>Generation Protocole Traitement</Text>

      {/* Champ Nom du Protocole */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Nom du Protocole :</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez le nom du protocole..."
          placeholderTextColor="#aaa"
          value={nomProtocole}
          onChangeText={setNomProtocole}
        />
      </View>

      {/* Champ Quantité du Traitement */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Quantité du Traitement :</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez la quantité..."
          placeholderTextColor="#aaa"
          value={quantiteTraitement}
          onChangeText={setQuantiteTraitement}
          keyboardType="numeric"
          multiline
          numberOfLines={5}
        />
      </View>

      {/* Deuxième Champ Quantité du Traitement */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Remarque de Traitement:</Text>
        <TextInput
          style={styles.largeInput}
          placeholder="Entrez la quantité..."
          placeholderTextColor="#aaa"
          value={quantiteTraitementSecond}
          onChangeText={setQuantiteTraitementSecond}
          keyboardType="numeric"
          multiline
          numberOfLines={5}
        />
      </View>

      {/* Bouton Submit */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E6F0F8',
    padding: 20,
    paddingBottom: 30,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    color: '#004080',
    marginBottom: 25,
    marginTop: 20,
  },
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#004080',
    marginBottom: 5,
    fontFamily: 'ChakraPetch',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#A0C4FF',
  },
  largeInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#A0C4FF',
    textAlignVertical: 'top',
    height: 150, // Ajusté pour correspondre à la taille du rapport
  },
  
  button: {
    backgroundColor: '#004080',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 20, // Légère marge du bas pour que le bouton ne touche pas le bas de la page
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  }
});

export default GenerationProtocole;
