import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  Animated,
  TextInput,
  Platform,
} from 'react-native';
import styles from './styles';
export default function TabComponent(props) {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        height: 50,
        backgroundColor: '#6b3281',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.center, { width: '25%' }]}
        onPress={() => props.navigationProps.navigate('Chanel')}>
        <Image
          style={[
            {
              width: 25,
              height: 25,
              alignSelf: 'center',
              tintColor: props.TabScreen === 'Chanel' ? 'rgb(236, 166, 12)' : '#fff',
            },
          ]}
          source={require('../assets/telegram.png')}
        />
        {props.TabScreen === 'Chanel' ? (
          <Text
            style={[
              styles.fontFaceBold,
              { fontSize: 13, color: 'rgb(236, 166, 12)', textAlign: 'center' },
            ]}>
            کانال
          </Text>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.center, { width: '25%' }]}
        onPress={() => props.navigationProps.navigate('Twitter')}>
        <Image
          style={[
            {
              width: 25,
              height: 25,
              alignSelf: 'center',
              tintColor: props.TabScreen === 'Twitter' ? 'rgb(236, 166, 12)' : '#fff',
            },
          ]}
          source={require('../assets/twitter.png')}
        />
        {props.TabScreen === 'Twitter' ? (
          <Text
            style={[
              styles.fontFaceBold,
              { fontSize: 13, color: 'rgb(236, 166, 12)', top: 1, textAlign: 'center' },
            ]}>
            {' '}
            توییتر
          </Text>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.center, { width: '20%' }]}
        onPress={() => props.navigationProps.navigate('ListOfStock')}>
        <Image
          style={[
            {
              width: 25,
              height: 25,
              alignSelf: 'center',
              tintColor: props.TabScreen === 'ListOfStock' ? 'rgb(236, 166, 12)' : '#fff',
            },
          ]}
          source={require('../assets/shopping-cart.png')}
        />
        {props.TabScreen === 'ListOfStock' ? (
          <Text
            style={[
              styles.fontFaceBold,
              { fontSize: 13, color: 'rgb(236, 166, 12)', textAlign: 'center' },
            ]}>
            سهام
          </Text>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.center, { width: '25%' }]}
        onPress={() => props.navigationProps.navigate('Home')}>
        <Image
          style={[
            {
              width: 25,
              height: 25,
              alignSelf: 'center',
              tintColor: props.TabScreen === 'Home' ? 'rgb(236, 166, 12)' : '#fff',
            },
          ]}
          source={require('../assets/home.png')}
        />
        {props.TabScreen === 'Home' ? (
          <Text
            style={[
              styles.fontFaceBold,
              { fontSize: 13, color: 'rgb(236, 166, 12)', textAlign: 'center' },
            ]}>
            خانه
          </Text>
        ) : null}
      </TouchableOpacity>
    </View>
  );
}
