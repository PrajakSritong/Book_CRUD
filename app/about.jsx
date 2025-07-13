import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useTheme } from "./context/ThemeContext";
import { useRouter } from 'expo-router'; // <-- Add this import
export default function About() {
  const router = useRouter(); // <-- Initialize router
  const { colors } = useTheme();
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={[styles.container,]}>
        <Text style={[styles.title, { color: colors.text }]}>IN405109 - Hybrid Mobile Application Programming</Text>
        <View style={[styles.card, { backgroundColor: colors.cardBackground }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>ชื่อวิชา:</Text>
          <Text style={[styles.text, { color: colors.text }]}>การเขียนโปรแกรมบนอุปกรณ์เคลื่อนที่แบบไฮบริด</Text>

          <Text style={[styles.sectionTitle, { color: colors.text }]}>ระดับ:</Text>
          <Text style={[styles.text, { color: colors.text }]}>ปริญญาตรี ภาคปกติ</Text>

          <Text style={[styles.sectionTitle, { color: colors.text }]}>วันเวลาเรียน:</Text>
          <Text style={[styles.text, { color: colors.text }]}>อังคาร 08:30-10:30 (บรรยาย) และ 10:30-12:30 (ปฏิบัติ)</Text>

          <Text style={[styles.sectionTitle, { color: colors.text }]}>ห้องเรียน:</Text>
          <Text style={[styles.text, { color: colors.text }]}>NK2316 อาคาร NK 2</Text>

          <Text style={[styles.sectionTitle, { color: colors.text }]}>อาจารย์ผู้สอน:</Text>
          <Text style={[styles.text, { color: colors.text }]}>อ.ธนภัทร วงษ์คำจันทร์</Text>

          <Text style={[styles.sectionTitle, { color: colors.text }]}>จำนวนนิสิต:</Text>
          <Text style={[styles.text, { color: colors.text }]}>เปิด 50 | ลงทะเบียนแล้ว 37 | เหลือ 13 ที่นั่ง</Text>

          <Text style={[styles.sectionTitle, { color: colors.text }]}>สำรองสำหรับ:</Text>
          <Text style={[styles.text, { color: colors.text }]}>
            - วิชาเอก วิทยาการข้อมูลและปัญญาประดิษฐ์ ปี 4 ขึ้นไป{'\n'}
            - วิชาเอก วิทยาการคอมพิวเตอร์และสารสนเทศ ปี 4 ขึ้นไป
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  container: {
    padding: 20,
    alignItems: 'stretch',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  card: {
    backgroundColor: '#f7f7f7ff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#34495e',
  },
  text: {
    fontSize: 15,
    marginTop: 5,
    color: '#555',
    lineHeight: 22,
  },
});
