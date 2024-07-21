import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen
        options={{ title: "Details", headerTitleAlign: "center" }}
      />
      <Text>Second Screen : {id}</Text>
    </View>
  );
};

export default ProductDetailScreen;
