import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StatusBar, Animated, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
//import {NavigationActions} from 'react-navigation';
//import details from './details';
import styles from './styles';
import Toast from 'react-native-simple-toast';

let nav;

export default function Header(props) {
  const [search, setSearch] = useState(false);
  const [animate, setAnimate] = useState('fadeInRightBig');
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState('1');
  //   const [pageScreen, setPageScreen] = useState(props.PageScreen);

  function showSearch() {
    if (search) {
      setAnimate('fadeOutLeftBig');

      setTimeout(() => {
        setSearch(!search);
        setAnimate('fadeOutLeftBig');
        setSearchText('');
      }, 250);
    } else {
      setSearch(!search);
    }
  }
  function GetValueFunction(text) {
    setSearchText(text);
  }
  function handleSearch() {
    // if(props.pageScreen === 'Home'){
    if (searchText !== '') {
      props.navigationProps.navigate('Search', {
        searchText: searchText,
        page: 1,
        // pageScreen: pageScreen,
      });

      //nav.navigate('search', {searchText: this.state.searchText, page:1,pageScreen:this.state.pageScreen});
      setSearch(false);
    } else {
      Toast.show('لطفا عبارت موردنظر را وارد کنید');
    }
    console.log('nav', searchText);
  }
  // else if(props.pageScreen === 'service'){
  //     if(searchText!==''){

  //    // nav.navigate('searchService', {searchText: this.state.searchText, page:1,pageScreen:this.state.pageScreen});
  //     setSearch(false)
  // }
  //     else{
  //         Toast.show('لطفا عبارت موردنظر را وارد کنید')
  //     }
  //     console.log('nav',searchText);
  // }

  // navigationToScreen = (key) => () => {
  //     const navigationAction =  NavigationActions.navigate({
  //         routeName : key
  //     });
  //     console.log('navprops',nav);

  //     nav.dispatch(navigationAction);
  //     nav.navigate(key)
  // };

  return (
    <View>
      <StatusBar backgroundColor="#6b3289" barStyle="light-content" />

      <View style={styles.header_view}>
        {search ? (
          <Animatable.View
            style={[styles.headerSearch, { flexDirection: 'row', justifyContent: 'space-between' }]}
            animation={animate}
            duration={300}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 15,
              }}
              onPress={showSearch}>
              <Image source={require('./../assets/close.png')} style={styles.iconClose} />
            </TouchableOpacity>
            <TextInput
              underlineColorAndroid="rgba(0,0,0,0)"
              onChangeText={GetValueFunction(searchText)}
              value={searchText}
              style={[
                styles.rowCenter,
                styles.fontFace,
                {
                  width: '70%',
                  backgroundColor: 'white',
                  marginTop: 5,
                  marginBottom: 5,
                },
              ]}
              returnKeyType="search"
              placeholder={'جست و جو  '}
              onSubmitEditing={handleSearch}
            />

            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 15,
              }}
              onPress={handleSearch}>
              <Image
                source={require('./../assets/searching-magnifying-glass.png')}
                style={styles.iconSearch}
              />
            </TouchableOpacity>
          </Animatable.View>
        ) : (
          <View style={{ width: '100%', flexDirection: 'row', flex: 1 }}>
            <View style={[styles.headers]}>
              <TouchableOpacity onPress={showSearch}>
                <Image source={require('../assets/search.png')} style={styles.header_icon} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{ marginLeft: 10 }}
                //   onPress={()=>Store.SignIn ?
                //       nav.navigate('profileStack')
                //       :
                //       nav.navigate('loginPageStack')}
              >
                <Image
                  source={require('../assets/profile.png')}
                  style={[styles.header_icon, { tintColor: '#f4f4f4' }]}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={[styles.headers, { justifyContent: 'flex-end', paddingRight: 10 }]}>
                {/* onPress={() => props.navigationProps.toggleDrawer()}> */}
                <Image
                  source={require('../assets/noun_menu.png')}
                  style={[styles.header_icon, { tintColor: '#FFF' }]}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
