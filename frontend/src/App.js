import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation/Navigation";

// export default function App() {
//   return (
//    <View style={styles.root}>
//      <Text>Hello Contributors!
//      </Text>
//    </View>
//   );
// }

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  root: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
});
