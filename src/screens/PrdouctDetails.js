import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProductDetail({ route, navigation }) {
    const { product } = route.params;

    return (
        <View style={styles.header}>
            <Header title="Product Details" backgroundColor="#4A90E2" leftIcon={<Icon name="arrow-back" size={24} color="#000" />
            }
                onPress={() => navigation.goBack()}
            />
            <ScrollView style={styles.container}>
                <Image source={{ uri: product.image }} style={styles.image} />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.category}>Category: {product.category}</Text>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff'
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 16
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8
    },
    price: {
        fontSize: 18,
        color: 'green',
        marginBottom: 8
    },
    description: {
        fontSize: 16,
        marginBottom: 8
    },
    category: {
        fontSize: 14,
        color: '#666'
    },
    header: {
        flex: 1
    }
});
