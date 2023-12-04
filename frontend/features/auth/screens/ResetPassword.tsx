import * as React from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "../../../theme/GlobalStyles";
import apiConfig from '../../../utils/apiConfig';
import BackButton from '../../../components/BackButton';

const ResetPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [error,setError] = useState("");

  const handleReset = () => {
    // Perform your API call or network request here to send email and password to the backend
    // You can use libraries like Axios or the built-in fetch function
  
    // Example using fetch:
      const resetData = {
        email: email,
      };
       console.log(resetData)
      // Perform your API call or network request here to send email and password to the backend
      fetch(`${apiConfig.BASE_URL}/accounts/password/reset/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resetData),
      })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Email not registered.");
          } else {
            throw new Error("Something went wrong.");
          }
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response from the server
        console.log(data);
      
        // Assuming a successful reset sends a "detail" property with a success message.
        if (data.detail === "Reset password email has been sent.") {
          navigation.navigate("Login");
        } else {
          setError(Object.values(data));
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });}


  return (
    <SafeAreaView style={[Auth.background]}>
      <View style={Auth.body}>
        <BackButton onPress={() => navigation.navigate("Login")} />
        <Text style={Auth.heading1}>
          Reset Password
        </Text>
        <Text style={Auth.heading2}>
          Enter your email to reset your password
        </Text>
        <TextInput
          style={[Auth.textInputBoxStyle]}
          placeholder="Enter your email "
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#737373"
          onChangeText={(text: string) => setEmail(text)}
          contextMenuHidden // Disable context menu (copy-paste actions)
        />
        <TouchableOpacity
          style={[Auth.button]}
          activeOpacity={0.2}
          onPress={handleReset}
        >
          <Text style={[Auth.buttonText]}>Reset</Text>
        </TouchableOpacity>
        {error ? (
          <Text style={Auth.errorText}>{error}</Text>
        ) : null}

      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
