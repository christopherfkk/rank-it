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
          {index === 0 ? <Text style={styles.subheading}>You</Text> : null}
          <TextInput
            style={styles.timeBorder}
            placeholder="Score"
            keyboardType="numeric"
            placeholderTextColor="#737373"
            maxLength={2}
          />
        </View>
        <View style={styles.inputContainer}>
          {index === 0 ? <Text style={styles.subheading}>Opponent</Text> : null}
          <TextInput
            style={[styles.timeBorder]}
            placeholder="Score"
            keyboardType="numeric"
            placeholderTextColor="#737373"
            maxLength={2}
            rejectResponderTermination
          />
        </View>
        {index > 0 ? (
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
        ) : null}
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
    fontSize: 16, // Smaller font size
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.manropeBold,
    textAlign: "center",
    alignSelf: "stretch",
  },
  subheading: {
    color: Color.crimson_100,
    fontFamily: FontFamily.manropeMedium,
    fontSize: 9, // Smaller font size
    textAlign: "center",
    marginBottom: 2, // Smaller margin
  },
  addRingIcon: {
    width: 10, // Smaller icon size
    height: 10, // Smaller icon size
  },
  addButtonContainer: {
    alignItems: 'center',
    marginTop: 5,
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
    top: '50%',
    right: 15,
    transform: [{ translateY: -3 }], // Adjust translateY to center the icon
  },
  timeBorder: {
    paddingVertical: 5, // Smaller padding
    borderRadius: Border.br_8xs,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: 9, // Smaller font size
    borderWidth: 1,
    alignSelf: "stretch",
    alignItems: "center",
    paddingHorizontal: 4, // Smaller padding
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  startTime: {
    marginLeft: 20, // adjust as needed
  },
  deleteRingIcon: {
    width: 8,
    height: 8,
  },
});

export default InsertMatchScores;