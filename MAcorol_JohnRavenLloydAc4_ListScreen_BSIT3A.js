import { Button, View } from 'react-native';

const recipes = [
  { name: 'Pasta', description: 'Easy garlic pasta' },
  { name: 'Smoothie', description: 'Mango smoothie' },
];

export default function ListScreen({ navigation }) {
  return (
    <View>
      {recipes.map((recipe) => (
        <Button
          key={recipe.name}
          title={recipe.name}
          onPress={() => navigation.navigate('Details', { recipe })}
        />
      ))}
    </View>
  );
}
