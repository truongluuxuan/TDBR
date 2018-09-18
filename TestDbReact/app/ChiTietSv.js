/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ChiTietSv extends Component {
  static navigationOptions = {
    title: 'First Screen',
    header: null ,
  };

  constructor(props) {
    super(props)

    this.state = {
      prevScreenTitle: this.props.navigation.state.params.prevScreenTitle,
      people: this.props.navigation.state.params.people,
    };
  }

  render() {
    return (
      <View style={styles.container}>
    
        <Text>Tên tao là: {this.state.people.student_name} Tao học lớp {this.state.people.student_class} Môn tao học {this.state.people.student_subject}</Text>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
