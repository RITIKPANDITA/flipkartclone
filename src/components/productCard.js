import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ProductCard({ item, quantity, onIncrement, onDecrement, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
      {/* Quantity buttons */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => onDecrement(item.id)} style={styles.btn}><Text>-</Text></TouchableOpacity>
        <Text>{quantity}</Text>
        <TouchableOpacity onPress={() => onIncrement(item.id)} style={styles.btn}><Text>+</Text></TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#f8f8f8',
    marginBottom: 12,
    padding: 10,
    borderRadius: 8,
  },
  image: { width: '100%', height: 100, resizeMode: 'contain' },
  title: { fontSize: 14, fontWeight: '600', marginVertical: 4 },
  price: { fontSize: 14, color: 'green' },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 6 },
  btn: { paddingHorizontal: 10, paddingVertical: 4, backgroundColor: '#ddd', borderRadius: 4 },
});
