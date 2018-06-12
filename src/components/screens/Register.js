import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { signup } from '../../api';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        email: '',
        username: '',
        password: ''
      }
    };
  }

  register() {
    const { navigation } = this.props;
    const { email, username, password } = this.state.credentials;

    return signup({ email, username, password })
      .then(user => {
        console.log('Logged in!', user);

        return navigation.navigate('main');
      })
      .catch(err => {
        console.log('Error logging in!', err);

        return alert(`Invalid credentials! ${JSON.stringify(err)}`);
      });
  }

  handleInputChange(field, text) {
    const { credentials } = this.state;
    const updates = { ...credentials, [field]: text };

    return this.setState({ credentials: updates });
  }

  render() {
    return (
      <View style={styles.register}>
        <Text style={{ marginBottom: 10 }}>Register!</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={this.handleInputChange.bind(this, 'email')}
        />
        <TextInput
          placeholder="Username"
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={this.handleInputChange.bind(this, 'username')}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          autoCorrect={false}
          onChangeText={this.handleInputChange.bind(this, 'password')}
        />
        <Button title="Sign Up" onPress={() => this.register()} />
      </View>
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
  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    width: '100%',
    padding: 10,
    marginBottom: 10
  }
});

export default Register;
