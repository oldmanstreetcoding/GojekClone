/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavBarIcon = ({icon, active}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Icon
        name={icon}
        size={32}
        style={{color: active ? '#43AB4A' : '#545454'}}
      />
    </View>
  );
};

export default NavBarIcon;
