import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, Image, StyleSheet } from 'react-native';
import { Padding, Color, Border, FontFamily, FontSize } from "../../GlobalStyles";

const InsertMatchScores = () => {
  const [rows, setRows] = useState([{id:0}]); // initial rows

  const handleAddRow = () => {
    setRows([...rows, {id: Date.now()}]); // Add new row with unique id
  };

  const handleDeleteRow = (id) => {
    if (rows.length > 1) {
      setRows(rows.filter(row => row.id !== id)); // Delete row by filtering out the one with matching id
    }
  };

  const renderRows = () => {
    return rows.map((row, index) => (
      <View key={row.id} style={[styles.insertMatchScores, styles.profileFlexBox]}>
        <View style={styles.inputContainer}>
          <Text style={styles.subheading}>You</Text>
          <TextInput
            style={styles.timeBorder}
            placeholder="Score"
            keyboardType="numeric"
            placeholderTextColor="#737373"
            maxLength={2}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subheading}>Opponent</Text>
          <TextInput
            style={[styles.timeBorder]}
            placeholder="Score"
            keyboardType="number-pad"
            placeholderTextColor="#737373"
            maxLength={2}
            rejectResponderTermination
          />
        </View>
        <View style={styles.deleteIconContainer}>
          <View style={{ flex: 1 }} />
          <Pressable onPress={() => handleDeleteRow(row.id)}>
            <Image
              style={styles.deleteRingIcon} 
              source={require("../../assets/minus_icon.png")} 
            />
          </Pressable>
          <View style={{ flex: 1 }} />
        </View>
      </View>
    ));
  };
  


  return (
    <View style={[styles.body]}>
      <Text style={[styles.heading]}>{`Match Scores `}</Text>
      {renderRows()}
      <View style={styles.addButtonContainer}>
        <Pressable onPress={handleAddRow}>
          <Image
            style={styles.addRingIcon}
            contentFit="cover"
            source={require("../../assets/add-ring.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    color: Color.lightLabelPrimary,     
    fontFamily: FontFamily.manropeBold,
    textAlign: "center",
    alignSelf: "stretch",
  },
  // profileFlexBox: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  // },
  subheading: {
    color: Color.crimson_100,
    fontFamily: FontFamily.manropeMedium,
    fontSize: 12,
    textAlign: "center",
    marginBottom: 5,
  },
  addRingIcon: {
    width: 15,
    height: 15,
  },
  addButtonContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  rowContainer: {
    flexDirection: "column",
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  insertMatchScores: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
    position: 'relative', // Add position relative
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  profileFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  deleteIconContainer: {
    position: 'absolute',
    top: '70%',
    right: 0,
    transform: [{ translateY: -7.5 }], // Adjust translateY to center the icon
  },
  

  // insertMatchScores: {
  //   flexDirection: "row",
  //   paddingVertical: Padding.p_11xs,
  //   paddingHorizontal: Padding.p_xl,
  //   justifyContent: 'space-between', 
  //   alignSelf: "stretch",
  // },
  // inputContainer: {
  //   flex: 1,
  //   alignItems: "center",
  // },
  timeBorder: {
    paddingVertical: 8,
    borderRadius: Border.br_8xs,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: 12,
    borderWidth: 1,
    alignSelf: "stretch",
    alignItems: "center",
    paddingHorizontal: Padding.p_mini,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  startTime: {
    marginLeft: 20, // adjust as needed
  },
  // deleteIconContainer: {
  //   justifyContent: 'center',
  // },
  deleteRingIcon: { 
    width: 15,
    height: 15,
  },
});

export default InsertMatchScores;
