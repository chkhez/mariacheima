import React from "react";
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

function DashboardTechsp() {
  const [fontsLoaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat.ttf'),
    ChakraPetch: require('../assets/fonts/ChakraPetch.ttf')
  });

  if (!fontsLoaded) {
    console.log('Loading fonts...');
    return null;
  }

  return (
    <View style={Styles.container}>
      
      {/* HEADER */}
      <View style={Styles.header}>
        <View style={Styles.profileContainer}>
          <Image source={require('../assets/images/user.png')} resizeMode="contain" style={Styles.profile} />
          <View style={Styles.info}>
            <Text style={Styles.name}>John Doe</Text>
            <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10 }} />
            <Text style={Styles.role}>Admin</Text>
          </View>
        </View>

        <TouchableOpacity style={Styles.notif}>
          <Image source={require("../assets/icons/notification.png")} style={Styles.bell} />
        </TouchableOpacity>
      </View>

      {/* SEARCH INPUT */}
      <View>
        <TextInput placeholder="Search users..." style={Styles.searchInput} />
      </View>

      {/* CONSIGNE */}
      <View style={Styles.consigne}>
        <Text style={Styles.titleConsigne}>Dernière consigne</Text>
        <Text style={Styles.date}>Date: 12/12/2023</Text>
        <Text style={Styles.hour}>Hour: 12:00</Text>

        {/* OBJECTIF BUTTON */}
        <TouchableOpacity style={Styles.objectifButton}>
          <Text style={Styles.objectifText}>Objectif</Text>
        </TouchableOpacity>
      </View>

      {/* MY TASK SECTION */}
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
          Dernier patient infecté
        </Text>

        {/* CONTAINER VIDE */}
        <View style={Styles.taskContainer}>
          {/* Container vide mais taille conservée */}
          
  <Text style={{ color: "white", fontWeight: "bold" }}>Patient Treatment</Text>


        </View>
      </View>

      {/* 3 ICON BUTTONS */}
      <View style={Styles.iconButtonContainer}>
        <TouchableOpacity style={Styles.buttons}>
          <Image source={require("../assets/icons/list.png")} style={Styles.icons} />
        </TouchableOpacity>

        <TouchableOpacity style={Styles.buttons}>
          <Image source={require("../assets/icons/list.png")} style={Styles.icons} />
        </TouchableOpacity>

        <TouchableOpacity style={Styles.buttons}>
          <Image source={require("../assets/icons/list.png")} style={Styles.icons} />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 20
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 15
  },
  profile: {
    width: 70,
    height: 70,
  },
  info: {
    marginLeft: 10
  },
  name: {
    fontSize: 15,
    color: '#0c144b',
    fontWeight: 'bold'
  },
  role: {
    fontSize: 11,
    color: '#777',
    opacity: 0.7,
    marginTop: -5
  },
  notif: {
    borderRadius: 20,
    borderColor: "#0c144b",
    width: 50,
    height: 50,
  },
  bell: {
    width: 30,
    height: 30,
    marginTop: 65
  },
  header: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: "rgba(128,128,128,0.3)",
    width: 300,
    margin: 15,
    fontFamily: "ChakraPetch"
  },
  consigne: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
    lineHeight: 20,
    height: 200,
    backgroundColor: "rgba(12, 20, 75,0.4)",
    borderRadius: 15,
    padding: 10,
    width: 300,
    margin: 15
  },
  titleConsigne: {
    fontWeight: "bold",
    color: "rgb(12, 20, 75)",
    fontFamily: "ChakraPetch",
    fontSize: 18,
    marginBottom: 10
  },
  date: {
    color: "#333",
    fontSize: 13,
    marginTop: 5
  },
  hour: {
    color: "#333",
    fontSize: 13,
    marginTop: 5
  },
  objectifButton: {
    marginTop: 15,
    backgroundColor: "#0c144b",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: "center"
  },
  objectifText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold"
  },
  taskContainer: {
    backgroundColor: "#E8F0FE",
    borderRadius: 20,
    padding: 20,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: "center",
    height: 180 // <-- On force une hauteur fixe pour garder la taille
  },
  iconButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30
  },
  buttons: {
    marginLeft: 10,
    height: 60,
    width: 60,
    backgroundColor: "#0c144b",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5
  },
  icons: {
    width: 25,
    height: 25,
  }
});

export default DashboardTechsp;
