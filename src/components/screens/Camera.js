import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Camera extends Component {
  inspect() {
    alert('Camera!');
  }

  render() {
    return (
      <TouchableOpacity style={styles.camera} onPress={() => this.inspect()}>
        <Text>Camera!</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  camera: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Camera;
