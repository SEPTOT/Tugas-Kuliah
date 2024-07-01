import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const backgroundColor = "#121212";
const primaryColor = "#1b5e20";
const textColor = "#ffffff";

const About = ({ navigation }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.description, { color: textColor }]}>
        "Selamat datang di Aplikasi Pengelola Kontak Sahabat! Kami hadir untuk mempermudah Anda dalam mengelola dan mempertahankan hubungan dengan teman-teman terdekat. Dengan berbagai fitur canggih kami, Anda dapat dengan mudah menyimpan, mengatur, dan mengakses informasi kontak dengan efisien. Kami berkomitmen untuk memberikan pengalaman pengguna yang intuitif dan bermanfaat, sehingga setiap interaksi dan pertemuan dengan sahabat-sahabat Anda menjadi lebih berarti. Terima kasih telah memilih kami sebagai aplikasi pendukung jaringan sosial Anda. Mari kita bangun komunitas yang lebih terhubung dan lebih kuat bersama-sama!"
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Go back" onPress={() => navigation.navigate('Home')} color={primaryColor} />
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
  description: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default About;