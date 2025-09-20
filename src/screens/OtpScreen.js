import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions, Alert ,ToastAndroid} from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default function otpScreen({ route,navigation }) {
    const [otp, setOpt] = useState('');
    const {emailOrPhone} = route.params

    const handleVerifyOtp = () => {
        if(otp.length !== 6){
            ToastAndroid.show('Please Enter a Valid 6 Digit Otp', ToastAndroid.SHORT);
            return
        }else{
            Alert.alert('Success', 'Otp Verified Successfully');
            navigation.navigate('Home');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftPane}>
                 <Image
                source={require('../assets/Images/flipkart-icon.png')}
                style={styles.image}
            />
            </View>
            <Text style={{fontSize:20,padding:20,color:"#000",fontWeight:'bold'}}>Please enter the OTP sent to {emailOrPhone} </Text>
           
            <View style={styles.rightPane}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Otp'
                    value={otp}
                    onChangeText={setOpt}
                    keyboardType='numeric'
                    maxLength={6}
                />
                <Text style={styles.termsText}>
                    Resend Otp in <Text style={styles.link}>00:30 sec</Text>
                </Text>
                <TouchableOpacity
                    style={styles.otpButton}
                    onPress={handleVerifyOtp}
                >
                    <Text style={styles.otpButtonText}>Verify Otp</Text>
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
    rightPane: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        bottom: height > 600 ? 50 : 0,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    subtext: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 30,
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20,
        alignSelf: 'center',
        top: height > 600 ? 50 : 0,
    },
    input: {
        borderWidth: 1,
        borderColor: '#2874f0',
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
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
    leftPane: {
        flex: 1,
        backgroundColor: '#2874f0',
        padding: 20,
        justifyContent: 'center',
    },
});

