import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      <View style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>LM</Text>
        </View>

        <Text style={styles.name}>Lloyd Macorol</Text>
        <Text style={styles.email}>lloyd@example.com</Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </Pressable>

        <Pressable style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    padding: 24,
  },

  title: {
    marginTop: 30,
    marginBottom: 25,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 25,
    alignItems: 'center',
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
  },

  name: {
    marginTop: 15,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#222',
  },

  email: {
    marginTop: 5,
    marginBottom: 25,
    fontSize: 14,
    color: '#777',
  },

  button: {
    width: '100%',
    backgroundColor: '#4F46E5',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  logoutButton: {
    marginTop: 12,
    padding: 12,
  },

  logoutText: {
    color: '#E5484D',
    fontSize: 15,
    fontWeight: 'bold',
  },
});