/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Restaurant from '../../../components/molecules/Restaurant';

class NearbyRestaurant extends Component {
  render() {
    return (
      <View style={{marginBottom: 10}}>
        <View style={{height: 20, width: 100, marginLeft: -8}}>
          <Image
            source={require('../../../assets/dummy/gofood.png')}
            style={{
              resizeMode: 'contain',
              width: undefined,
              height: undefined,
              flex: 1,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
            paddingHorizontal: 14,
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1c1c1c'}}>
            Nearby Restaurant
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61a756'}}>
            See All
          </Text>
        </View>
        <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
          <Restaurant
            img={require('../../../assets/dummy/timnas.jpg')}
            name="Sederhana Minang"
          />
          <Restaurant
            img={require('../../../assets/dummy/timnas.jpg')}
            name="Sederhana Minang"
          />
          <Restaurant
            img={require('../../../assets/dummy/timnas.jpg')}
            name="Sederhana Minang"
          />
          <Restaurant
            img={require('../../../assets/dummy/timnas.jpg')}
            name="Sederhana Minang"
          />
          <Restaurant
            img={require('../../../assets/dummy/timnas.jpg')}
            name="Sederhana Minang"
          />
        </ScrollView>
      </View>
    );
  }
}

export default NearbyRestaurant;
