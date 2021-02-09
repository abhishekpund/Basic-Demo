import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imageSource, title }) => {
    return (
        <View>
            <Image style={{ marginBottom: 15 }} source={imageSource}/>
            <Text style={{ marginBottom: 15 }}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;