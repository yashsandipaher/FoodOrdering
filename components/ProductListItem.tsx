import Colors from "@/constants/Colors";
import { StyleSheet, Text, View, Image } from "react-native";
import products from "@/assets/data/products";

function ProductListItem({ product }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}> {product.price} </Text>
    </View>
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  price: {
    color: Colors.light.tint,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
