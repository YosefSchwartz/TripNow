import React, { memo } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
// https://github.com/onmotion/react-native-autocomplete-dropdown
import { useEffect, useState } from "react";
import axios from 'axios';


const SELECT_COUNTRY_PLACEHOLDER = "Select a country..."

const ItemSeparatorComponent = () => <View style={{ height: 1, width: '100%', backgroundColor: '#d8e1e6' }} />

const CountriesList = memo(({setSelectedCountry, selectedCountry}) => {
  const [countries, setCountries] = useState(null);
  const [suggestions, setSuggestions] = useState(null);
  const [inputValue, setInputValue] = useState('');
  
  useEffect(() => {
    try {
        const getCountries = async () =>{
            await axios.get("http://172.20.10.3:3333/countries")
              .then(({data}) => {
                setCountries(data)
                setSuggestions(data)
              })
        }
        getCountries()
    } catch (error) {
      setCountries([]);
    }
  }, []);

  useEffect(()=>{
    setInputValue(selectedCountry? selectedCountry.name : '')
  },[selectedCountry])

  useEffect(()=>{
    const newSuggestions = countries && countries.filter(country => {
      return  country.name?.toLowerCase().includes(inputValue.toLowerCase()) ||
      country.code?.toLowerCase().includes(inputValue.toLowerCase())
    })
    setSuggestions(newSuggestions)
  },[inputValue])


      return (
        <View style={styles.container}>
        <AutocompleteDropdown
          debounce={400}
          showChevron
          closeOnBlur={false}
          onSelectItem={setSelectedCountry}
          dataSet={suggestions}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ignoreAccents
          inputHeight={50}
          textInputProps={{
            style: styles.textInput,
            placeholder: SELECT_COUNTRY_PLACEHOLDER,
            value: inputValue,
            onChangeText: setInputValue
          }}
          renderItem={(item) => (
          <Text style={{padding: 13, fontSize: 16 }}>{item.flag + ' - ' + item.name + '(' + item.code + ')'}</Text>
        )}
        />
      </View>
    )
  })


const styles = StyleSheet.create({
  container: {
    width: '85%',
    height:50,
    paddingHorizontal: 10,
  },
  textInput: {
    textAlign: 'left',
  },
});

export default CountriesList;