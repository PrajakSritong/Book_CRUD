import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function BiometricAuth({ onSuccess }) {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(hasHardware);
      if (hasHardware) {
        const enrolled = await LocalAuthentication.isEnrolledAsync();
        setIsEnrolled(enrolled);
      }
    })();
  }, []);

  const handleBiometricAuth = async () => {
    if (!isBiometricSupported || !isEnrolled) {
      Alert.alert(
        'การยืนยันตัวตน',
        'อุปกรณ์ไม่รองรับ Biometrics หรือยังไม่ได้ลงทะเบียนลายนิ้วมือ/ใบหน้า'
      );
      return;
    }
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'โปรดยืนยันตัวตนเพื่อเข้าสู่ระบบ',
      });
      if (result.success) {
        setIsAuthenticated(true);
        Alert.alert('สำเร็จ', 'ยืนยันตัวตนสำเร็จ!');
        if (onSuccess) onSuccess();
      } else {
        setIsAuthenticated(false);
        Alert.alert('ล้มเหลว', `การยืนยันตัวตนล้มเหลว: ${result.error}`);
      }
    } catch (error) {
      console.error('Biometric authentication error:', error);
      Alert.alert('ข้อผิดพลาด', 'เกิดข้อผิดพลาดในการยืนยันตัวตน');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Biometric Authentication</Text>
      <Text>รองรับ Biometric Hardware: {isBiometricSupported ? 'ใช่' : 'ไม่'}</Text>
      <Text>มีการลงทะเบียน Biometric: {isEnrolled ? 'ใช่' : 'ไม่'}</Text>
      <View style={styles.spacer} />
      <Button
        title="ยืนยันตัวตนด้วย Biometrics"
        onPress={handleBiometricAuth}
        disabled={!isBiometricSupported || !isEnrolled}
      />
      <View style={styles.spacer} />
      {isAuthenticated ? (
        <Text style={styles.successText}>🔒 เข้าสู่ระบบสำเร็จแล้ว</Text>
      ) : (
        <Text style={styles.failText}>🔓 ยังไม่ได้เข้าสู่ระบบ</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', margin: 10 },
  heading: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  spacer: { height: 10 },
  successText: { marginTop: 10, color: 'green', fontWeight: 'bold' },
  failText: { marginTop: 10, color: 'red' },
});