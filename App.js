import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Header } from './src/components';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Muh Nur Sandi"
        subtitle="105841106721"
      />

      <View style={styles.content}>

        <Text style={styles.label}>flexDirection: 'row' & justifyContent: 'space-between'</Text>
        <View style={styles.rowLayout}>
          <View style={[styles.box, { backgroundColor: '#e74c3c' }]}><Text style={styles.boxText}>1</Text></View>
          <View style={[styles.box, { backgroundColor: '#2ecc71' }]}><Text style={styles.boxText}>2</Text></View>
          <View style={[styles.box, { backgroundColor: '#f1c40f' }]}><Text style={styles.boxText}>3</Text></View>
        </View>

        <Text style={styles.label}>flexDirection: 'column' & alignItems: 'center'</Text>
        <View style={styles.columnLayout}>
          <View style={[styles.box, { backgroundColor: '#9b59b6' }]}><Text style={styles.boxText}>A</Text></View>
          <View style={[styles.box, { backgroundColor: '#34495e' }]}><Text style={styles.boxText}>B</Text></View>
        </View>

        <Text style={styles.label}>Flex Proportions (1:2:1)</Text>
        <View style={styles.flexLayout}>
          <View style={[styles.flexBox, { flex: 1, backgroundColor: '#1abc9c' }]} />
          <View style={[styles.flexBox, { flex: 2, backgroundColor: '#3498db' }]} />
          <View style={[styles.flexBox, { flex: 1, backgroundColor: '#1abc9c' }]} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7f8c8d',
    marginBottom: 10,
    marginTop: 10,
  },
  rowLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  columnLayout: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    gap: 10,
    marginBottom: 20,
  },
  flexLayout: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  flexBox: {
    borderRadius: 5,
  }
});
