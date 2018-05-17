import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Post } from '../presentation';

class PostFeed extends Component {
  render() {
    return (
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item, index) => item}
        renderItem={({ item }) => <Post key={item} />}
      />
    );
  }
}

export default PostFeed;
