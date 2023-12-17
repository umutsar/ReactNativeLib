import { StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';


export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://umutsar.net' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
