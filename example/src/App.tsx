import { Text, View, StyleSheet, findNodeHandle } from 'react-native';
import { registerView } from 'react-native-ui-manager-ios';

export default function App() {
  return (
    <View
      ref={(ref) => {
        const viewTag = findNodeHandle(ref);
        if (viewTag) {
          registerView(viewTag);
        }
      }}
      style={styles.container}
    >
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
