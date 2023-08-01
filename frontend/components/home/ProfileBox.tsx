import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../../GlobalStyles";

type ProfileBoxProps = {
    name: string;
    avatar: any; // Change the type according to the actual type of the avatar
    level: string;
  };

const ProfileBox = ({ name, avatar, level }: ProfileBoxProps) => {
    return (
        <View style={styles.profile}>
          <Image style={styles.memberPhotoIcon} source={avatar} />
    
          <View style={styles.profileBox}>
            <Text style={styles.fullName}>{name}</Text>
    
            <View style={styles.location}>
              {/*<Image*/}
              {/*  style={styles.iconLocation}*/}
              {/*  source={require("../../assets/profile/iconLocation.png")}*/}
              {/*/>*/}
              <Text style={styles.locationText}>CB Gym</Text>
            </View>
    
            <View style={styles.location}>
              {/*<Image*/}
              {/*  style={styles.iconLocation}*/}
              {/*  source={require("../../assets/profile/iconBadminton.png")}*/}
              {/*/>*/}
              <Text style={styles.locationText}>{level}</Text>
            </View>
          </View>
        </View>
      );
    };

const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    paddingVertical: 10,
    marginTop: 6,
    overflow: "hidden",
    justifyContent: "center",
  },
  memberPhotoIcon: {
    borderRadius: 211,
    width: 50,
    height: 50,
  },
  profileBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  fullName: {
    lineHeight: 20,
    fontFamily: FontFamily.manropeBold,
    fontSize: 20,
    textAlign: "left",
    color: Color.gray_300,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_0,
  },
  locationText: {
    fontFamily: FontFamily.manropeSemibold,
    fontSize: 8,
    color: "#737373",
    marginLeft: 5, 
  },
  iconLocation: {
    overflow: "hidden",
    height: 10,
    width: 10,
  },
});

export default ProfileBox;
