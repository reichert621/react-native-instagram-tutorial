import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Profile extends Component {
  inspect() {
    alert('Profile!');
  }

  render() {
    return (
      <TouchableOpacity style={styles.profile} onPress={() => this.inspect()}>
        <Text>Profile!</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Profile;
