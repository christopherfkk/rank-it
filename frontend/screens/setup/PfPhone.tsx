import React, { useState } from 'react';
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import {
//   PhoneInput,
//   ICountry,
//   getCountryByCca2,
// } from 'react-native-international-phone-number';

import RegTitle from "../../components/auth/RegTitle";
import RegText from "../../components/auth/RegText";
import RegTextInput from "../../components/auth/RegTextInput";
import RegButton from "../../components/setup/RegButton"
import RegBackground from "../../components/setup/RegBackground";

import { Reg } from "../../GlobalStyles";

import { useRegContext, ACTIONS } from '../../RegContext';


// reference from https://github.com/AstrOOnauta/react-native-international-phone-number
const PfPhone = () => {
  const navigation = useNavigation();
  const { state, dispatch } = useRegContext();
  const [selectedCountry, setSelectedCountry] = useState(getCountryByCca2('JP'))
  const [inputValue, setInputValue] = useState<string>('');

  function handleInputValue(phoneNumber: string) {
    setInputValue(phoneNumber);
    }

  function handleSelectedCountry(country: ICountry) {
    setSelectedCountry(country);
    }

  const storeUserInfo = async (phoneNumber: string) => {
    try {
      // backend data of user is inserted
      dispatch({ type: ACTIONS.SET_PHONE_NUMBER, payload: phoneNumber });

    } catch (error) {
      console.error("Error storing location in context:", error);
    }
  };
return (
  <View style={Reg.background}>
    <RegBackground>
    <Text style={Reg.heading1}>
      {`What’s your Phone Number?`}
    </Text>
    <Text style={Reg.heading2}>
      {`Your phone number will only be shared with opponents you have matched with, ensuring your privacy throughout the competitive badminton experience.`}
    </Text>
    <PhoneInput
      value={inputValue}
      onChangePhoneNumber={handleInputValue}
      selectedCountry={selectedCountry}
      onChangeSelectedCountry={handleSelectedCountry}
      withDarkTheme
      containerStyle={{
        marginTop: 10,  // Set your desired margin here.
      }}
    />
    {/* <View style={{ marginTop: 10 }}>
      <Text>
        Country:{' '}
        {`${selectedCountry?.name} (${selectedCountry?.cca2})`}
      </Text>
      <Text>
        Phone Number:{' '}
        {`${selectedCountry?.callingCode} ${inputValue}`}
      </Text>
    </View> */}
    <RegButton
      navigation={navigation}
      screenName="PfAvatar"
      onPress={() => storeUserInfo(`${selectedCountry?.callingCode} ${inputValue}`)}
      disabled={selectedCountry === undefined || inputValue.trim() === ""}
    />
    </RegBackground>
  </View>
);
}

export default PfPhone;
