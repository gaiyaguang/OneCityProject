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
    Image,
    TouchableHighlight,
}from 'react-native';
import {connect}from 'react-redux';
import Search from './../../component/Search';
import NetUtil from '../../util/NetUtil';
import * as HttpUrl from '../../common/HttpUrls';
import * as ActionTypes from '../../common/ActionTypes';
import WebViewScene from './WebViewScene';

//标题栏
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
//item共同header
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
class HomeScene extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 != r2})
        this.state = {
            dataSource: ds,
        };
    }

    componentDidMount() {
        this.props.dispatch(this._fetchData());
    }

    render() {
        return (
            <View style={styles.container}>
                <TitleBar/>
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(this.props.dynamicList.dynamicList)}
                    renderRow={(rowData,sectionId,rowId)=>{return this._renderRow(rowData,sectionId,rowId)}}
                    renderHeader={()=>{return this._renderHeader()}}
                    showsVerticalScrollIndicator={false}
                    enableEmptySections={true}
                    initialListSize={10}
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
                        style={{flex:1,flexDirection:'row',alignItems:'center',paddingLeft:15,paddingRight:10,paddingTop:5}}
                    >
                        <Image source={require('./../../res/newspoint.png')} style={{width:5,height:5,}}/>
                        <TouchableHighlight underlayColor={'transparent'} onPress={this._onNewsClick.bind(this)}>
                            <Text style={{color:'#8f9499',fontSize:13,marginLeft:5,overflow:'hidden'}}
                                  numberOfLines={1}>香港将迎首位女特首：出身贫寒
                                曾批“占中”乱港</Text>
                        </TouchableHighlight>
                    </View>
                    <View
                        style={{flex:1,flexDirection:'row',alignItems:'center',paddingLeft:15,paddingRight:10,paddingTop:5}}
                    >
                        <Image source={require('./../../res/newspoint.png')} style={{width:5,height:5,}}/>
                        <TouchableHighlight underlayColor={'transparent'} onPress={this._onNewsClick.bind(this)}>
                            <Text style={{color:'#8f9499',fontSize:13,marginLeft:5,overflow:'hidden'}}
                                  numberOfLines={1}>香港将迎首位女特首：出身贫寒
                                曾批“占中”乱港</Text>
                        </TouchableHighlight>
                    </View>
                    <View
                        style={{flex:1,flexDirection:'row',alignItems:'center',paddingLeft:15,paddingRight:10,paddingTop:5,paddingBottom:5}}
                    >
                        <Image source={require('./../../res/newspoint.png')} style={{width:5,height:5,}}/>
                        <TouchableHighlight underlayColor={'transparent'} onPress={this._onNewsClick.bind(this)}>
                            <Text style={{color:'#8f9499',fontSize:13,marginLeft:5,overflow:'hidden'}}
                                  numberOfLines={1}>香港将迎首位女特首：出身贫寒
                                曾批“占中”乱港</Text>
                        </TouchableHighlight>
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

    _onNewsClick() {
        this.props.navigator.push({
            component: WebViewScene,
            extras: {
                url: 'https://www.jd.com',
            }
        })
    }

    //获取动态列表
    _fetchData() {
        var params = new Map();
        params.set('pageNo', 1);
        params.set('pageSize', 20);
        params.set('version', '1.0.1');
        params.set('platform', 'android');
        params.set('provinceCode', '310000');
        return dispatch=> {
            NetUtil.get(HttpUrl.QUERY_DYNAMIC_LIST, params)
                .then((result)=> {
                    console.log(result);
                    dispatch({
                        type: ActionTypes.ACTION_DYNAMIC_LIST,
                        dynamicList: result,
                    })
                }, (error)=> {
                    console.log('error' + error);
                });
        }
    }

}

function mapStateToProps(state) {
    const {dynamicList}=state;
    return {
        dynamicList,
    }
}

export default connect(mapStateToProps)(HomeScene);

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