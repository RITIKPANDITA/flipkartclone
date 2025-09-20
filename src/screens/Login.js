import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions, ToastAndroid } from 'react-native';

const { width } = Dimensions.get('window');

export default function LoginScreen({navigation}) {
  const [emailOrPhone, setEmailOrPhone] = useState('');

  const handleLogin = () => {
    if(emailOrPhone.length !== 10){
        ToastAndroid.show('Please Enter a Valid 10 Digit Mobile Number', ToastAndroid.SHORT);
        return
    }else{
        navigation.navigate('OtpScreen',{emailOrPhone})
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftPane}>
        <Text style={styles.heading}>Login</Text>
        <Text style={styles.subtext}>
          Get access to your Orders, Wishlist and Recommendations
        </Text>
        <Image
          source={require('../assets/Images/flipkart-icon.png')} 
          style={styles.image}
        />
      </View>

      <View style={styles.rightPane}>
        <TextInput
          style={styles.input}
          placeholder="Enter Mobile number"
          value={emailOrPhone}
          onChangeText={setEmailOrPhone}
        />
        <Text style={styles.termsText}>
          By continuing, you agree to Flipkart's{' '}
          <Text style={styles.link}>Terms of Use</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text>.
        </Text>
        <TouchableOpacity 
        style={styles.otpButton}
        onPress={handleLogin}
        >
          <Text style={styles.otpButtonText}>Request OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.createAccount}>
            New to Flipkart? <Text style={styles.link}>Create an account</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: width > 600 ? 'row' : 'column',
    flex: 1,
    backgroundColor: '#fff',
  },
  leftPane: {
    flex: 1,
    backgroundColor: '#2874f0',
    padding: 20,
    justifyContent: 'center',
  },
  rightPane: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    bottom:80
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    alignSelf: 'center',
  },
  subtext: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 30,
  },
  image: {
    width: '90%',
    height: 150,
    resizeMode: 'contain',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    marginBottom: 20,
    paddingVertical: 10,
  },
  termsText: {
    fontSize: 12,
    color: '#555',
    marginBottom: 20,
  },
  link: {
    color: '#2874f0',
    fontWeight: 'bold',
  },
  otpButton: {
    backgroundColor: '#fb641b',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 20,
  },
  otpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  createAccount: {
    fontSize: 14,
    textAlign: 'center',
  },
});
