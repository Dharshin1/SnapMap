import React from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <Text style={styles.text}>Home Screen</Text>

      <Button title="Take Photo" onPress={() => navigation.navigate("CameraScreen")} />
      <Button title="Explore Map" onPress={() => navigation.navigate("MapScreen")} />
      <Button title="My Uploads" onPress={() => navigation.navigate("MyUploadsScreen")} />
      <Button title="Event Gallery" onPress={() => navigation.navigate("EventGalleryScreen")} />
      <Button title="Profile" onPress={() => navigation.navigate("ProfileScreen")} />
      <Button title="Settings" onPress={() => navigation.navigate("SettingsScreen")} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
 root: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
  },
});
