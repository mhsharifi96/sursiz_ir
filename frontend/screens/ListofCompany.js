import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  List,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import style from './styles';

export default function Stock(props) {
  const [data, setData] = useState([
    {
      id: 132,
      title: 'تعمیر شکستگی و عیوب ظاهری فوری',
      slug: 'تعمیر-شکستگی-و-عیوب-ظاهری-فوری',
      symbol: '',
      photo: 'hoLad.jpg',
      depth: 1,
      position: 132,
      parent_id: 131,
      is_active: 1,
      has_repair: 1,
      is_comparable: 1,
      type: 'service',
      created_at: '2019-09-16 21:29:20',
      updated_at: '2020-01-16 18:41:30',
      image: 'https://www.stockisho.com/upload/categories/132/hoLad.jpg',
    },
    {
      id: 157,
      title: 'تعمیر مشکل آنتن دهی فوری',
      slug: 'تعمیر-مشکل-آنتن-دهی-فوری',
      symbol: '',
      photo: 'pA45y.jpg',
      depth: 1,
      position: 157,
      parent_id: 131,
      is_active: 1,
      has_repair: 1,
      is_comparable: 1,
      type: 'service',
      created_at: '2019-09-18 21:42:12',
      updated_at: '2020-01-16 18:42:34',
      image: 'https://www.stockisho.com/upload/categories/157/pA45y.jpg',
    },
    {
      id: 158,
      title: 'رفع مشکل وای فای و بلوتوث , GPS فوری',
      slug: 'رفع-مشکل-وای-فای-و-بلوتوث-gps-فوری',
      symbol: '',
      photo: 'ktLTl.jpg',
      depth: 1,
      position: 158,
      parent_id: 131,
      is_active: 1,
      has_repair: 1,
      is_comparable: 1,
      type: 'service',
      created_at: '2019-09-18 21:42:28',
      updated_at: '2020-01-16 18:47:54',
      image: 'https://www.stockisho.com/upload/categories/158/ktLTl.jpg',
    },
    {
      id: 160,
      title: 'رفع مشکلات مربوط به شارژ فوری',
      slug: 'رفع-مشکلات-مربوط-به-شارژ-فوری-1',
      symbol: '',
      photo: 'icQcY.PNG',
      depth: 1,
      position: 160,
      parent_id: 131,
      is_active: 1,
      has_repair: 1,
      is_comparable: 1,
      type: 'service',
      created_at: '2019-09-18 21:43:41',
      updated_at: '2020-01-16 18:50:43',
      image: 'https://www.stockisho.com/upload/categories/160/icQcY.PNG',
    },
    {
      id: 161,
      title: 'ارورهای مختلف نرم افزاری فوری',
      slug: 'ارورهای-مختلف-نرم-افزاری-فوری',
      symbol: '',
      photo: 'ikLlU.PNG',
      depth: 1,
      position: 161,
      parent_id: 131,
      is_active: 1,
      has_repair: 1,
      is_comparable: 1,
      type: 'service',
      created_at: '2019-09-18 21:44:26',
      updated_at: '2020-01-16 18:58:10',
      image: 'https://www.stockisho.com/upload/categories/161/ikLlU.PNG',
    },
    {
      id: 162,
      title: 'رفع مشکل آبخوردگی فوری',
      slug: 'رفع-مشکل-آبخوردگی-فوری-1',
      symbol: '',
      photo: 'PKeDZ.PNG',
      depth: 1,
      position: 162,
      parent_id: 131,
      is_active: 1,
      has_repair: 1,
      is_comparable: 1,
      type: 'service',
      created_at: '2019-09-18 21:45:05',
      updated_at: '2020-01-16 19:00:05',
      image: 'https://www.stockisho.com/upload/categories/162/PKeDZ.PNG',
    },
    {
      id: 163,
      title: 'رفع مشکل صدا و میکروفون فوری',
      slug: 'رفع-مشکل-صدا-و-میکروفون-فوری',
      symbol: '',
      photo: 'zo3cK.PNG',
      depth: 1,
      position: 163,
      parent_id: 131,
      is_active: 1,
      has_repair: 1,
      is_comparable: 1,
      type: 'service',
      created_at: '2019-09-18 21:45:34',
      updated_at: '2020-01-16 19:06:20',
      image: 'https://www.stockisho.com/upload/categories/163/zo3cK.PNG',
    },
  ]);

  <View
    style={{ backgroundColor: '#eeeef0', height: sliderHeight, marginTop: 70, marginBottom: 10 }}>
    {
      this.state.data.length > 0 ? (
        <List style={{ width: '100%', height: null, paddingVertical: 9 }}>
          <FlatList
            style={{ marginBottom: 25 }}
            data={this.state.data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    width: '95%',
                    borderWidth: 1,
                    borderColor: '#cbcbcb',
                    elevation: 2,
                    backgroundColor: '#fbfbfb',
                    alignSelf: 'center',
                    height: null,
                    marginBottom: 10,
                  }}>
                  <TouchableOpacity onPress={() => nav.navigate('detailsOfbuild', { id: item.id })}>
                    <View style={[style.rowEnd, { width: '100%' }]}>
                      <View style={{ flex: 1, flexDirection: 'row', width: '90%' }}>
                        <Text
                          style={[
                            style.fontFaceBold,
                            {
                              alignSelf: 'flex-start',
                              justifyContent: 'flex-end',
                              alignItems: 'flex-start',
                              height: 50,
                              marginTop: 5,
                              width: '70%',
                              fontSize: 13,
                              paddingRight: 15,
                            },
                          ]}>
                          {item.title}
                        </Text>
                      </View>
                      <Image
                        source={{ uri: item.image }}
                        style={{
                          justifyContent: 'flex-end',
                          alignSelf: 'flex-end',
                          width: 80,
                          height: 80,
                          borderWidth: 1,
                          marginVertical: 3,
                          marginHorizontal: 3,
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item, index) => item.id}
            ListFooterComponent={this.renderFooter()}
            refreshing={this.state.refreshingFlatList}
            onRefresh={this._onRefresh}
            onEndReached={this.handleLoadMore}
            onEndThreshold={0}
            onEndReachedThreshold={0.1}
          />
        </List>
      ) : (
        <View
          style={{
            flex: 1,
            marginTop: 200,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('./../assets/frown-emoticon.png')} style={[style.emoje]} />
          <Text
            style={[
              style.fontFaceBold,
              { color: '#d6d6d6', padding: 20, fontSize: 15, textAlign: 'center' },
            ]}>
            {' '}
            محصولی یافت نشد است{' '}
          </Text>
        </View>
      )
    ) : (
      <ActivityIndicator animating size="large" />
    )}
  </View>;
}
