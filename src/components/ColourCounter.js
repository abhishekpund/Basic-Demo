import React from 'react';
import { View, Text, Button ,StyleSheet } from 'react-native';


const ColourCounter = ({ colour, onIncrease, onDecrease }) => {
    return (
            <View>
                <Text style={{ fontSize: 18 }}>{colour}</Text>
                <Button onPress={onIncrease} title={`Increase ${colour}`}/>
                <Button onPress={onDecrease} title={`Decrease ${colour}`}/>
            </View>
    );
};

const styles= StyleSheet.create({});


export default ColourCounter;