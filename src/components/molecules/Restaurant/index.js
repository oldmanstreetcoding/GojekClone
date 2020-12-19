/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View} from 'react-native';

const Restaurant = ({img, name}) => {
  return (
    <View style={{marginRight: 16}}>
      <View style={{width: 150, height: 150, borderRadius: 10}}>
        <Image
          source={img}
          style={{
            resizeMode: 'cover',
            width: undefined,
            height: undefined,
            flex: 1,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#1c1c1c',
          marginTop: 12,
        }}>
        {name}
      </Text>
    </View>
  );
};

export default Restaurant;
