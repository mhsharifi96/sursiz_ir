import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import TabComponent from './TabComponent';
import SwiperComponent from './swiper';
import axios from 'axios';
import style from './styles';
export default function twitter(props) {
  // const [showFooter, setShowFooter] = useState(true);
  const [loading, setLoading] = useState(false);

  // const [lastPage, setLastPage] = useState(false);
  const [refreshingFlatList, setRefreshingFlatList] = useState(false);
  // const [server_response, setServerResponse] = useState(false);
  // const[error,setError]=useState('');
  const [data, setData] = useState([]);
  const [more, setMore] = useState(false);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [showFooter, setShowFooter] = useState(true);
  // const { stock, setStock }=useState([{nam:'',number:},{nam:'',number:},{nam:'',number}])
  //   useEffect(()=>{
  // //didmount, aray=updatestate
  //      return()=>{}//willunmount
  //   },[]);
  function handleLoadMore() {
    setShowFooter(true);
    console.log('number*************************', numberOfPage);
    makeRemoteRequest();
  }
  function onRefresh() {
    setRefreshingFlatList(true);
    makeRemoteRequest();
  }

  function renderFooter() {
    if (!loading) return null;
    return (
      <View
        style={{
          borderTopWidth: 1,
          borderColor: '#CED0CE',
        }}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  }
  function makeRemoteRequest() {
    console.log('make');
    if (numberOfPage <= totalPage) {
      setLoading(true);
      axios({
        method: 'get',
        url: `http://borsiz.ir/api/app/twit/?page=${numberOfPage}`,
      })
        .then(res => {
          console.log('resultlist', res.data);
          {
            numberOfPage === 1 ? setData(res.data.results) : [...data, ...res.data.results];
          }
          setTotal(res.data.results.length);
          setCount(res.data.count);
          setTotalPage(count / 100 + 1);
          setLoading(false);
          setShowFooter(false);
          setRefreshingFlatList(false);
          console.log('data', data, '---------------------', totalPage);
          setNumberOfPage(numberOfPage + 1);
        })
        .catch(error => {
          console.log('err shop box:', error.res);
          setLoading(false);
        });
    }
  }

  useEffect(() => {
    makeRemoteRequest();
    //setTotalPage(count / 100);
  });
  return (
    <View style={{ flexGrow: 1, backgroundColor: '#EBDEF0' }}>
      {!showFooter ? (
        <FlatList
          style={{ marginBottom: 60 }}
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  height: null,
                  padding: 3,
                  borderWidth: 1,
                  elevation: 2,
                  borderRadius: 2,
                  borderColor: '#e0e0e0',
                  marginVertical: 5,
                  //marginHorizontal: '1%',

                  backgroundColor: '#fffff7',
                }}>
                <View style={{ flex: 1, flexDirection: 'row', margin: 5 }}>
                  <Text
                    style={[
                      style.fontFace,
                      { fontSize: 14, textAlign: 'right', paddingHorizontal: 5, width: '80%' },
                    ]}
                    numberOfLines={2}
                    ellipsizeMode={'tail'}>
                    نام کانال:
                  </Text>

                  <View
                    style={{
                      borderRadius: 50,
                      borderColor: '#6b3281',
                      borderWidth: 1,
                      width: 70,
                      height: 70,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      style={{ width: '96%', height: '96%', borderRadius: 50, alignSelf: 'center' }}
                      source={{ uri: item.image }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View
                    style={[
                      style.detailsTextShop,
                      {
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        width: '96%',
                        marginLeft: '2%',
                        height: more ? null : 200,
                      },
                    ]}>
                    <TouchableOpacity onPress={() => setMore(!more)}>
                      <Text
                        style={[style.rowEnd, style.fontFace, style.description]}
                        numberOfLines={more ? null : 4}
                        ellipsizeMode={'tail'}>
                        {item.description}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    borderTopWidth: 0.5,
                    borderColor: '#e0e0e0',
                    justifyContent: 'flex-start',
                  }}>
                  <TouchableOpacity style={[style.rowEnd, { marginRight: 10 }]}>
                    <Image
                      source={require('../assets/dislike.png')}
                      style={{
                        width: 30,
                        height: 30,
                        alignSelf: 'center',
                        borderWidth: 1,
                      }}
                    />
                    <Text
                      style={{
                        alignSelf: 'center',
                        textAlign: 'right',
                        color: '#5D5A5A',
                        paddingLeft: 5,
                        fontSize: 16,
                      }}>
                      5
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[style.rowEnd, { paddingLeft: 15 }]}>
                    <Image
                      source={require('../assets/like.png')}
                      style={{
                        width: 30,
                        height: 30,
                        alignSelf: 'center',
                        borderWidth: 1,
                      }}
                    />
                    <Text
                      style={{
                        alignSelf: 'center',
                        textAlign: 'right',
                        color: '#5D5A5A',
                        paddingLeft: 5,
                        fontSize: 16,
                      }}>
                      5
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id}
          ListFooterComponent={renderFooter}
          refreshing={refreshingFlatList}
          onRefresh={onRefresh}
          onEndReached={handleLoadMore}
          onEndThreshold={0}
          onEndReachedThreshold={0.1}
        />
      ) : (
        <ActivityIndicator animating size="large" />
      )}
      <TabComponent navigationProps={props.navigation} TabScreen={'twitter'} />
    </View>
  );
}
