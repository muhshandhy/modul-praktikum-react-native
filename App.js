import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Header, ProfileCard } from './src/components';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header
          title="muhshandhy"
          subtitle="105841106721"
        />
      </View>
      <View style={styles.titleSection}>
        <Text style={styles.headerTitle}>Profil Mahasiswa</Text>
      </View>

      <ProfileCard
        name="Muh Nur Sandi"
        nim="105841106721"
        jurusan="Teknik Informatika"
        imageUri="https://simak.unismuh.ac.id/upload/mahasiswa/105841106721.jpg"
        onPress={() => alert('Profil Muh Nur Sandi ditekan!')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    // Styling for header container if needed
  },
  titleSection: {
    backgroundColor: '#3498db',
    padding: 20,
    marginTop: -10, // Adjust to overlap/connect with Header if needed
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
