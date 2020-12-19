/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const MainFeature = ({title, icon}) => {
  return (
    <View style={{width: '25%', alignItems: 'center'}}>
      <View
        style={{
          width: 58,
          height: 58,
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 18,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name={icon} size={30} style={{color: '#545454'}} />
      </View>
      <Text
        style={{
          fontSize: 11,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 6,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default MainFeature;
