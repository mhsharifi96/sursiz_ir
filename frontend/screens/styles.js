import { StyleSheet, Platform } from 'react-native';
const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    txtRight: { textAlign: 'right' },
    txtInput: {
        // borderWidth:1,
        width: '85%',
        padding: 10,
        color: '#666',
        fontFamily: 'IRANSansMobile-Medium',
        fontSize: 14,
        // textAlign:'right'
    },
    txtNumberInput: {
        width: "100%",
        padding: 10,
        color: '#666',
        fontFamily: 'IRANSansMobile-Medium',
        fontSize: 14,
    },
    fontFace: { fontFamily: 'IRANSansMobile' },
    fontFaceBold: { fontFamily: 'IRANSansMobile-Bold', },
    fontFaceMedium: { fontFamily: 'IRANSansMobile-Medium' },
    fontFaceLight: { fontFamily: 'IRANSansMobile-Light' },
    fontFaceBYekan: { fontFamily: 'BYek+' },
    fontFaceBYekanBold: { fontFamily: 'BYek+ Bold' },
    fontFaceUltraLight: { fontFamily: 'IRANSansMobile-UltraLight' },
    fontMoharram: { fontFamily: 'Moharram-Bold' },
    rowEnd: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    menuItem: {
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    headers: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'right',
        justifyContent: 'flex-start'
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    icon_bar: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: 0,
        zIndex: 999,
        position: 'absolute',
    },
    textOrder: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        width: '55%',
        fontSize: 13,


    },
    textOrder2: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-start',
        width: '35%',
        fontSize: 13,


    },
    wrapper: {
        backgroundColor: "#ffffff",
        flex: 1,
        flexDirection: 'row',
        width: "100%",
        height: 100,
    },
    swiperview: {
        backgroundColor: "#ffffff",
        height: 200,
        width: "100%",
        flex: 1,
        marginTop: 57

    },
    slide: {
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },

    image: {
        width: "100%",
        height: 200

    },
    imageBorder: {
        tintColor: '#039692',
        width: 20,
        height: 20,
        marginRight: 5
    },
    header_view: {
        flex: 1,
        flexDirection: 'row',
        top: 0,
        zIndex: 50000,
        position: 'absolute',
        flexWrap: 'wrap',
        width: "100%",
        height: 60,
        backgroundColor: 'rgb(0, 125, 132)',
        elevation: 2
    },
    logoStyle: {
        width: 55,
        height: 47,
        margin: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center'

    },
    myMaps: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        height: null,
        width: '100%',
    },
    icon_larg_s: {
        width: '100%',
        height: '100%',
        //margin:10,
    },
    header_icon: {
        width: 22,
        height: 22,
        marginLeft: 10,
        justifyContent: 'flex-end',
        tintColor: '#ffffff',

    },
    boxNews: {
        borderWidth: 0.5,
        borderColor: '#fafafa',
        width: '95%',
        height: 110,
        padding: 5,
        borderRadius: 3,
        elevation: 1,
        marginVertical: 5,
        backgroundColor: 'white',
        marginRight: 10,
        marginLeft: 10
    },
    boxNotif: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 0.5,
        borderColor: '#fafafa',
        width: '95%',
        height: null,
        padding: 5,
        borderRadius: 3,
        elevation: 1,
        marginVertical: 5,
        backgroundColor: 'white',
        marginRight: 10,
        marginLeft: 10
    },
    boxFilm: {
        borderWidth: 0.5,
        borderColor: '#fafafa',
        width: '95%',
        height: 140,

        borderRadius: 3,
        elevation: 1,
        marginVertical: 5,
        backgroundColor: '#fff',
        marginLeft: 10,
        marginRight: 10
    },

    boxComment: {
        borderWidth: 0.5,
        borderColor: '#fafafa',
        width: '95%',
        height: 70,
        padding: 5,
        borderRadius: 3,
        elevation: 1,
        marginVertical: 5,
        backgroundColor: 'white',
        marginRight: 10,
        marginLeft: 10
    },
    boxReplies: {
        borderWidth: 0.5,
        borderColor: '#fafafa',
        width: '70%',
        height: 50,
        padding: 5,
        borderRadius: 3,
        elevation: 1,
        marginVertical: 5,
        backgroundColor: 'white',
        marginRight: 10,
        marginLeft: 10
    },
    imgFilm: {
        width: '92%',
        resizeMode: "stretch",
        height: '92%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        marginTop: 5,
        marginLeft: 5
    },

    imageComments: {

        width: 50,
        height: 50,
        padding: 0,
        borderRadius: 25,
        elevation: 1,
        marginVertical: 5,

        marginRight: 10,
        marginLeft: 10
    },
    imageReplies: {
        width: 30,
        height: 30,
        padding: 0,
        borderRadius: 15,
        elevation: 1,
        marginVertical: 5,

        marginRight: 10,
        marginLeft: 10
    },
    imgNewsCircular: {
        width: 70,
        resizeMode: "contain",
        height: 70,
        marginVertical: 5,
    },
    description: {
        color: '#999',
        fontSize: 12

    },
    labelSlider: {
        fontSize: 17,
        color: '#606060',
        justifyContent: 'center'
    },
    mgt10: {
        marginTop: '2%'
    },
    mgt15: {
        marginTop: 15
    },
    pd10: {
        paddingRight: 10
    },
    slider_view: {
        width: 180,
        flex: 1,
        margin: 5,
        elevation: 5,
        borderRadius: 3,
        borderWidth: 0.5,
        height: 240,
        borderColor: "#fbfbfb",
        backgroundColor: "#ffffff",
        scaleX: -1,
    },
    slider_touch: {
        elevation: 1,
        width: "100%",
        height: 240,
        flex: 1,
        margin: 2
    },
    slider_title: {
        height: '18%', width: '100%', margin: 2, padding: 2, fontSize: 12, paddingHorizontal: 15
    },
    slider_image: {
        margin: '2%',
        width: '96%',
        height: '60%',
        flexDirection: 'row',
        resizeMode: 'stretch',
        marginBottom: 2,
        borderWidth: 1,
    },
    moreText: {
        fontSize: 12,
        textAlign: 'right',
        paddingTop: 1,
        paddingBottom: 1
    },
    slider_imageService: {
        width: '96%',
        height: '78%',
        flexDirection: 'row',
        resizeMode: 'stretch',
        marginRight: "2%",
        marginTop: "2%",
        alignSelf: 'center',
        borderWidth: 1,
    },
    slider_view_price: {
        flex: 1,
        justifyContent: 'center',
        // padding: 5,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        fontSize: 15,

    },
    slider_view_priceproductlist: {
        flex: 1,
        justifyContent: 'center',
        // padding: 5,
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        fontSize: 15,

    },

    slider_price: {
        color: "#14b483",
        padding: 2,
        paddingHorizontal: 10,
        width: "100%",
        fontSize: 13,
    },
    slider_price_del: {
        padding: 2,
        paddingHorizontal: 10,

        // borderTopWidth: 0.5,
        // borderTopColor: "#cacaca",
        width: "100%",
        color: "red",
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize: 12,
    },
    containerMap: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    //search and sing up
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: 'rgb(0, 125, 132)',
        height: 40,
        borderRadius: 20,
        width: '96%',
        paddingRight: '2%',
        marginHorizontal: 7,
    },
    SectionCStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderColor: 'rgb(0, 125, 132)',
        borderBottomWidth: 0.5,
        height: 60,
        borderRadius: 10,
        paddingRight: 5,
        margin: 20,

    }, modal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 0,
        marginHorizontal: 0,
        marginTop: 0,
        // marginBottom: 90,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 8.0,
        borderRadius: 5,
        position: 'relative',
        elevation: 3, ...Platform.select({
            ios: { backgroundColor: 'rgba(0, 0, 0, 0.4)', },
        }),
        // boxShadow:1,

    },
    ContainerModal: {
        // padding:10,
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',

        //alignItems: 'flex-start',
    },
    closeBtn: {
        position: 'absolute', top: 3, right: 20, zIndex: 99999
    },
    txtBtn: {
        color: '#fff', fontFamily: 'IRANSansMobile-Medium', textAlign: 'center',
        ...Platform.select({
            ios: {
                fontSize: 12, letterSpacing: 0
            },
            android: {
                fontSize: 13
            }
        }),
    },

    BoxRadioO: {
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        height: 40,
        borderColor: '#E2E2E2',
        borderRadius: 10,
        borderWidth: 0.5,
        width: '95%',
        //marginLeft:10,
        marginTop: 15,
        //paddingRight:20
    },
    secInput: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 5
    },
    secItem: { backgroundColor: '#fff', width: '100%', height: 37, justifyContent: 'center' },
    footerNav: { backgroundColor: '#039692', bottom: 0, width: '100%', height: 50, flexDirection: 'row', borderColor: 1 },
    center: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    Inputs: {
        fontSize: 14,
        textAlign: 'right',
        // paddingRight:5,
        color: '#666',
        fontFamily: 'IRANSansMobile',
        // paddingTop:5,
        // textAlignVertical:'center'
    },

    emoje: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40
    },
    gif: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 200
    },

    ImageStyle: {
        justifyContent: 'flex-end',
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    //radio buttons
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },

    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
    },

    checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#794F9B',
    },
    //cutDown
    icon_login: {
        width: 25,
        height: 25,
        margin: 10,
        tintColor: '#039692'
    },
    view_send_code: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },


    // drawer js

    backgroundImage: {
        alignSelf: 'center',
        height: 170,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secDrawer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        marginHorizontal: 10
    },
    txtDrawer: {
        fontSize: 14,
        color: '#333',
        textAlign: 'right'
    },
    icoDrawer: {
        fontSize: 20,
        marginLeft: 13,
        color: '#039692',
        top: 4
    },///////Modal
    content_home: {
        width: '100%',
        flex: 1,

    },
    view_title_login: {
        width: '100%',
        height: 45,
        marginTop: 30,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .7,
        borderBottomWidth: 1.2,
        borderColor: '#039692',
        //borderColor: 'red',
    },
    txt_input_reg: {
        width: '84%',
        //height:'100%',
        padding: 5,
        paddingRight: 10,
        //fontFamily:FontFamily,
    },
    line_vertical: {
        height: '80%',
        width: 1,
        borderLeftColor: '#039692',
        borderLeftWidth: 1,
        justifyContent: 'flex-start'
        // marginTop:5,
    },
    view_modal_city: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    view_modal_search: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e2e2e2',
        marginTop: 2,
        backgroundColor: '#fff'
        //justifyContent:'flex-end',
    },
    icon_small: {
        width: 25,
        height: 25,
        tintColor: '#039692',
        //margin:10,
    },
    icon_modal_search: {
        width: 15,
        height: 15,
        tintColor: '#039692',
        //margin:10,

    },
    text_modal_city: {
        width: '90%',
        alignSelf: 'center',
        paddingRight: 10,
        //fontFamily:FontBold,
        fontSize: 12,
    },
    text_modal_search: {
        width: '90%',
        alignSelf: 'center',
        paddingRight: 5,
        //fontFamily:FontBold,
        fontSize: 12,
    },
    view_horizontal_gray: {
        width: '98%',
        height: 2,
        borderBottomWidth: 0.5,
        borderColor: '#ccc',
        //marginVertical: 5,
    },
    headerModal: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: 0,
        zIndex: 1000,
        position: 'absolute',
        flexWrap: 'wrap',
        width: "100%",
        //height:height_header,
        // backgroundColor:HeaderColor,

    },
    ///// for listProfile
    secProfile: {
        //paddingHorizontal: 10,
        //paddingVertical: 20,
        height: 60, borderBottomWidth: 0.7, borderBottomColor: '#b8b8b8', marginTop: 2, alignItems: 'center', paddingRight: 3
    },
    txtProfile: {
        fontSize: 14,
        color: '#333',
        textAlign: 'right',
        alignItems: 'center',
    },
    icoProfile: {
        width: 25,
        height: 25,
        marginLeft: 8,
        tintColor: '#039692',
        top: 4
    },
    icoProfile2: {
        width: 30,
        height: 30,
        marginLeft: 8,
        tintColor: '#039692',
        top: 4
    },
    stepProfile: {
        width: 25,
        height: '100%',
        marginLeft: 4,
        right: 0,

    },
    secFactore: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginHorizontal: 10
    },
    txtFactore: {
        fontSize: 14,
        color: '#333',
        textAlign: 'right',
        alignItems: 'center'
    },
    icoFactore: {
        width: 20,
        height: 20,
        marginLeft: 13,
        tintColor: '#039692',
        top: 4
    },
    // search
    headerSearch: {
        backgroundColor: 'white',
        height: 56,
        width: '100%',
        elevation: 2
    },
    iconSearch: {
        width: 25,
        height: 25,
        tintColor: '#1c2a47'

    },
    iconBack: {
        width: 25,
        height: 25,
        tintColor: '#1c2a47'
    },
    iconClose: {
        width: 15,
        height: 15,
        tintColor: '#1c2a47'
    },
    iconCloseSearch: {
        width: 20,
        height: 20,
        tintColor: '#fff'
    },
    // end Search

    rowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerPage: {
        backgroundColor: 'rgb(0, 125, 132)',
        height: 60,
        elevation: 2

    },
    a: {

        fontWeight: '300',
        color: '#FF3366', // make links coloured pink,
        fontFamily: 'IRANSansMobile',
        fontSize: 14
    },
    p: {
        fontWeight: '300',
        color: '#290810', // make links coloured pink,
        fontFamily: 'IRANSansMobile',
        fontSize: 13,

        marginBottom: 0,
        lineHeight: 25,
        margin: 0,
        display: 'flex'
    },
    img: {
        width: '100%'
    },

    // header animated style
    fill: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgb(0, 125, 132)',
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
    },
    backgroundImageParallex: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'stretch',
    },
    bar: {
        backgroundColor: 'rgba(0, 125, 132,0.3)',
        marginTop: Platform.OS === 'ios' ? 0 : 0.1,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,

    },
    scrollViewContent: {
        // iOS uses content inset, which acts like padding.
        paddingTop: HEADER_MAX_HEIGHT,

    },

    // amazing recommended style
    amazing_view: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        borderTopWidth: 0.3,
        alignItems: 'center',
        textAlign: 'right',
        justifyContent: 'flex-end'
    },
    amazing_main_price: {
        paddingHorizontal: 10,
        borderTopColor: "#cacaca",
        width: "100%",
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize: 15,
        fontWeight: 'bold', color: "red"
    },
    amazing_discount_price: {
        color: '#149d19',
        paddingHorizontal: 10,
        width: "100%",
        fontSize: 20,
        fontWeight: 'bold',
    },
    amazingTitleView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '100%',
        padding: 5,
        marginTop: 5
    },
    amazingTitleText: {
        color: '#606060',
        padding: 10,
        marginTop: 12,
        width: "100%",
        fontSize: 11
    },
    discountLabel: {
        backgroundColor: '#ff282a',
        height: 30,
        position: 'absolute',
        top: 30,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRightWidth: 1,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        borderColor: '#ff282a',
        paddingHorizontal: 5
    },
    talkBubble: {

        backgroundColor: '#fbfbfb',
        margin: 10
    },
    talkBubbleSquare: {
        width: '90%',
        height: null,
        backgroundColor: '#e2e2e2',
        borderRadius: 10,
        flex: 0.8,
        textAlignVertical: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        // alignSelf:'center',


    },
    talkBubbleTriangle: {
        position: 'absolute',
        right: 26,
        top: 26,
        width: 0,
        height: 0,
        borderTopColor: 'transparent',
        borderTopWidth: 13,
        borderLeftWidth: 26,
        borderLeftColor: '#e2e2e2',
        borderBottomWidth: 13,
        borderBottomColor: 'transparent'
    },
    shadows: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

    },

    // style for category

    categoryView: {
        flex: 1,
        flexDirection: 'row-reverse',
        backgroundColor: "#fff",
        borderBottomWidth: 0.5,
        borderBottomColor: '#19959c',
        borderTopWidth: 0.5,
        height: 50,
        borderTopColor: '#19959c'
    },
    categoryViewSearch: {
        flexDirection: 'column',
        backgroundColor: "#fff",
        //borderBottomWidth: 0.5,
        borderBottomColor: '#19959c',
        // borderTopWidth: 0.5,
        // borderTopColor: '#19959c'
    },
    categoryElements: {
        borderLeftWidth: 1,
        borderLeftColor: '#19959c',
        borderBottomLeftRadius: 25,
        justifyContent: 'center',
    },
    categorySearch: {
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: '#19959c',
        borderRadius: 10,
        margin: 5,
        justifyContent: 'center',
        alignSelf: 'center'
    },

    // style for pishnahad shegeftangiz

    amazingTouchable: {
        height: 300,
        padding: 3,
        //alignItems : 'center',
        //borderWidth: 1,
        // borderBottomWidth:1,
        elevation: 2,
        borderRadius: 5,
        //borderColor: "#e0e0e0",
        marginVertical: 5,
        marginHorizontal: '1%',
        backgroundColor: "#fdfdfd"
    },

    customCategoryHalfBox: {
        width: "46%",
        height: 130,
        marginTop: '2%',
        marginBottom: 2
    },
    productBox: {
        width: "100%",
        height: 280,
    },
    productScrollBox: {
        width: '100%',
        height: 220,
        flex: 1,
        margin: 2,
        scaleX: -1,
    },
    //basketshop

    titleTextShop: {
        justifyContent: 'flex-end',
        textAlign: 'right',
        marginTop: 10,
        alignSelf: 'center',
        width: "20%",
        // marginRight:10,
        padding: 0,

        //borderWidth:1
        fontFamily: 'IRANSansMobile-Bold',
        fontSize: 13
    },
    detailsTextShop: {
        width: "70%",
        // alignSelf:'center',
        marginTop: 10,
        //borderWidth:1,
        fontFamily: 'IRANSansMobile-Light',
        fontSize: 13

    },
    digitTxtStyle_sign2: {
        color: '#577090',
    },
    headerHeight: {
        marginTop: 56
    }

});
