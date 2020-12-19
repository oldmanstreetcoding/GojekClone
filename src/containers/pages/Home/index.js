/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import GoNews from '../../../components/molecules/GoNews';
import GoPayFeature from '../../../components/molecules/GopayFeature';
import MainFeature from '../../../components/molecules/MainFeature';
import SearchFiture from '../../../components/molecules/SearchFiture';
import NavBar from '../../organisms/NavBar';
import NearbyRestaurant from '../../organisms/NearbyRestaurant';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* Search Bar */}
          <SearchFiture />

          {/* Gopay */}
          <View style={{marginHorizontal: 16, marginTop: 8}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#2c5fb8',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                padding: 14,
              }}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                GOPAY
              </Text>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                Rp50.000
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingBottom: 14,
                paddingTop: 20,
                backgroundColor: '#2F65BD',
                marginTop: -1,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}>
              <GoPayFeature
                title="Pay"
                icon="home"
                onPress={() => this.props.navigation.navigate('ScanQRCodes')}
              />
              <GoPayFeature title="Nearby" icon="home" />
              <GoPayFeature title="Top Up" icon="home" />
              <GoPayFeature title="More" icon="home" />
            </View>
          </View>

          {/* Main Feature */}
          <View
            style={{
              marginTop: 18,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 18,
              }}>
              <MainFeature title="GO-RIDE" icon="home" />
              <MainFeature title="GO-CAR" icon="home" />
              <MainFeature title="GO-BLUEBIRD" icon="home" />
              <MainFeature title="GO-SEND" icon="home" />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
              }}>
              <MainFeature title="GO-DEALS" icon="home" />
              <MainFeature title="GO-PULSA" icon="home" />
              <MainFeature title="GO-FOOD" icon="home" />
              <MainFeature title="MORE" icon="home" />
            </View>
          </View>

          <View
            style={{backgroundColor: '#F2F2F2', height: 17, marginVertical: 20}}
          />
          {/* News */}
          <GoNews />
          {/* Food Banner */}
          <View style={{padding: 16}}>
            <View style={{position: 'relative'}}>
              <Image
                source={require('../../../assets/dummy/timnas.jpg')}
                style={{height: 170, width: '100%', borderRadius: 7}}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 16,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'white',
                      fontWeight: 'bold',
                      marginBottom: 15,
                    }}>
                    Free GO-FOOD Voucher
                  </Text>
                  <Text style={{fontSize: 1, color: 'white'}}>
                    Quick, Before They Run Out !
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('DetailNews')}
                    style={{
                      backgroundColor: '#61a756',
                      paddingHorizontal: 12,
                      paddingVertical: 11,
                      alignSelf: 'stretch',
                      borderRadius: 3,
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      GET VOUCHER
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                paddingTop: 16,
                borderBottomWidth: 1,
                color: '#E8E9ED',
              }}
            />
          </View>
          {/* Nearby Restaurant */}
          <NearbyRestaurant />
        </ScrollView>
        <NavBar />
      </View>
    );
  }
}
