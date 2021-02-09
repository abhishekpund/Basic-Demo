import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


const TextScreen = () => {
    const [ password, setPassword ] = useState('');
    return (
            <View>
                <Text>Enter Password:</Text>
                <TextInput 
                    style={styles.text}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={password}
                    onChangeText={(newValue) => setPassword(newValue)}
                />
                { password.length < 4 ? <Text>Password at least 4 characters</Text> : null }
            
                
            </View>
    );
};

const styles= StyleSheet.create({
    text: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 15
    }
});


export default TextScreen;