import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Padding, Border, FontFamily, FontSize, Color, Home } from '../../GlobalStyles';
import apiConfig from '../../apiConfig';
import { Dimensions } from 'react-native'; // Import Dimensions to get the screen width

const Instructions = () => {
  const navigation = useNavigation();
  const [ranking, setRanking] = useState([]);
  const [userId, setUserId] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(await AsyncStorage.getItem('userInfo'));
        setUserId(user.id);

        const access = await AsyncStorage.getItem('accessToken');
        const response = await fetch(`${apiConfig.BASE_URL}/ranks/skill/`, {
          method: 'GET',
          headers: {
            Authorization: `Token ${access}`,
          },
        });
        const data = await response.json();
        setRanking(data);
        console.log(data);
      } catch {
        console.error("NO RANKING: Can't fetch ranking");
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={[Home.background]}>
      <View style={Home.body}>
        <ScrollView
          style={styles.ranking}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.rankingScrollViewContent}
        >
          <Image
            source={require('../../assets/Instructions/Medal.png')}
            style={styles.medalImage}
            resizeMode="contain"
          />

          {/* Add text below the image */}
          <Text style={styles.headerText}>
            Congratulations! You've won a medal.
          </Text>
          <Text style={styles.instruction}>
            Keep up the good work and improve your ranking even more!
          </Text>
          {/* Add more text as needed */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... (Existing styles)
  header: {
    width: "100%",
    alignItems: "center",
    paddingTop: "5%",
},
headerText: {
    fontSize: FontSize.size_11xl,
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.bebasNeueRegular,
},
  medalImage: {
    width: 400,
    height: 200,
    marginVertical: 20,
    alignSelf: 'center',
  },

  instructionText: {
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.bebasNeueRegular,
    justifyContent: "center",
},
instruction: {
    alignSelf: "flex-start",  // ALIGN LEFT
    width: "70%",  // SAME AS PROFILE IN RANKING CONTAINER
    flexDirection: "row",
    marginBottom: "1%",
    marginTop: "3%"
},
  // ... (Existing styles)
});

export default Instructions;
