import { Button, Text, View } from 'react-native';

export default function DetailsScreen({ navigation, route }) {
  const { recipe } = route.params;

  return (
    <View>
      <Text>{recipe.name}</Text>
      <Text>{recipe.description}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
