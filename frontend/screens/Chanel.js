import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import TabComponent from './TabComponent';
import SwiperComponent from './swiper';
import styles from './styles';

export default function Chanel(props) {
  // const { stock, setStock }=useState([{nam:'',number:},{nam:'',number:},{nam:'',number}])
  return (
    <View style={{ flexGrow: 1, backgroundColor: '#EBDEF0' }}>
      <SwiperComponent />

      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#e23' }}>
        <View style={{ width: '33%', backgroundColor: '#e23' }} />
        <View style={{ width: '33%', backgroundColor: '#e823' }} />
        <View style={{ width: '33%', backgroundColor: '#67ef' }} />
      </View>
      <TabComponent navigationProps={props.navigation} TabScreen={'Chanel'} />
    </View>
  );
}
