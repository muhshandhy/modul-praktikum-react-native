import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from './src/components';

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        title="muhshandhy"
        subtitle="105841106721"
      />
      <View style={styles.content}>
        <Text style={styles.text}>Konten aplikasi di sini</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    color: '#7f8c8d',
  },
});
