import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity, StatusBar, Animated, TextInput
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {NavigationActions} from 'react-navigation'
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

export default class Header extends Component {
    constructor(props) {
        super(props);
        console.log('props', this.props.navigationProps);
        nav=this.props.navigationProps;
        Store.page='Home';
        this.state = {
            search: false,
            animate: "fadeInRightBig",
            searchText:"",
            page:'1',
            pageScreen:this.props.pageScreen

        }
        this.showSearch = this.showSearch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.navigationToScreen = this.navigationToScreen.bind(this);

    }

    showSearch = () => {
        if (this.state.search) {
            this.setState({
                    animate: "fadeOutLeftBig"
                }, () =>
                    setTimeout(() => this.setState({
                        search: !this.state.search
                    }, () =>
                        this.setState({
                            animate: "fadeInRightBig",
                            searchText:''
                        })), 250)
            )
        } else {
            this.setState({
                search: !this.state.search
            });
        }


    };
    GetValueFunction = (text) =>{

        this.setState({searchText : text}) ;


    };
    handleSearch=()=>{
        if(this.props.pageScreen === 'Home'){
            if(this.state.searchText!==''){
        nav.navigate('search', {searchText: this.state.searchText, page:1,pageScreen:this.state.pageScreen});
        this.setState({search:false})
            }
            else{
                Toast.show('لطفا عبارت موردنظر را وارد کنید')
            }
        console.log('nav',this.state.searchText);
        }
        else if(this.props.pageScreen === 'service'){
            if(this.state.searchText!==''){

            nav.navigate('searchService', {searchText: this.state.searchText, page:1,pageScreen:this.state.pageScreen});
            this.setState({search:false})
        }
            else{
                Toast.show('لطفا عبارت موردنظر را وارد کنید')
            }
            console.log('nav',this.state.searchText);
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
                            animation={this.state.animate} duration={300}>
                            <TouchableOpacity
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginLeft: 15
                                }}
                                onPress={this.showSearch}
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
                                placeholder={'جست و جو در استاک'}
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
                                                  onPress={()=>Store.SignIn ?
                                                      nav.navigate('profileStack')
                                                      :
                                                      nav.navigate('loginPageStack')}>
                                    <Image source={require('../assets/profile.png')}
                                           style={[styles.header_icon, {tintColor: '#f4f4f4'}]}
                                    />

                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1}}>
                                < TouchableOpacity
                                    style={[styles.headers, {justifyContent: 'flex-end', paddingRight: 10}]}
                                    onPress={() => this.props.navigationProps.toggleDrawer()}>
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


