import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { login } from '../../api';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  }

  login() {
    const { navigation } = this.props;
    const { username, password } = this.state.credentials;

    return login({ username, password })
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
      <View style={styles.login}>
        <Text style={{ marginBottom: 10 }}>Log in!</Text>
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
        <Button title="Log in" onPress={this.login.bind(this)} />
        <Button
          title="Need an account? Register here!"
          onPress={() => this.props.navigation.navigate('register')}
        />
      </View>
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
  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    width: '100%',
    padding: 10,
    marginBottom: 10
  }
});

export default Login;
