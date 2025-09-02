import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // <-- Add this import
import { useTheme } from "./context/ThemeContext";


export default function App() {
  const router = useRouter(); // <-- Initialize router
  const { colors } = useTheme();
  return (
    <SafeAreaView style={[styles.background, { backgroundColor: colors.background }]}>
      <View style={[styles.profileContainer, { backgroundColor: colors.cardBackground }]}>
        <Text style={[styles.profile, { color: colors.text }]}>Profile app</Text>
        <Image 
          source={require('../assets/01.jpg')} 
          style={styles.profileImage} 
        />
        <Text style={[styles.name, { color: colors.text }]}>Prajak Sritong</Text>
        <Text style={[styles.bio, { color: colors.text }]}>
          รหัสนักศึกษา: 653450294-0
        </Text>
        <Text style={[styles.bio, { color: colors.text }]}>
          หลักสูตร: วิทยาการคอมพิวเตอร์และสารสนเทศ 
        </Text>
        <Text style={[styles.bio, { color: colors.text }]}>
          วิชาเอก: วิทยาการคอมพิวเตอร์และสารสนเทศ 
        </Text>

        {/* โซเชียลมีเดียไอคอน */}
        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/prajak.sritong/')}>
            <FontAwesome name="facebook-square" size={36} color="#3b5998" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com/m.prxjak')}>
            <FontAwesome name="instagram" size={36} color="#C13584" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/PrajakSritong')}>
            <FontAwesome name="github" size={36} color="#000" style={styles.icon} />
          </TouchableOpacity>
        </View>

        {/* Add About Button */}
        <TouchableOpacity 
          style={[styles.aboutButton, { backgroundColor: colors.buttonBackground }]} 
          onPress={() => router.push('/about')}
        >
          <Text style={[styles.aboutButtonText, { color: colors.text }]}>Go to About</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.booklistButton, { backgroundColor: colors.buttonBackground }]} 
          onPress={() => router.push('/booklist')}
        >
          <Text style={[styles.booklistButtonText, { color: colors.text }]}>Go to Booklist</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#8000ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 20, // หรือใช้ margin ใน icon แทนถ้าใช้ React Native ก่อน 0.71
  },
  icon: {
    marginHorizontal: 10,
  },

  profileContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 10,
    shadowRadius: 10,
    elevation: 5,
    width: '80%',
    height: '55%',
    justifyContent: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  profile: {
    fontSize: 36,
    color: '#fff',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  aboutButton: {
    marginTop: 40,
    backgroundColor: '#e44c4cff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  aboutButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  booklistButton: {
    marginTop: 16,
    backgroundColor: '#f04343ff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  booklistButtonText: {
    color: '#ffffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});