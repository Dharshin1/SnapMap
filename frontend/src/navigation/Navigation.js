import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "@clerk/clerk-expo";

// Import screens
import SplashScreen from "../screens/SplashScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import CameraScreen from "../screens/CameraScreen";
import MapScreen from "../screens/MapScreen";
import UploadConfirmationScreen from "../screens/UploadConfirmationScreen";
import BubbleDetailsScreen from "../screens/BubbleDetailsScreen";
import EventGalleryScreen from "../screens/EventGalleryScreen";
import MyUploadsScreen from "../screens/MyUploadsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ErrorScreen from "../screens/ErrorScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isSignedIn ? (
          // Auth screens
          <>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          </>
        ) : (
          // App screens (authenticated)
          <>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="CameraScreen" component={CameraScreen} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="UploadConfirmationScreen" component={UploadConfirmationScreen} />
            <Stack.Screen name="BubbleDetailsScreen" component={BubbleDetailsScreen} />
            <Stack.Screen name="EventGalleryScreen" component={EventGalleryScreen} />
            <Stack.Screen name="MyUploadsScreen" component={MyUploadsScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
            <Stack.Screen name="ErrorScreen" component={ErrorScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;