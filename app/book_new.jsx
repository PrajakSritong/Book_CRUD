import React, { createContext, useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
}

export function useBook() {
  return useContext(BookContext);
}

export default function BookNew() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const router = useRouter();
  const { books, setBooks } = useBook();

  const handleAdd = () => {
    if (!title || !author) {
      Alert.alert("Please fill in both fields.");
      return;
    }
    const newBook = {
      id: (books.length + 1).toString(),
      title,
      author,
    };
    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>➕ Add New Book</Text>
      <TextInput
        style={styles.input}
        placeholder="Book Title"
        value={title}
        onChangeText={setTitle}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        value={author}
        onChangeText={setAuthor}
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>Add Book</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <Text style={styles.closeButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#f5f6fa" },
  header: { fontSize: 28, fontWeight: "bold", marginBottom: 24, textAlign: "center", color: "#6c47ff" },
  input: { borderWidth: 1, borderColor: "#d1d8e0", borderRadius: 8, padding: 10, marginBottom: 16, fontSize: 16, backgroundColor: "#f9f9f9", color: "#333" },
  addButton: { backgroundColor: "#6c47ff", paddingVertical: 14, borderRadius: 8, alignItems: "center", marginBottom: 12 },
  addButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  closeButton: { backgroundColor: "#dcdde1", padding: 12, borderRadius: 8, alignItems: "center" },
  closeButtonText: { color: "#333", fontSize: 16, fontWeight: "bold" },
});