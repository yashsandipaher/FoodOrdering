import { View, FlatList } from "react-native";
import ProductListItem from "@/components/ProductListItem";
import products from "@/assets/data/products";
import { Stack } from "expo-router";

export default function MenuScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Menu", headerTitleAlign: "center" }} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, margin: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}
