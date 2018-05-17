import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PostFeed } from '../container';

class MainFeed extends Component {
  render() {
    return (
      <View>
        <View style={styles.nav}>
          <Text>Instagram</Text>
        </View>

        <PostFeed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    width: '100%',
    height: 60,
    backgroundColor: 'rgb(250, 250, 250)',
    borderBottomColor: 'rgb(233, 233, 233)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MainFeed;
