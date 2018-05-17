import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Login extends Component {
  login() {
    const { navigation } = this.props;

    return navigation.navigate('register');
  }

  render() {
    return (
      <TouchableOpacity style={styles.login} onPress={() => this.login()}>
        <Text>Login!</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Login;
