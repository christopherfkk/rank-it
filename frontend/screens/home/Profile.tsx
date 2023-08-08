import React, { useState, useCallback, useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RouteProp } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { Color, Home, ProfileStyles } from "../../GlobalStyles";

import apiConfig from '../../apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootState } from '../../store';

import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileDetails from "../../components/profile/ProfileDetails";
import ChallengeButton from '../../components/home/ChallengeButton';
import ModalPostmatchfeedbackA from '../../components/home/ModalPostmatchfeedbackA';
import ModalReminder from "../../components/home/ModalReminder";
import BackButton from '../../components/home/BackButton';
import { avatarImages } from '../setup/avatarImages';

type ProfileParamList = {
  Profile: {
    otherUserId: number | null;
    self: boolean;
  };
};

type ProfileType = {
  route: RouteProp<ProfileParamList, "Profile">
};

const Profile = ({ route }: ProfileType) => {

  const navigation = useNavigation()

  const [isLoading, setIsLoading] = useState(true);
  
  const [unconfirmedMatch, setUnconfirmedMatch] = useState(false);
  const messages = useSelector((state: RootState) => state.webSocketStore.messages);

  useEffect(() => {
    if (messages && messages.length > 0) {
        setUnconfirmedMatch(true);
    }
}, [messages]);

  const handleClosePopup = () => {
    setUnconfirmedMatch(false)
  };

  const { otherUserId, self } = route.params || { otherUserId: null, self: true };
  const [profile, setProfile] = useState({
    id: "",
    first_name: "",
    last_name: "",
    level: "",
    blurb: "",
    matches_played: "",
    overall_sportsmanship_rating: "",
    top_strengths: [],
    overall_match_competitiveness_rating: "",
    avatar_image_name: "",
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [editedBioText, setEditedBioText] = useState("");
  const [bioText, setBioText] = useState(profile.blurb);
  const [selfName, setSelfName] = useState();

  const handleEditButtonPress = () => {
    setIsEditMode(true);
    setEditedBioText(bioText);
  };

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        setIsLoading(true);

        const user = JSON.parse(await AsyncStorage.getItem('userInfo'));
        const selfUserId = user.id;
        setSelfName(user.first_name);

        const userId = self ? selfUserId : otherUserId;

        try {
          const access = await AsyncStorage.getItem('accessToken');
          const response = await fetch(`${apiConfig.BASE_URL}/accounts/${userId}/`, {
            method: "GET",
            headers: {
              "Authorization": `Token ${access}`,
            },
          });
          const data = await response.json();
          setProfile(data);
        } catch {
          console.error("NO PROFILE: Can't fetch profile");
        }
        setIsLoading(false);
      };
      fetchData();
    }, [self])
  );

  const handleSaveButtonPress = async () => {
    try {
      const selfUserId = JSON.parse(await AsyncStorage.getItem('userInfo')).id;
      const access = await AsyncStorage.getItem('accessToken');
      const formData = new FormData();
      formData.append("blurb", editedBioText);
      const response = await fetch(`${apiConfig.BASE_URL}/accounts/${selfUserId}/`, {
        method: "PUT",
        headers: {
          "Authorization": `Token ${access}`,
        },
        body: formData,
      });
      const data = await response.json();
      setIsEditMode(false);
      setBioText(data.blurb);
    } catch (error) {
      console.error("Failed to save bio text:", error);
    }
  };

  const handleLogout = async () => {
    const userId = JSON.parse(await AsyncStorage.getItem('userInfo')).id;
    const accessToken = await AsyncStorage.getItem('accessToken');

    fetch(`${apiConfig.BASE_URL}/accounts/logout/`, {
      method: "POST",
      headers: {
        "Authorization": `Token ${accessToken}`,
      },
    })
      .then((response) => {
        if (response.status == 200) {
          AsyncStorage.clear();
          navigation.navigate("Login");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        throw error;
      });
  };

  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const handleRegButtonPress = () => {
    setShowFeedbackModal(true);
  };

  const handleCloseModal = () => {
    setShowFeedbackModal(false);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Color.crimson_100} />
      </View>
    );
  }

  return (
    <SafeAreaView style={[Home.background]}>
      <View style={Home.body}>
        <ScrollView
          style={styles.profile}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.profileScrollViewContent}
        >
          <ProfileHeader
            avatar={avatarImages[profile.avatar_image_name]}
            fullName={profile.first_name + " " + profile.last_name}
            location="CB Gym, Tokyo"
            skill={profile.level}
          />
          {!self ? <BackButton onPress={() => navigation.navigate("Ranking")} /> : null}
          {self ?
            <Pressable
              onPress={handleEditButtonPress}
              style={ProfileStyles.button}
            >
              <Image
                style={styles.editProfileIcon}
                contentFit="contain"
                source={require("../../assets/edit-profile-icon.png")}
              />
              <Text style={ProfileStyles.buttonText}>
                Edit Bio
              </Text>
            </Pressable> : null}

          <ModalPostmatchfeedbackA
            visible={showFeedbackModal}
            onClose={handleCloseModal}
            opponentName={profile.first_name + " " + profile.last_name}
            level={profile.level ?? 'null'}
            opponentId={profile.id}
            selfName={selfName}
          />

          <ProfileDetails
            bioText={bioText}
            nMatchesLogged={profile.matches_played}
            highestRankAttained={1}
            sportsmanshipRating={profile.overall_sportsmanship_rating}
            strength={profile.top_strengths.join(", ")}
            competitiveness={profile.overall_match_competitiveness_rating}

            isEditMode={isEditMode}
            editedBioText={editedBioText}
            setEditedBioText={setEditedBioText}
            onSaveButtonPress={handleSaveButtonPress}
          />

          {self ?
            <View style={ProfileStyles.button}>
              <TouchableOpacity onPress={handleLogout}>
                <Text style={ProfileStyles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>
            : null}

          {!self ?
            <ChallengeButton
              button="record"
              backgroundColor={Color.crimson_200}
              textColor={Color.white}
              onPress={handleRegButtonPress}
            /> : null}
        </ScrollView>
      </View>
      <ModalReminder
        visible={unconfirmedMatch}
        onClose={handleClosePopup}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: "100%",
    alignSelf: "stretch",
    overflow: "scroll",
  },
  profileScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    overflow: "scroll",
    width: "100%",
    backgroundColor: Color.white,
  },
  editProfileIcon: {
    height: 13,
    width: 13,
  },
});

export default Profile;
