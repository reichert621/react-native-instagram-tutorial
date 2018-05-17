import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  SwitchNavigator,
  TabNavigator,
  StackNavigator
} from 'react-navigation';
import {
  MainFeed,
  Login,
  Register,
  Camera,
  Profile
} from './components/screens';

const Tabs = TabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile
});

const Intro = StackNavigator({
  login: Login,
  register: Register
});

const RootStack = SwitchNavigator({
  intro: Intro,
  main: Tabs
});

class Instagram extends Component {
  render() {
    return <RootStack />;
  }
}

export default Instagram;
