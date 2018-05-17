import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { images } from '../../config';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
      likes: 127
    };
  }

  onToggleLiked() {
    const { liked } = this.state;

    return this.setState({ liked: !liked });
  }

  render() {
    const { liked = false, likes = 0 } = this.state;
    const heartColor = liked ? 'rgb(252, 61, 57)' : null;

    return (
      <View>
        <View style={styles.user}>
          <View style={styles.profilePicContainer}>
            <Image
              style={styles.profilePic}
              source={{
                uri:
                  'https://avatars3.githubusercontent.com/u/5264279?s=460&v=4'
              }}
            />
            <Text style={{ marginLeft: 10 }}>Alex</Text>
          </View>
          <View style={styles.menuContainer}>
            <Text style={{ fontSize: 24 }}>...</Text>
          </View>
        </View>
        <Image
          style={styles.photo}
          source={{ uri: 'https://i.imgur.com/z2WsIvI.jpg' }}
        />
        <View style={styles.icons}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => this.onToggleLiked()}
          >
            <Image
              style={[
                styles.icon,
                { height: 40, width: 40, tintColor: heartColor }
              ]}
              source={images.heart}
            />
          </TouchableOpacity>
          <Image
            style={[styles.icon, { height: 35, width: 35 }]}
            source={images.chat}
          />
        </View>
        <View style={styles.icons}>
          <Image
            style={[styles.icon, { height: 30, width: 30 }]}
            source={images.heart}
          />
          <Text>{liked ? likes + 1 : likes} likes</Text>
        </View>
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
  },
  user: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgb(255, 255, 255)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  photo: {
    height: 400,
    width: '100%'
  },
  profilePicContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icons: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgb(255, 255, 255)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgb(233, 233, 233)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 5
  }
});

export default Post;
