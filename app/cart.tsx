import { View, Text, FlatList } from "react-native";
import { useCart } from "@/provider/CartProvider";
import products from "@/assets/data/products";
import CartListItem from "@/components/CartListItems";
const CartScreen = () => {
  const { items } = useCart();
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />
    </View>
  );
};

export default CartScreen;
