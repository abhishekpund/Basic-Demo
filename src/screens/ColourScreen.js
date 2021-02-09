import React, { useState } from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';


const ColourScreen = () => {
    const [ colours, setColours ] = useState([]);

    return (
            <View>
                <Button 
                        title='Add a colour' 
                        onPress={() => {
                            setColours([ ...colours, randomRgb()]);
                        }}
                />
                
                <FlatList
                    keyExtractor={(item) => item}
                    data={colours}
                    renderItem={({ item }) => {
                        return <View style={{ height: 150, width: 150, backgroundColor: item }}/>
                    }}
                />
            </View>
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles= StyleSheet.create({});


export default ColourScreen;
