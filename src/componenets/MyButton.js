import React from "react"
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const MyButton = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => alert('Hello')}>
            <Text style={styles.text}>
                {props.buttonTitle}
            </Text>
        </TouchableOpacity>
    )
}

export default MyButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ec407a',
        padding:10,
        margin:10,
        borderRadius:50,
        alignItems:"center",
    },
    text: {
        color: "#ffffff",
        fontWeight: 'bold',
    }
})