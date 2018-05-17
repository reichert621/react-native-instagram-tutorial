import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Register extends Component {
  register() {
    const { navigation } = this.props;

    return navigation.navigate('main');
  }

  render() {
    return (
      <TouchableOpacity style={styles.register} onPress={() => this.register()}>
        <Text>Register!</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  register: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Register;
