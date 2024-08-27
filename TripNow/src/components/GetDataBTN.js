import { router } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
const GetDataBTN = ({selectedCountry}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>router.push('/country')}>
        <Text style={styles.text}>Get Data of: {selectedCountry.flag + ' ' + selectedCountry.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 45,
    padding: 3,
    marginTop: 15,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: 8,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  text:{
    color : '#FFF',
    fontSize: 15,
    opacity: 0.8,
    fontWeight: 'bold'
  },
  textCountry:{
    color : '#FFF',
    fontSize: 18,
    opacity: 0.8
  }
});

export default GetDataBTN;
