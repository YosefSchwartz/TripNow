import React from "react";
import {
  Alert,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import axios from "axios";

const CurrentLocationBTN = ({setSelectedCountry, setValue}) => {
    const getCurrentLocation = async () => {
        // Get coords
        let { status } = await Location.requestForegroundPermissionsAsync();
        
        if (status !== "granted") {
            Alert.alert("Location permission denied");
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        return location.coords
    };
    const getCurrentCountryCode = async (coords) => {
        try{
            return await axios.get(`https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse?lat=${coords.latitude}&lon=${coords.longitude}&zoom=0&limit=1`,{
                headers:{
                "x-rapidapi-host": 'forward-reverse-geocoding.p.rapidapi.com',
                "x-rapidapi-key": 'd9c6d2ca7cmshc1b5365d64a3265p1d52e6jsnf587b9c71536'
            }}).then(({data})=>{
                return data.address.country_code.toUpperCase() ?? null
            })
        }catch(error){
            console.log('Error occurred during get country code from API', error)
            return null
        }
    }
    const getCurrentCountryData = async (countryCode) => {
        if(!countryCode){
            setSelectedCountry(null)
        } else {
            return await axios.get(`http://172.20.10.3:3333/countries/${countryCode}`,{
                headers:{'Accept': 'application/json'}
                })
        }
    }
    
    const setCurrentLocation = async () => {
        const coords = await getCurrentLocation()
        const countryCode = await getCurrentCountryCode(coords)
        const { data : currentCountry} = await getCurrentCountryData(countryCode)
        setSelectedCountry(currentCountry)
    }
    return (
    <View>
      <TouchableOpacity style={styles.button} onPress={setCurrentLocation}>
        <MaterialIcons name="my-location" size={45} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "15%",
  },
  button: {
    height:50,
    padding: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 8,
  },
});
export default CurrentLocationBTN;
