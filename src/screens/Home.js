import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import ProductCard from '../components/productCard';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        Alert.alert('Error', err.message);
      });
  }, []);

  const handleIncrement = (id) =>
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

  const handleDecrement = (id) =>
    setQuantities((prev) => {
      const current = prev[id] || 0;
      if (current <= 1) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: current - 1 };
    });

  const handlePress = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <View style={styles.container}>
      <Header title="Products" backgroundColor="#4A90E2" />
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#4A90E2" style={{alignSelf:"center",margin:20}} />
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => (
            <ProductCard
              item={item}
              quantity={quantities[item.id] || 0}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onPress={handlePress}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
