import { ImageBackground, StyleSheet, View } from "react-native";
import CurrentLocationBTN from "@components/CurrentLocationBTN";
import GetDataBTN from "@components/GetDataBTN";
import CountriesList from "@components/CountriesList";
import { BACKGROUND_IMAGE } from "@assets/backgrounds";
import { useState } from "react";
import { AutocompleteDropdownContextProvider } from "react-native-autocomplete-dropdown";
export default function HomePage() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <AutocompleteDropdownContextProvider>
      <View style={styles.appContainer}>
        <ImageBackground
          resizeMode="cover"
          source={BACKGROUND_IMAGE}
          style={styles.image}
        >
          <View style={styles.contentContainer}>
            <View style={styles.locationContainer}>
              <CountriesList
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
              />
              <CurrentLocationBTN setSelectedCountry={setSelectedCountry} />
            </View>
            {selectedCountry && (
              <View>
                <GetDataBTN selectedCountry={selectedCountry} />
              </View>
            )}
          </View>
        </ImageBackground>
      </View>
    </AutocompleteDropdownContextProvider>
  );
}

const styles = StyleSheet.create({
    appContainer: {
      flex: 1
    },
    contentContainer:{
      flex: 1,
      textAlign: 'left',
      justifyContent: 'center',
      alignItems: 'center', 
    },
    locationContainer: {
      flexDirection: "row",
    },
    image: {
      flex: 1,
      resizeMode: "cover",
    }
  });