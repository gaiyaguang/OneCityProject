/**
 * Created by gyg on 2017/4/14.
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    ListView,
    View,
    Text,
    Image
}from 'react-native';
import Search from './../../component/Search';

class TitleBar extends Component {
    render() {
        return (
            <View style={styles.titleBar}>
                <Image source={require('./../../res/filter.png')} style={styles.titleIcon}
                       onPress={this._onLeftPress.bind(this)}/>
                <View style={styles.titleCenter} onPress={this._onCenterPress.bind(this)}>
                    <Text style={styles.titleText}>首页</Text>
                    <Image source={require('./../../res/arrow_down.png')} style={styles.centerIcon}/>
                </View>
                <Image source={require('./../../res/add.png')} style={styles.titleIcon}
                       onPress={this._onRightPress.bind(this)}/>
            </View>
        )
    }

    //左侧按钮点击事件
    _onLeftPress() {

    }

    //右侧按钮点击事件
    _onRightPress() {

    }

    //标题中间点击事件
    _onCenterPress() {

    }
}
//item共同的header布局
class ItemHeader extends Component {

    render() {
        return (
            <View style={styles.itemHeader}>
                <Image source={require('./../../res/header_default.png')} style={styles.userAvator}/>
                <View style={{marginLeft:10,marginRight:10}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.userName}>陈蓉</Text>
                        <View style={styles.centerLine}/>
                        <Text style={styles.userTag}>上海世途信息科技有限公司</Text>
                    </View>
                    <Text style={styles.userJob}>推荐动态 UI</Text>
                </View>
            </View>
        )
    }
}
//item共同footer
class ItemFooter extends Component {
    render() {
        return (
            <View style={{flex:1,flexDirection:'column'}}>
                <View style={styles.divider}/>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <View
                        style={{flex:1,flexGrow:1,flexDirection:'row',justifyContent:'center',alignItems:'center',paddingTop:10,paddingBottom:10}}>
                        <Image source={require('./../../res/icon_share.png')} style={{width:15,height:15,}}/>
                        <Text style={styles.shareText}>37</Text>
                    </View>
                    <View style={{height:20,width:1,backgroundColor:'#E4E4E4'}}/>
                    <View
                        style={{flex:1,flexGrow:1,flexDirection:'row',justifyContent:'center',alignItems:'center',paddingTop:10,paddingBottom:10}}>
                        <Image source={require('./../../res/icon_comment.png')} style={{width:15,height:15,}}/>
                        <Text style={styles.shareText}>0</Text>
                    </View>
                    <View style={{height:20,width:1,backgroundColor:'#E4E4E4'}}/>
                    <View
                        style={{flex:1,flexGrow:1,flexDirection:'row',justifyContent:'center',alignItems:'center',paddingTop:10,paddingBottom:10}}>
                        <Image source={require('./../../res/icon_praise.png')} style={{width:15,height:15,}}/>
                        <Text style={styles.shareText}>43</Text>
                    </View>
                </View>
                <View style={styles.divider}/>
            </View>
        )
    }
}
//主视图
export default class HomeScene extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 != r2})
        this.state = {
            dataSource: ds,
            data: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'c', 'd', 'e', 'f', 'g'],
            imgs: [
                'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87%E6%AD%A3%E6%96%B9%E5%BD%A2%E7%BE%8E%E5%A5%B3&step_word=&hs=2&pn=2&spn=0&di=174333106420&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3375887680%2C307533045&os=1814489017%2C1240687075&simid=4128124962%2C588148989&adpicid=0&lpn=0&ln=1975&fr=&fmq=1493014418097_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205171755_CU5Uc.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B17tpwg2_z%26e3Bv54AzdH3Frj5rsjAzdH3F4ks52AzdH3F88amndcclAzdH3F1jpwtsAzdH3F%3Fgjxp%3D88amndcb8&gsm=0&rpstart=0&rpnum=0',
                'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87%E6%AD%A3%E6%96%B9%E5%BD%A2%E7%BE%8E%E5%A5%B3&step_word=&hs=2&pn=7&spn=0&di=130531330270&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3028266576%2C1234361967&os=2332729181%2C2186059333&simid=116919153%2C883751668&adpicid=0&lpn=0&ln=1975&fr=&fmq=1493014418097_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fv1.qzone.cc%2Fskin%2F201512%2F05%2F12%2F11%2F566263debacd8251.jpg!600x600.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bqz5gj_z%26e3BvvAzdH3FfhtgAzdH3Fojt4jtAzdH3Fcmmln0_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0',
                'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87%E6%AD%A3%E6%96%B9%E5%BD%A2%E7%BE%8E%E5%A5%B3&step_word=&hs=2&pn=17&spn=0&di=202251368990&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3747615001%2C1475520233&os=2179790131%2C1713300373&simid=4159447910%2C517312548&adpicid=0&lpn=0&ln=1975&fr=&fmq=1493014418097_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205171756_cfAFz.thumb.224_0.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B17tpwg2_z%26e3Bv54AzdH3Fwsk74AzdH3Fcmmlm9cmAzdH3FdAzdH3F&gsm=0&rpstart=0&rpnum=0',
                'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87%E6%AD%A3%E6%96%B9%E5%BD%A2%E7%BE%8E%E5%A5%B3&step_word=&hs=2&pn=14&spn=0&di=3084180770&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=2013224935%2C3785314501&os=849143744%2C900283531&simid=3325747404%2C75377957&adpicid=0&lpn=0&ln=1975&fr=&fmq=1493014418097_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fv1.qzone.cc%2Fskin%2F201512%2F10%2F20%2F07%2F56696af090534809.jpg!600x600.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bqz5gj_z%26e3BvvAzdH3FfhtgAzdH3Fojt4jtAzdH3Fcmbcmn_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0',
                'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87%E6%AD%A3%E6%96%B9%E5%BD%A2%E7%BE%8E%E5%A5%B3&step_word=&hs=2&pn=16&spn=0&di=197127257030&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=2117902373%2C480530714&os=828893232%2C992775302&simid=3435180097%2C372447027&adpicid=0&lpn=0&ln=1975&fr=&fmq=1493014418097_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fv1.qzone.cc%2Fskin%2F201512%2F02%2F13%2F45%2F565e856550e68717.jpg!600x600.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bqz5gj_z%26e3BvvAzdH3FfhtgAzdH3Fojt4jtAzdH3Fcmmal0_z%26e3Bip4s%3Fqq-ru-p5%3Drvqq_z%26e3Bvdv&gsm=0&rpstart=0&rpnum=0',
                'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87%E6%AD%A3%E6%96%B9%E5%BD%A2%E7%BE%8E%E5%A5%B3&step_word=&hs=2&pn=56&spn=0&di=131241264880&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=4001157220%2C1345190893&os=1782199297%2C1706870297&simid=0%2C0&adpicid=0&lpn=0&ln=1975&fr=&fmq=1493014418097_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fv1.qzone.cc%2Fskin%2F201508%2F20%2F14%2F11%2F55d56fa81b109080.jpg!600x600.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3F4_z%26e3Bqz5gj_z%26e3BvvAzdH3FfhtgAzdH3Fojt4jtAzdH3Fcdbaml_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0',
                'https://image.baidu.com/search/detail?z=0&ipn=d&word=%E5%9B%BE%E7%89%87%E6%AD%A3%E6%96%B9%E5%BD%A2%E7%BE%8E%E5%A5%B3&step_word=&hs=0&pn=3&spn=0&di=0&pi=&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&cs=2235727190%2C4256991982&os=2887449683%2C1759608205&simid=&adpicid=0&lpn=0&fm=&sme=&cg=&bdtype=14&simics=4001157220%2C1345190893&oriquery=&objurl=https%3A%2F%2Ftimgsa.baidu.com%2Ftimg%3Fimage%26quality%3D80%26size%3Db10000_10000%26sec%3D1493014698%26di%3D114ba27630bd07d45f9373f7e664436d%26src%3Dhttp%3A%2F%2Fv1.qzone.cc%2Fskin%2F201508%2F14%2F10%2F42%2F55cd55a1a51fe344.jpg!600x600.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bqz5gj_z%26e3BvvAzdH3FfhtgAzdH3Fojt4jtAzdH3Fcdnnnd_z%26e3Bip4s&gsm=0&cardserver=1',
                'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87%E6%AD%A3%E6%96%B9%E5%BD%A2%E7%BE%8E%E5%A5%B3&step_word=&hs=2&pn=80&spn=0&di=77514508060&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=2951955733%2C3545046975&os=2326008296%2C2554962319&simid=4199213905%2C522564252&adpicid=0&lpn=0&ln=1975&fr=&fmq=1493014418097_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205171732_ecTnY.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B17tpwg2_z%26e3Bv54AzdH3Frj5rsjAzdH3F4ks52AzdH3F8ab8anmm8AzdH3F1jpwtsAzdH3F&gsm=1e&rpstart=0&rpnum=0',
                'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87%E6%AD%A3%E6%96%B9%E5%BD%A2%E7%BE%8E%E5%A5%B3&step_word=&hs=2&pn=79&spn=0&di=196816781260&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=4124882609%2C3242334734&os=2333969471%2C2356780442&simid=4138843509%2C723236813&adpicid=0&lpn=0&ln=1975&fr=&fmq=1493014418097_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fv1.qzone.cc%2Fskin%2F201512%2F10%2F20%2F07%2F56696afd791ec600.jpg!600x600.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bqz5gj_z%26e3BvvAzdH3FfhtgAzdH3Fojt4jtAzdH3Fcmbcmn_z%26e3Bip4s&gsm=1e&rpstart=0&rpnum=0'
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TitleBar/>
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
                    renderRow={(rowData,sectionId,rowId)=>{return this._renderRow(rowData,sectionId,rowId)}}
                    renderHeader={()=>{return this._renderHeader()}}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    _renderHeader() {
        return (
            <View style={{flex:1,marginBottom:10}}>
                <Search/>
                <View style={{flex:1,backgroundColor:'white'}}>
                    <View style={{flex:1,height:1,backgroundColor:"#e4e4e4"}}/>
                    <View
                        style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./../../res/icon_hotnews.png')} style={{width:16,height:19}}/>
                            <Text style={{color:'#080808',fontSize:14,marginLeft:5}}>热点资讯</Text>
                        </View>
                        <Image source={require('./../../res/arrow_right.png')} style={{width:8,height:16}}/>
                    </View>
                    <View style={{flex:1,height:1,backgroundColor:"#e4e4e4"}}/>
                    <View
                        style={{flex:1,flexDirection:'row',alignItems:'center',paddingLeft:15,paddingRight:10,paddingTop:5}}>
                        <Image source={require('./../../res/newspoint.png')} style={{width:5,height:5,}}/>
                        <Text style={{color:'#8f9499',fontSize:13,marginLeft:5,overflow:'hidden'}} numberOfLines={1}>香港将迎首位女特首：出身贫寒
                            曾批“占中”乱港</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',paddingLeft:15,paddingRight:10,paddingTop:5,}}>
                        <Image source={require('./../../res/newspoint.png')} style={{width:5,height:5,}}/>
                        <Text style={{color:'#8f9499',fontSize:13,marginLeft:5,overflow:'hidden'}} numberOfLines={1}>香港将迎首位女特首：出身贫寒 曾批“占中”乱港</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',paddingLeft:15,paddingRight:10,paddingTop:5,paddingBottom:10}}>
                        <Image source={require('./../../res/newspoint.png')} style={{width:5,height:5,}}/>
                        <Text style={{color:'#8f9499',fontSize:13,marginLeft:5,overflow:'hidden'}} numberOfLines={1}>香港将迎首位女特首：出身贫寒 曾批“占中”乱港</Text>
                    </View>
                    <View style={{flex:1,height:1,backgroundColor:"#e4e4e4",}}/>
                </View>
            </View>
        )
    }

    _renderRow(rowData, sectionId, rowId) {
        if (rowId % 3 == 0) {
            return (
                <View style={styles.row}>
                    <ItemHeader/>
                    <View style={{flex:1,paddingLeft:10,paddingRight:10,}}>
                        <Text style={styles.detailText}>分享了一张名片</Text>
                        <View style={styles.link}>
                            <Image source={require('./../../res/header_default.png')} style={styles.userAvator}/>
                            <Text style={styles.linkTitle}>陈蓉的同城号名片</Text>
                        </View>
                        <Text style={styles.timeText}>9天前</Text>
                    </View>
                    <ItemFooter/>
                </View>
            )
        } else if (rowId % 3 == 1) {
            return (
                <View style={styles.row}>
                    <ItemHeader/>
                    <View style={{flex:1,paddingLeft:10,paddingRight:10}}>
                        <Text
                            style={styles.detailText}>人的虚妄幻想欲求逃避麻木软弱怪异愤怒堕落，如鬼魅一般穿梭，而无法走出来的人，就会陷入自己的心魔所制造的迷宫，徘徊不得出。</Text>
                        <Text style={styles.timeText}>9天前</Text>
                    </View>
                    <ItemFooter/>
                </View>
            )
        } else {
            return (
                <View style={styles.row}>
                    <ItemHeader/>
                    <View style={{flex:1,paddingLeft:10,paddingRight:10}}>
                        <Text style={styles.detailText}>尽管我们被城市的钢筋丛林所束缚，但有空时不妨翻开书卷，通过地理学，去看看那绚丽缤纷的花花世界。</Text>
                        <View style={styles.imgs}>
                            <Image source={require('./../../res/girl.jpg')} style={styles.img}/>
                            <Image source={require('./../../res/girl.jpg')} style={styles.img}/>
                            <Image source={require('./../../res/girl.jpg')} style={styles.img}/>
                            <Image source={require('./../../res/girl.jpg')} style={styles.img}/>
                            <Image source={require('./../../res/girl.jpg')} style={styles.img}/>
                            <Image source={require('./../../res/girl.jpg')} style={styles.img}/>
                            <Image source={require('./../../res/girl.jpg')} style={styles.img}/>
                            <Image source={require('./../../res/girl.jpg')} style={styles.img}/>
                            <Image source={require('./../../res/girl.jpg')} style={styles.img}/>
                        </View>
                        <Text style={styles.timeText}>9天前</Text>
                    </View>
                    <ItemFooter/>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    titleBar: {
        height: 56,
        backgroundColor: '#00A9F2',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleCenter: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    titleText: {
        color: '#ffffff',
        fontSize: 18
    },
    centerIcon: {
        width: 15,
        height: 16,
    },
    titleIcon: {
        width: 20,
        height: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    row: {
        flex: 1,
        backgroundColor: 'white'
    },
    itemHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 5,
    },
    userAvator: {
        width: 35,
        height: 35,
        borderRadius: 25,
    },
    userName: {
        color: '#3c71a3',
        fontSize: 14,
    },
    centerLine: {
        width: 1,
        height: 10,
        backgroundColor: '#E4E4E4',
        marginLeft: 3,
        marginRight: 3,
    },
    userTag: {
        color: '#8f9499',
        fontSize: 12,
    },
    userJob: {
        color: '#8f9499',
        fontSize: 12,
    },
    itemFooter: {},
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#E4E4E4',
    },
    shareText: {
        color: '#92959e',
        fontSize: 12,
        marginLeft: 5,
    },
    detailText: {
        color: '#080808',
        fontSize: 14,
    },
    link: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f7fbff',
        marginTop: 5,
    },
    linkTitle: {
        color: '#080808',
        fontSize: 14,
        marginLeft: 5,
    },
    timeText: {
        color: '#8f9499',
        fontSize: 12,
        marginTop: 5,
        marginBottom: 5,
    },
    imgs: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
    },
    img: {
        width: 100,
        height: 100,
        flexGrow: 1,
        flexShrink: 1,
        borderColor: 'white',
        borderWidth: 1,
    }
})