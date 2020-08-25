import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import style from './styles';
import TabComponent from './TabComponent';
import axios from 'axios';

export default function ListOfStock(props) {
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://borsiz.ir/api/app/company`,
    })
      .then(res => {
        console.log('resultlist', res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.log('err shop box:', error.res);
        setLoading(false);
      });
  });
  return (
    <View>
      {!loading ? (
        <View>
          <View style={{ backgroundColor: '#eeeef0', marginTop: 70, marginBottom: 10 }}>
            <FlatList
              style={{ marginBottom: 60 }}
              data={data}
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
                    <TouchableOpacity
                      onPress={() => props.navigationProps.navigate('Stock', { id: item.id })}>
                      <View
                        style={[
                          style.rowEnd,
                          {
                            width: '96%',
                            alignItems: 'flex-start',
                            alignSelf: 'flex-end',
                            justifyContent: 'flex-end',
                          },
                        ]}>
                        <View
                          styles={[
                            {
                              alignItems: 'flex-start',
                              alignSelf: 'flex-start',
                              justifyContent: 'flex-start',
                            },
                          ]}>
                          <Text
                            numberOfLines={2}
                            ellipsizeMode={'tail'}
                            maxLength={5}
                            style={[
                              style.fontFaceBYekan,
                              {
                                textAlign: 'right',
                                justifyContent: 'flex-end',
                                alignSelf: 'flex-end',
                                marginRight: 10,
                                marginTop: 5,
                                // width:'30%',
                                width: 200,
                                // borderWidth:1,
                              },
                            ]}>
                            {' '}
                            {item.name}
                          </Text>
                        </View>
                        <Image
                          source={{ uri: item.imge }}
                          style={{
                            alignSelf: 'flex-end',
                            justifyContent: 'flex-end',
                            width: 102,
                            height: 90,
                            marginTop: 2,
                            marginBottom: 2,
                            marginRight: '1%',
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
              keyExtractor={(item, index) => item.id}
              // ListFooterComponent={this.renderFooter()}
              // refreshing={this.state.refreshingFlatList}
              // onRefresh={this._onRefresh}
              // onEndReached={this.handleLoadMore}
              onEndThreshold={0}
              onEndReachedThreshold={0.1}
            />
          </View>

          <TabComponent navigationProps={props.navigation} TabScreen={'ListOfStock'} />
        </View>
      ) : (
        <ActivityIndicator animating size="large" />
      )}
    </View>
  );
}
