import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import TabComponent from './TabComponent';
import SwiperComponent from './swiper';
import styles from './styles';

export default function Home(props) {
  // const { stock, setStock }=useState([{nam:'',number:},{nam:'',number:},{nam:'',number}])
  return (
    <View style={{ flexGrow: 1, backgroundColor: '#EBDEF0' }}>
      <SwiperComponent />

      <View style={{ flexDirection: 'row', backgroundColor: '#EBDEF0', margin: 10 }}>
        <View style={{ width: '32%', backgroundColor: '#fef', height: 40, margin: 2 }} />
        <View style={{ width: '32%', backgroundColor: '#fef', height: 40, margin: 2 }} />
        <View style={{ width: '32%', backgroundColor: '#fef', height: 40, margin: 2 }} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#EBDEF0',
          margin: 10,
        }}>
        <View style={{ width: '49%', backgroundColor: '#fefefe', height: 100, margin: 2 }} />
        <View style={{ width: '49%', backgroundColor: '#fefefe', height: 100, margin: 2 }} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#6ee',
          width: '98%',
          margin: 5,
        }}
      />

      <TabComponent navigationProps={props.navigation} TabScreen={'Home'} />
    </View>
  );
}
