import { Button, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Simple Recipe App</Text>
      <Button title="See recipes" onPress={() => navigation.navigate('List')} />
    </View>
  );
}
