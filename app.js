import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
          placeholder='Enter your input'
          keyboardType='phone-pad'
          />
        </View>
        <TouchableOpacity style={styles.touchContainer}>
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "row", // default =>colomn
    backgroundColor: '#e0e0e0',
    //alignItems: 'center', // flex-start, flex-end
    //justifyContent: 'space-around', //'space-between' 'space-arround
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  touchContainer: {
    backgroundColor: 'skyblue',
    alignItems: 'center',
    margin: 5,
    padding: 20,
  }
});
