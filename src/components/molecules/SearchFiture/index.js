/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchFiture = () => {
  return (
    <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
      <View style={{position: 'relative', flex: 1}}>
        <TextInput
          placeholder="What Do You Want To Eat ?"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 25,
            height: 45,
            fontSize: 13,
            paddingLeft: 50,
            paddingRight: 20,
            backgroundColor: 'white',
            marginRight: 18,
          }}
        />
        <Icon
          name="search"
          size={26}
          style={{color: '#545454', position: 'absolute', top: 8, left: 15}}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Icon name="percent" size={30} style={{color: '#545454'}} />
      </View>
    </View>
  );
};

export default SearchFiture;
