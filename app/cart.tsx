import { View, Text, FlatList } from "react-native";
import { useCart } from "@/provider/CartProvider";
import products from "@/assets/data/products";
import CartListItem from "@/components/CartListItems";
import Button from "@/components/Button";
const CartScreen = () => {
  const { items, total } = useCart();
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
      <Text style={{ fontSize: 19, margin: 10, fontWeight: "700" }}>
        Total : ${total}
      </Text>
      <Button text="Checkout" />
    </View>
  );
};

export default CartScreen;
