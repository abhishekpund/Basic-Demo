import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    // state === { count: number }
    // action === { type: 'increase_count' || 'decrease_count' , payload: 1 || -1 }
    switch (action.type) {
        case 'increase_count':
            return { ...state, count: state.count + action.payload };
        case 'decrease_count':
            return { ...state, count: state.count + action.payload };
        default:
            return state;
    }

};
const CounterWithReducer = () => {

    const [ state, dispatch ] = useReducer(reducer, { count: 0 });
    const { count } = state;

    return (
            <View>
                <Button onPress={() => dispatch({ type: 'increase_count', payload: 1 })} title='Increase'/>
                <Button onPress={() => dispatch({ type: 'decrease_count', payload: -1 * 1 })} title='Decrease'/>
                <Text style={{ alignSelf: 'center', fontSize: 20}}>Current Count : { count }</Text>
            </View>
    );
};

const styles = StyleSheet.create({});


export default CounterWithReducer;