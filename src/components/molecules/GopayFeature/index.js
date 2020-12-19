/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

// Membuat komponen dengan arrow function
const GoPayFeature = ({title, icon, onPress}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={onPress}>
        <Icon name={icon} size={32} style={{color: 'white'}} />
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 15,
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoPayFeature;
