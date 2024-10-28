import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase.config'; 

export default function AddStudentDetails() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const addStudent = async (studentData) => {
    try {
      const docRef = await addDoc(collection(db, 'students'), studentData);
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const handleAddStudent = async () => {
    if (!name || !age) {
      setMessage('Please fill in both fields.');
      return;
    }

    try {
      await addStudent({ name, age: parseInt(age) });
      setMessage('Student added successfully!');
      setName('');
      setAge('');
    } catch (error) {
      setMessage('Failed to add student. Please try again.');
      console.error('Error adding student: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Student Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Student Age:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleAddStudent}>
        <Text style={styles.buttonText}>Add Student</Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: '#f0f4f8', 
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    input: {
      height: 50,
      borderColor: '#007AFF', 
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 15,
      backgroundColor: '#fff', 
      marginBottom: 20,
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3, 
    },
    buttonContainer: {
      backgroundColor: '#007AFF', 
      borderRadius: 5,
      paddingVertical: 15,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5, 
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    message: {
      marginTop: 20,
      fontSize: 16,
      color: 'green',
      textAlign: 'center',
    },
  });
