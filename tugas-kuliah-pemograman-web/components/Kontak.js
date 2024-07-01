import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ContactList() {

  const contacts = [
    {
      id: 1,
      name: 'Indra Kusuma Wikarta',
      phone: '+62 823-4765-8184',
      imageUri: require('../assets/1.jpg')
    },
    {
      id: 2,
      name: 'Syam Zaenal',
      phone: '+62 895-3359-82015',
      imageUri: require('../assets/2.jpg')
    },
    {
      id: 3,
      name: 'Khalid',
      phone: '+62 855-2090-3892',
      imageUri: require('../assets/3.jpg')
    },
    {
      id: 4,
      name: 'Lutfi Triatmojo',
      phone: '+62 821-2099-1994',
      imageUri: require('../assets/4.jpg')
    },
  ];

  return (
    <View style={styles.listContainer}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          phone={contact.phone}
          imageUri={contact.imageUri}
        />
      ))}
    </View>
  );
}

const Contact = (props) => (
  <View style={styles.contactContainer}>
    <Image
      style={styles.img}
      source={props.imageUri}
    />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.phone}>{props.phone}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  phone: {
    fontSize: 14,
    color: '#3498db',
  },
});

