import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Permissions from 'expo-permissions';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import TrackingScreen from './src/screens/TrackingScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [isTrackingActive, setIsTrackingActive] = useState(false);

  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setCameraPermission(status === 'granted');
      if (status !== 'granted') {
        Alert.alert(
          'Camera Permission Required',
          'This app needs camera access to track objects. Please enable it in settings.',
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      console.error('Permission request error:', error);
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarStyle: {
            backgroundColor: '#F2F2F7',
            borderTopColor: '#E5E5EA',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Object Tracking',
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Tracking"
          component={TrackingScreen}
          options={{
            title: 'Active Tracking',
            tabBarLabel: 'Track',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Settings',
            tabBarLabel: 'Settings',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
