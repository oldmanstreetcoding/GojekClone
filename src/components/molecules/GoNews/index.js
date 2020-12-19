/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const GoNews = () => {
  return (
    <View style={{paddingHorizontal: 16}}>
      <View style={{position: 'relative'}}>
        <Image
          source={require('../../../assets/dummy/timnas.jpg')}
          style={{height: 170, width: '100%', borderRadius: 7}}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'black',
            opacity: 0.2,
            borderRadius: 7,
          }}
        />
        <Icon
          name="home"
          size={32}
          style={{color: 'white', position: 'absolute', top: 16, left: 16}}
        />
      </View>
      <View style={{paddingBottom: 20, paddingTop: 16}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>
          GO-NEWS
        </Text>
        <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7a7a7a'}}>
          Timnas U-19 Menang Telak Atas Team Piala Dunia
        </Text>
      </View>
      <View
        style={{
          paddingTop: 16,
          borderBottomWidth: 1,
          color: '#E8E9ED',
        }}
      />
    </View>
  );
};

export default GoNews;
