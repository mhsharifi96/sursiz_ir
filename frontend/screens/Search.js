import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import TabComponent from './TabComponent';
import SwiperComponent from './swiper';
import styles from './styles';

export default function Search(props) {
  const [twiter, setTwiter] = useState([
    {
      title: 'بهداشت بدن',
      imageUrl: {
        uri: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000001968.jpg',
      },
      price: '76,800 تومان',
    },
    {
      title: 'انواع ساعت هوشمند',
      imageUrl: {
        uri: 'https://dkstatics-public-2.digikala.com/digikala-adservice-banners/1000001964.jpg',
      },
      price: '100,000 تومان',
    },
    {
      title: 'محصولات سلولزی',
      imageUrl: {
        uri: 'https://dkstatics-public-2.digikala.com/digikala-adservice-banners/1000002188.jpg',
      },
      price: '30,000 تومان',
    },
    {
      title: 'انواع گوشت و مرغ',
      imageUrl: {
        uri: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000002229.jpg',
      },
      price: '200,000 تومان',
    },
    {
      title: 'انواع لباس ورزشی',
      imageUrl: {
        uri: 'https://dkstatics-public-2.digikala.com/digikala-adservice-banners/1000002026.jpg',
      },
      price: '100,000 تومان',
    },
  ]);
  return (
    <View style={{ flexGrow: 1, backgroundColor: '#EBDEF0' }}>
      <SwiperComponent />
      <View style={styles.productBox}>
        <ScrollView
          // ref={ref => (this.scrollView = ref)}
          style={styles.productScrollBox}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={false}>
          {twiter.map((source, i) => (
            <View style={styles.slider_view}>
              <TouchableOpacity style={styles.slider_touch}>
                <Text style={[styles.fontFaceBold, styles.slider_title]} />
                <Image style={styles.slider_image} source={source.imageUrl} />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#e23' }}>
        <View style={{ width: '100%', backgroundColor: '#e23' }} />
        <View style={{ width: '100%', backgroundColor: '#e823' }} />
        <View style={{ width: '100%', backgroundColor: '#67ef' }} />
      </View>
    </View>
  );
}
