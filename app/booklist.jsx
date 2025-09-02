import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useBook } from "./BookContext";

export default function BookList() {
  const { books, setBooks } = useBook();
  const [selectedBook, setSelectedBook] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  // เลือกหนังสือเพื่อแก้ไข
  const selectBook = (book) => {
    setSelectedBook(book);
    setEditTitle(book.title);
    setEditAuthor(book.author);
  };

  // แก้ไขข้อมูลหนังสือ
  const updateBook = () => {
    setBooks(books.map(b => b.id === selectedBook.id ? { ...b, title: editTitle, author: editAuthor } : b));
    setSelectedBook(null);
  };

  // ลบข้อมูลหนังสือ
  const deleteBook = (id) => {
    setBooks(books.filter(b => b.id !== id));
    setSelectedBook(null);
  };

  // เรียงและกรองหนังสือ
  const sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
  const filteredBooks = sortedBooks.filter(book =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📚 Book List</Text>
      <TouchableOpacity style={styles.addNewPageButton} onPress={() => router.push("/book_new")}>
        <Text style={styles.addNewPageButtonText}>➕ Go to Add New Book</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="🔍 Search by title"
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity
          style={{
            marginLeft: 8,
            backgroundColor: "#dcdde1",
            paddingVertical: 10,
            paddingHorizontal: 16,
            borderRadius: 8,
          }}
          onPress={() => setSearchText("")}
        >
          <Text style={{ color: "#333", fontWeight: "bold" }}>Clear</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredBooks}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No books found.</Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => selectBook(item)}>
            <View style={styles.bookItem}>
              <View>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookAuthor}>by {item.author}</Text>
              </View>
              <Text style={styles.bookId}>#{item.id}</Text>
            </View>
          </TouchableOpacity>
        )}
        style={styles.list}
      />
      {selectedBook && (
        <View style={styles.detailContainer}>
          <Text style={styles.detailHeader}>Book Detail</Text>
          <Text style={styles.detailId}>ID: {selectedBook.id}</Text>
          <TextInput
            style={styles.input}
            value={editTitle}
            onChangeText={setEditTitle}
            placeholder="Edit Title"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            value={editAuthor}
            onChangeText={setEditAuthor}
            placeholder="Edit Author"
            placeholderTextColor="#aaa"
          />
          <View style={styles.detailButtonRow}>
            <TouchableOpacity style={styles.updateButton} onPress={updateBook}>
              <Text style={styles.updateButtonText}>💾 Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteBook(selectedBook.id)}>
              <Text style={styles.deleteButtonText}>🗑️ Delete</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedBook(null)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f5f6fa" },
  header: { fontSize: 32, fontWeight: "bold", marginBottom: 16, textAlign: "center", color: "#6c47ff" },
  inputContainer: { 
    marginBottom: 24, 
    backgroundColor: "#fff", 
    padding: 16, 
    borderRadius: 12, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
    elevation: 2,
  },
  input: { 
    borderWidth: 1, 
    borderColor: "#d1d8e0", 
    borderRadius: 8, 
    padding: 10, 
    marginBottom: 10, 
    fontSize: 16, 
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  addButton: {
    backgroundColor: "#6c47ff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  list: {
    marginBottom: 16,
  },
  emptyText: {
    textAlign: "center",
    color: "#aaa",
    fontSize: 16,
    marginTop: 24,
  },
  bookItem: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    padding: 16, 
    marginBottom: 8, 
    backgroundColor: "#fff", 
    borderRadius: 10, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.07, 
    shadowRadius: 2, 
    elevation: 1,
  },
  bookTitle: { fontSize: 18, fontWeight: "bold", color: "#6c47ff" },
  bookAuthor: { fontSize: 16, color: "#555" },
  bookId: { fontSize: 14, color: "#aaa", fontWeight: "bold" },
  detailContainer: { 
    marginTop: 24, 
    padding: 20, 
    backgroundColor: "#fff", 
    borderRadius: 14, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.12, 
    shadowRadius: 6, 
    elevation: 3,
  },
  detailHeader: { fontSize: 24, fontWeight: "bold", marginBottom: 8, color: "#6c47ff" },
  detailId: { fontSize: 16, color: "#aaa", marginBottom: 12 },
  detailButtonRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  updateButton: { backgroundColor: "#4cd137", padding: 10, borderRadius: 8, flex: 1, marginRight: 8, alignItems: "center" },
  updateButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  deleteButton: { backgroundColor: "#e84118", padding: 10, borderRadius: 8, flex: 1, marginLeft: 8, alignItems: "center" },
  deleteButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  closeButton: { backgroundColor: "#dcdde1", padding: 10, borderRadius: 8, alignItems: "center" },
  closeButtonText: { color: "#333", fontSize: 16, fontWeight: "bold" },
  addNewPageButton: {
    backgroundColor: "#6c47ff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  addNewPageButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});