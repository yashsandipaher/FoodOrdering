import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import products from "@/assets/data/products";
import ProductListItem, {
  defaultPizzaImage,
} from "@/components/ProductListItem";

import { useState } from "react";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import Button from "@/components/Button";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();

  const [selectedSize, setSelctedSize] = useState("M");

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {};

  if (!product) {
    return;
    <Text>Page Not Found</Text>;
  }

  return (
    <View style={style.container}>
      <Stack.Screen
        options={{ title: product?.name, headerTitleAlign: "center" }}
      />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={[style.image]}
      />

      <Text style={style.sizeTxt}>Select Size</Text>
      <View style={style.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelctedSize(size);
            }}
            style={[
              style.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
            key={size}
          >
            <Text
              style={[
                style.sizeText,
                { color: selectedSize === size ? "black" : "grey" },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={style.price}> ${product.price}</Text>
      <Button onPress={addToCart} text="Add to cart" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "auto",
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
  sizeTxt: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default ProductDetailScreen;
