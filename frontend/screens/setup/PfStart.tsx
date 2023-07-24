import * as React from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  View,
  Pressable,
  TouchableOpacity, 
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Reg } from "../../GlobalStyles";
import RegBackground from "../../components/setup/RegBackground";
import RegButton from "../../components/setup/RegButton"

const PfStart = () => {
  const navigation = useNavigation();

  return (
    <View style={Reg.background}>
      <RegBackground>
        <Text style={Reg.heading1}>Welcome</Text>
        <Text style={Reg.heading2}>
          {`We're thrilled to welcome you aboard and play badminton with you! `}
        </Text>
    <RegButton navigation={navigation} screenName="PfName" />
      </RegBackground>
    </View>
  );
};

export default PfStart;
