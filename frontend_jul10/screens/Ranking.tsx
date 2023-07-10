import * as React from "react";
import { Text, StyleSheet, View, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import OpponentContainer from "../components/OpponentContainer";
import ProfileContainer from "../components/ProfileContainer";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Ranking = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.ranking, styles.rankingFlexBox]}>
      <View style={[styles.header, styles.headerSpaceBlock]}>
        <View style={styles.rankingWrapper}>
          <Text style={styles.ranking1}>Ranking</Text>
        </View>
      </View>
      <View style={styles.ranking2}>
        <View style={[styles.location, styles.locationSpaceBlock]}>
          <Pressable style={[styles.locationTab, styles.locationLayout]}>
            <Text style={styles.tokyoTypo}>Tokyo</Text>
          </Pressable>
          <Pressable style={[styles.locationTab1, styles.locationLayout]}>
            <Text style={[styles.tokyoText1, styles.tokyoTypo]}>Shibuya</Text>
          </Pressable>
        </View>
        <ScrollView
          style={[styles.ranking3, styles.rankingFlexBox]}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.rankingScrollViewContent}
        >
          <View style={[styles.subheading, styles.locationSpaceBlock]}>
            <Text style={styles.ranking4Typo}>Athlete</Text>
            <Text style={[styles.skillRating, styles.ranking4Typo]}>
              skill rating
            </Text>
          </View>
          <OpponentContainer
            onFrameTouchableOpacityPress={() =>
              navigation.navigate("OpponentMenu")
            }
          />
          <OpponentContainer
            onFrameTouchableOpacityPress={() =>
              navigation.navigate("OpponentMenu")
            }
          />
          <OpponentContainer
            onFrameTouchableOpacityPress={() =>
              navigation.navigate("OpponentMenu")
            }
          />
          <OpponentContainer
            onFrameTouchableOpacityPress={() =>
              navigation.navigate("OpponentMenu")
            }
          />
          <OpponentContainer
            onFrameTouchableOpacityPress={() =>
              navigation.navigate("OpponentMenu")
            }
          />
          <OpponentContainer
            onFrameTouchableOpacityPress={() =>
              navigation.navigate("OpponentMenu")
            }
          />
          <OpponentContainer
            onFrameTouchableOpacityPress={() =>
              navigation.navigate("OpponentMenu")
            }
          />
          <OpponentContainer
            onFrameTouchableOpacityPress={() =>
              navigation.navigate("OpponentMenu")
            }
          />
          <OpponentContainer
            onFrameTouchableOpacityPress={() =>
              navigation.navigate("OpponentMenu")
            }
          />
          <OpponentContainer
            onFrameTouchableOpacityPress={() =>
              navigation.navigate("OpponentMenu")
            }
          />
          <OpponentContainer
            onFrameTouchableOpacityPress={() =>
              navigation.navigate("OpponentMenu")
            }
          />
        </ScrollView>
      </View>
      <ProfileContainer
        productIds={require("../assets/rankingicon1.png")}
        productIdsArray={require("../assets/mathcesicon1.png")}
        productIdsString={require("../assets/messagetext1.png")}
        productIdsString20x20x={require("../assets/memberphoto11.png")}
        propHeight={54}
        propColor="#d31e28"
        propColor1="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rankingScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rankingFlexBox: {
    flex: 1,
    overflow: "hidden",
  },
  headerSpaceBlock: {
    paddingHorizontal: Padding.p_0,
    alignItems: "center",
  },
  locationSpaceBlock: {
    paddingVertical: Padding.p_0,
    alignSelf: "stretch",
  },
  locationLayout: {
    width: 106,
    borderRadius: Border.br_xl,
  },
  tokyoTypo: {
    textAlign: "center",
    fontFamily: FontFamily.manropeRegular,
    fontSize: FontSize.size_3xs,
    color: Color.lightLabelPrimary,
  },
  ranking4Typo: {
    width: 140,
    display: "flex",
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.bebasNeueRegular,
    alignItems: "center",
  },
  ranking1: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 0.9,
    lineHeight: 10,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.bebasNeueRegular,
  },
  rankingWrapper: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  header: {
    paddingVertical: Padding.p_xl,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  locationTab: {
    backgroundColor: "#ededed",
    height: 21,
    paddingVertical: Padding.p_11xs,
    alignItems: "center",
    paddingHorizontal: Padding.p_0,
  },
  tokyoText1: {
    alignSelf: "stretch",
  },
  locationTab1: {
    paddingHorizontal: 24,
    marginLeft: 50,
    paddingVertical: Padding.p_0,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: Color.white,
  },
  location: {
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  skillRating: {
    marginLeft: 4,
  },
  subheading: {
    height: 12,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    alignItems: "center",
  },
  ranking3: {
    marginTop: 8,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  ranking2: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  ranking: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Ranking;
