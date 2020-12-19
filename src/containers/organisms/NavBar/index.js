/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';

export default class NavBar extends Component {
  render() {
    return (
      <View
        style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
        <NavBarIcon icon="home" active />
        <NavBarIcon icon="comment" />
        <NavBarIcon icon="cog" />
      </View>
    );
  }
}
