/**
 * Created by gyg on 2017/4/14.
 */
'use strict'
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import Search from './../../component/Search';
import {TitleBar} from './../../message/view/MessageScene';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from './../../component/CustomTabBar';
import FindList from './FindList';

export default class FindScene extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(){
        return(
            <View style={styles.container}>
                <TitleBar title="发现" onRightPress={this._onRightPress.bind(this)}/>
                <Search/>
                <View style={{height:1,backgroundColor:'#e4e4e4'}}/>
                <View style={{flexDirection:'row',backgroundColor:'white'}}>
                    <View style={styles.gridItem}>
                        <Image source={require('./../../res/find_store.png')} style={styles.gridImg}/>
                        <Text style={styles.gridText}>门店</Text>
                    </View>
                    <View style={styles.gridLine}/>
                    <View style={styles.gridItem}>
                        <Image source={require('./../../res/find_activity.png')} style={styles.gridImg}/>
                        <Text style={styles.gridText}>活动</Text>
                    </View>
                    <View style={styles.gridLine}/>
                    <View style={styles.gridItem}>
                        <Image source={require('./../../res/find_loacl.png')} style={styles.gridImg}/>
                        <Text style={styles.gridText}>同城号</Text>
                    </View>
                    <View style={styles.gridLine}/>
                    <View style={styles.gridItem}>
                        <Image source={require('./../../res/find_information.png')} style={styles.gridImg}/>
                        <Text style={styles.gridText}>资讯</Text>
                    </View>
                </View>
                <View style={{height:1,backgroundColor:'#e4e4e4'}}/>

                <View style={{height:1,backgroundColor:'#e4e4e4',marginTop:10}}/>
                <ScrollableTabView
                    renderTabBar={()=><CustomTabBar/>}
                style={{flex:1,backgroundColor:'white'}}
                tabBarBackgroundColor="white"
                tabBarInactiveTextColor="#494949"
                tabBarActiveTextColor="#00A9F2"
                tabBarUnderlineStyle={{backgroundColor:'#00A9F2'}}
                >
                    <FindList tabLabel="精选"/>
                    <FindList tabLabel="同城"/>
                    <FindList tabLabel="资讯"/>
                    <FindList tabLabel="活动"/>
                    <FindList tabLabel="话题"/>
                </ScrollableTabView>
            </View>
        )
    }

    _onRightPress(){

    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f2f2f2',
    },
    gridItem:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        padding:15
    },
    gridImg:{
        width:25,
        height:20,
    },
    gridText:{
        color:'#696969',
        fontSize:14,
        marginTop:10,
    },
    gridLine:{
        width:1,
        backgroundColor:'#e4e4e4',
    }
})
