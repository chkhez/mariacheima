import React from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useFonts } from "expo-font";

function CompteRendu() {
  const [fontsLoaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat.ttf'),
    ChakraPetch: require('../assets/fonts/ChakraPetch.ttf')
  });

  if (!fontsLoaded) {
    console.log('Loading fonts...');
    return null;
  }

  const handleSubmit = () => {
    console.log('Formulaire soumis !');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Titre */}
      <Text style={styles.title}>Compte rendu</Text>

      {/* Champ Titre du protocole */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Titre du Compte rendu :</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez le titre du protocole..."
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Champ Objectif */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Objectif :</Text>
        <TextInput
          style={styles.input}
          placeholder="Décrivez l'objectif..."
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Champ Date d'incendie */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Date d'incendie :</Text>
        <TextInput
          style={styles.input}
          placeholder="JJ/MM/AAAA"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
        />
      </View>

      {/* Champ Rapport */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Rapport de Compte rendu :</Text>
        <TextInput
          style={styles.reportContainer}
          multiline
          numberOfLines={5}
          placeholder="Écrivez ici le rapport détaillé..."
          placeholderTextColor="#aaa"
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
    paddingTop: 60, // << 🆕 ajoute ça pour descendre tout ton container
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
  reportContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#A0C4FF',
    textAlignVertical: 'top',
    height: 300, // 🛑 RAPPORT réduit pour éviter le scroll
  },
  button: {
    backgroundColor: '#004080',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 90,
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
export default CompteRendu;