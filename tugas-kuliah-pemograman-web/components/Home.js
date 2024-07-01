import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const backgroundColor = "#121212";
const primaryColor = "#1b5e20";
const textColor = "#ffffff";
const hoverColor = "#2e7d32";

const Home = ({ navigation }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Selamat datang di aplikasi pengelola kontak sahabat!</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="About"
          onPress={() => navigation.navigate('About')}
          color={primaryColor}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Contact"
          onPress={() => navigation.navigate('kontak')}
          color={primaryColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default Home;
