import { Text, View, StyleSheet, findNodeHandle } from 'react-native';
import { registerView } from 'react-native-ui-manager-ios';

export default function App() {
  const handleRef = (ref: any) => {
    if (ref) {
      // Only when ref is not null!
      const viewTag = findNodeHandle(ref);
      console.log(viewTag);
      if (viewTag) {
        registerView(viewTag);
      }
    }
  };

  return (
    <View ref={handleRef} style={styles.container}>
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
