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

export class TitleBar extends Component {

    static propTypes = {
        title: React.PropTypes.string,
        onRightPress: React.PropTypes.func,
    }

    render() {
        return (
            <View style={styles.titleBar}>
                <Text style={styles.titleText}>{this.props.title}</Text>
                <Image source={require('./../../res/add.png')} style={styles.titleIcon}
                       onPress={this.props.onRightPress}/>
            </View>
        )
    }
}

export class MessageScene extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 != r2})
        this.state = {
            dataSource: ds,
            data: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'c', 'd', 'e', 'f', 'g']
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TitleBar title="消息" onRightPress={this._onRightPress.bind(this)}/>
                <ListView
                dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
                renderRow={(rowData,sectionId,rowId)=>{return this._renderRow(rowData,sectionId,rowId)}}
                showsVerticalScrollIndicator={false}
            />
            </View>
        )
    }

    _renderRow(rowData, sectionId, rowId) {
        return (
            <View style={{flex:1}}>
                <View style={styles.row}>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                        <Image source={require('./../../res/header_default.png')} style={styles.msgHeader}/>
                        <View style={{justifyContent:'center'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={styles.msgTitle}>盖亚光</Text>
                                <View style={styles.line}/>
                                <Text style={styles.msgTag}>上海世途信息科技有限公司</Text>
                                <Image style={styles.msgVer} source={require('./../../res/v.png')}/>
                            </View>
                            <Text style={styles.msgContent}>
                                冯氏：你好！
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.msgTime}>
                        9:35
                    </Text>
                </View>
                <View style={{flex:1,height:0.5,backgroundColor:'#E4E4E4'}}/>
            </View>
        )
    }

    //标题右侧按钮点击事件
    _onRightPress() {

    }
}

const styles = StyleSheet.create({
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 56,
        backgroundColor: '#00A9F2',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    titleText: {
        color: '#ffffff',
        fontSize: 18,
    },
    titleIcon: {
        width: 20,
        height: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
    },
    msgHeader: {
        width: 35,
        height: 35,
        borderRadius: 35,
    },
    msgTime: {
        color: '#b1b1b1',
        fontSize: 12,
        alignSelf: 'flex-start',
        marginLeft: 10,
    },
    msgTitle: {
        color: '#080808',
        fontSize: 14,
        marginLeft:5,
    },
    line: {
        width: 1.5,
        height: 10,
        backgroundColor: '#E4E4E4',
        marginLeft: 3,
        marginRight: 3,
    },
    msgTag: {
        color: '#00a9f2',
        fontSize: 14,
    },
    msgVer: {
        width: 10,
        height: 10,
        marginLeft: 3,
    },
    msgContent: {
        color: '#8a8a8a',
        fontSize: 14,
        marginLeft: 5,
        alignSelf:'flex-start'
    }
})