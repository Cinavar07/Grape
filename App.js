import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform } from 'react-native';

export default function App() {
  const [msg, setMsg] = useState('');
  const [chat, setChat] = useState([{ id: '1', text: 'Sisteme hoş geldin, hazırsan dal.' }]);

  const send = () => {
    if (msg.trim().length > 0) {
      setChat([...chat, { id: Date.now().toString(), text: msg }]);
      setMsg('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>MEKAN</Text>
      
      <FlatList
        data={chat}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bubble}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
      />

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={msg}
            onChangeText={setMsg}
            placeholder="Mesajını yaz..."
            placeholderTextColor="#444"
          />
          <TouchableOpacity style={styles.sendBtn} onPress={send}>
            <Text style={styles.sendBtnText}>GÖNDER</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', paddingTop: 60 },
  header: { color: '#fff', fontSize: 32, fontWeight: '900', textAlign: 'center', marginBottom: 20, letterSpacing: 5 },
  bubble: { backgroundColor: '#111', padding: 15, marginHorizontal: 20, marginVertical: 5, borderRadius: 0, borderWidth: 1, borderColor: '#333' },
  text: { color: '#fff', fontSize: 16 },
  inputArea: { flexDirection: 'row', padding: 20, borderTopWidth: 1, borderColor: '#333' },
  input: { flex: 1, color: '#fff', padding: 10, borderBottomWidth: 1, borderColor: '#fff' },
  sendBtn: { marginLeft: 10, padding: 10, backgroundColor: '#fff' },
  sendBtnText: { color: '#000', fontWeight: 'bold' }
});
