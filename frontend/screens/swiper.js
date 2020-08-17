import React, { useState } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import styles from './styles';

import Swiper from 'react-native-swiper';

export default function SwiperComponent() {
  const [slideShow, setSlideShow] = useState([
    {
      id: 5,
      photo: 'xl9GKL1gzR.jpg',
      origin_name: '',
      created_at: '2020-03-17 16:16:51',
      title: 'خدمات استاک',
      description: 'ارائه انواع خدمات آنلاین در زمینه گوشی های موبایل',
      url: 'http://stockisho.com//services',
      position: 5,
      updated_at: '2020-03-18 11:11:38',
      image: 'https://www.stockisho.com/upload/slideshow/xl9GKL1gzR.jpg',
    },
    {
      id: 6,
      photo: 'dJwfDwtkFb.jpg',
      origin_name: '',
      created_at: '2020-03-17 16:17:21',
      title: 'فروشگاه استاک',
      description: 'فروشگاه موبایل و لوازم جانبی استاک',
      url: 'http://www.stockisho.com/',
      position: 7,
      updated_at: '2020-03-18 15:54:22',
      image: 'https://www.stockisho.com/upload/slideshow/dJwfDwtkFb.jpg',
    },
    {
      id: 7,
      photo: 'zmerjg7cmf.jpg',
      origin_name: '',
      created_at: '2020-03-17 16:17:57',
      title: 'مسابقه استاک',
      description: 'استاکی شو، برنده شو',
      url: 'http://www.stockisho.com/login',
      position: 10,
      updated_at: '2020-03-31 22:02:10',
      image: 'https://www.stockisho.com/upload/slideshow/zmerjg7cmf.jpg',
    },
    {
      id: 10,
      photo: 'Yc3sx9wIo2.jpg',
      origin_name: '',
      created_at: '2020-03-17 16:55:13',
      title: 'ارائه انواع گوشی های موبایل',
      description: 'ارائه انواع خدمات آنلاین در زمینه گوشی های موبایل',
      url: 'http://www.stockisho.com/filter/%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84',
      position: 6,
      updated_at: '2020-03-17 16:55:13',
      image: 'https://www.stockisho.com/upload/slideshow/Yc3sx9wIo2.jpg',
    },
    {
      id: 11,
      photo: 'xZKuBfpdq2.jpg',
      origin_name: '',
      created_at: '2020-03-30 12:52:04',
      title: 'دانلود اپلیکیشن',
      description: 'دانلود اپلیکیشن استاک',
      url: 'https://cafebazaar.ir/app/com.stockisho',
      position: 11,
      updated_at: '2020-05-02 11:45:38',
      image: 'https://www.stockisho.com/upload/slideshow/xZKuBfpdq2.jpg',
    },
  ]);

 
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={true}
      key={slideShow.length}
      style={styles.wrapper}
      dotColor={'#fff'}
      nextButton={<Text style={{ color: '#6b3281', fontSize: 50 }}>›</Text>}
      prevButton={<Text style={{ color: '#6b3281', fontSize: 50 }}>‹</Text>}
      activeDotColor={'#6b3281'}
      buttonColor={'#DDD'}
      onIndexChanged={i => {}}
      loop={true}>
      {slideShow.map((source, i) => (
        <View style={styles.slide} key={'slideShow' + i}>
          <Image source={{ uri: source.image }} resizeMode={'cover'} style={styles.image} />
        </View>
      ))}
    </Swiper>
  );
}
