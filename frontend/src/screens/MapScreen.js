import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>You are on MapScreen</Text>
      <Button title="Go Back Home" onPress={() => navigation.navigate("HomeScreen")} />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  root: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
