import React, {Component, useState} from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity, StatusBar, Animated, TextInput
} from 'react-native';
import * as Animatable from 'react-native-animatable';
//import {NavigationActions} from 'react-navigation';
//import details from './details';
import styles from './styles';
import Toast from 'react-native-simple-toast';
// class Store extends Component {
//     //Structure for the navigatin Drawer
//     toggleDrawer = () => {
//         //Props to open/close the drawer
//         this.props.navigationProps.toggleDrawer();
//     };
//
//     render() {
//         return (
//             <View style={{flexDirection: 'row'}}>
//                 <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
//                     {/*Donute Button Image */}
//                     <Image
//                         source={require('../assets/menu.png')}
//                         style={{width: 25, height: 25, marginLeft: 5}}
//                     />
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }
let nav;

export default function Header(props)  {
    
           [search, setSearch]= useState(false);
            [animate,setAnimate]= useState("fadeInRightBig");
            [searchText, setSearchText]=useState("");
    const [page, setPage] = useState('1')
const [pageScreen, setPageScreen] = useState(props.PageScreen)
        }
        
    function showSearch(){
        if (search) {
            setAnimate("fadeOutLeftBig")
                
                    setTimeout(() => {
                    setSearch (!this.state.search)
                    setAnimate("fadeOutLeftBig")
                    setSearchText('')
                        }, 250)
            
        } else {
            setSearch (!this.state.search)

        }


    };
   function GetValueFunction (text) {

        setSearchText (text)

    };
  function handleSearch(){
        if(props.pageScreen === 'Home'){
            if(searchText!==''){
        //nav.navigate('search', {searchText: this.state.searchText, page:1,pageScreen:this.state.pageScreen});
        setSearch(false)
            }
            else{
                Toast.show('لطفا عبارت موردنظر را وارد کنید')
            }
        console.log('nav',searchText);
        }
        else if(props.pageScreen === 'service'){
            if(searchText!==''){

           // nav.navigate('searchService', {searchText: this.state.searchText, page:1,pageScreen:this.state.pageScreen});
            setSearch(false)
        }
            else{
                Toast.show('لطفا عبارت موردنظر را وارد کنید')
            }
            console.log('nav',searchText);
        }

    };
    navigationToScreen = (key) => () => {
        const navigationAction =  NavigationActions.navigate({
            routeName : key
        });
        console.log('navprops',nav);

        nav.dispatch(navigationAction);
        nav.navigate(key)
    };

    render() {
        return (
            <View>
                <StatusBar backgroundColor='rgba(0, 125, 132,0.9)' barStyle='light-content'/>

                <View style={styles.header_view}>


                    {this.state.search ?
                        <Animatable.View
                            style={[styles.headerSearch, {flexDirection: 'row', justifyContent: 'space-between'}]}
                            animation={animate} duration={300}>
                            <TouchableOpacity
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginLeft: 15
                                }}
                                onPress={showSearch}
                            >
                                <Image source={require('./../assets/close.png')} style={styles.iconClose}/>

                            </TouchableOpacity>
                            <TextInput
                                underlineColorAndroid='rgba(0,0,0,0)'
                                onChangeText={ text => this.GetValueFunction(text) }
                                value={this.state.searchText}
                                style={[styles.rowCenter, styles.fontFace, {
                                    width: '70%', backgroundColor: 'white',
                                    marginTop: 5, marginBottom: 5
                                }]}
                                returnKeyType='search'
                                placeholder={'جست و جو  '}
                                onSubmitEditing={() => this.handleSearch()}
                            />

                            <TouchableOpacity
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: 15
                                }}
                                onPress={this.handleSearch}>

                                <Image source={require('./../assets/searching-magnifying-glass.png')}
                                       style={styles.iconSearch}/>
                            </TouchableOpacity>
                        </Animatable.View>
                        :
                        <View style={{width: '100%', flexDirection: 'row', flex: 1}}>

                            <View style={[styles.headers]}>
                            
                                <TouchableOpacity onPress={this.showSearch}>
                                    <Image source={require('../assets/search.png')}
                                           style={styles.header_icon}
                                    />
                                </TouchableOpacity>
                                   
                                <TouchableOpacity style={{marginLeft:10}}
                                                //   onPress={()=>Store.SignIn ?
                                                //       nav.navigate('profileStack')
                                                //       :
                                                //       nav.navigate('loginPageStack')}
                                                >
                                    <Image source={require('../assets/profile.png')}
                                           style={[styles.header_icon, {tintColor: '#f4f4f4'}]}
                                    />

                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1}}>
                                < TouchableOpacity
                                    style={[styles.headers, {justifyContent: 'flex-end', paddingRight: 10}]}
                                    onPress={() => props.navigationProps.toggleDrawer()}>
                                    <Image source={require('../assets/noun_menu.png')}
                                           style={[styles.header_icon, {tintColor: '#FFF'}]}
                                    />

                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                </View>
            </View>


        )
    }
}


