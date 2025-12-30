import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const navigation = useNavigation();

  const onSignInPress = async () => {
    if (!isLoaded) return;
    
    try {
      // This will open Clerk's sign-in modal
      const result = await signIn.create({
        strategy: "oauth_google",
      });
      
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        navigation.replace("HomeScreen");
      }
    } catch (err) {
      console.error("Sign in error:", err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SnapMap</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>
      
      <TouchableOpacity style={styles.button} onPress={onSignInPress}>
        <Text style={styles.buttonText}>Sign In with Google</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.linkButton}
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#4285F4",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  linkButton: {
    marginTop: 10,
  },
  linkText: {
    color: "#4285F4",
    fontSize: 14,
  },
});

export default SignInScreen;
