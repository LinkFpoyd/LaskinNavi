import { StyleSheet, Text, FlatList, View } from'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Historia({ route, navigation }) {

  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Text>Historia:</Text>
      <FlatList 
        data={data}
        renderItem={({ item }) => <Text>{item.title}</Text>}   
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});