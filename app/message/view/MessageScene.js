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
import * as ActionType from '../../common/ActionTypes';
import CustomModal from '../../component/CustomModal';

export class TitleBar extends Component {

    render() {
        return (
            <View style={styles.titleBar}>
                <Text style={styles.titleText}>{this.props.title}</Text>
                <TouchableHighlight onPress={this.props.onRightPress} underlayColor={'transparent'}>
                    <Image source={require('./../../res/add.png')} style={styles.titleIcon}
                           />
                </TouchableHighlight>
            </View>
        )
    }
};

const Realm=require('realm');//引入Realm模块
const RecentMessageSchema={//定义RecentMessge表结构
    name:'RecentMessage',//表名称
    primaryKey:'id',//主键
    properties:{//表字段
        id:{type:'int',indexed:true,},//消息唯一标识符 indexed表示此属性可以被索引，支持int,string,bool类型值
        avatar:{type:'int',optional:true},//消息发送者头像 optional表示此属性是可选属性，属性值可以为null或undefined。
        userName:'string',//消息发送者姓名
        userTag:{type:'string',defaultValue:'上海世途信息科技有限公司'},//消息发送者标签 defaultValue定义属性默认值
        isVertify:{type:'bool',defaultValue:false},//消息发送者是否认证
        time:'int',//消息发送时间
        content:'string',//消息内容
    }
};
var realm=new Realm({schema:[RecentMessageSchema]});
class MessageScene extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 != r2})
        this.state = {
            dataSource: ds,
            modalVisibility:false,
            selectedId:null,
        };
    }

    componentDidMount() {
        this._addRealm();
        this._updataRealm();
        this.props.dispatch(this._fetchData());//获取消息列表数据
    }


    //增加操作
    _addRealm(){
        for(var i=0;i<10;i++){
            realm.write(()=>{
                let item=realm.create('RecentMessage',{//在RecentMessage表中插入一条记录
                    id:i,
                    avatar:require('../../res/zz.jpg'),
                    userName:'宇智波佐助',
                    userTag:'万花筒血轮眼',
                    isVertify:true,
                    time:new Date().getTime(),
                    content:'我要摧毁木叶！！！'
                },true);
                console.log(item)
            });
        }
    }

    //更改操作
    _updataRealm(){
        for(var i=0;i<10;i++){
            if(i%2==1){//更改所有id值为奇数的数据
                realm.write(()=>{
                    realm.create('RecentMessage',{
                        id:i,
                        avatar:require('../../res/mr.jpg'),
                        userName:'漩涡鸣人',
                        userTag:'九尾人柱力',
                        isVertify:true,
                        content:'我要成为火影！！！'
                    },true)//true 当有相同主键的项时则更新之前数据，而不是新建一条
                });
            }
        }
    }

    //查询操作
    _queryRealm(){
        let messages=realm.objects("RecentMessage");//查询出RecentMessage表中所有记录
        let zz=messages.filtered('userName CONTAINS "宇智波佐助"');//过滤出佐助的所有消息记录
        let mr=messages.filtered("userName CONTAINS '漩涡鸣人'");//过滤出漩涡名人的所有消息记录
        let sortZz=zz.sorted('time');//根据time对查询出的佐助记录进行排序
        let sortMr=mr.sorted('time');//根据tiem对查询出的鸣人记录进行排序
        console.log('排序后的佐助记录：');
        console.log(sortZz);
        console.log("排序后的鸣人记录：");
        console.log(sortMr);
    }

    //获取消息列表数据
        _fetchData(){
        let messages=realm.objects("RecentMessage").sorted('time');
        return dispatch=>{
            dispatch({
                type:ActionType.ACTION_MESSAGE_LIST,
                messageList:messages
            });
        }
    }

    //删除操作
    _deleteRealm(rowId){
        realm.write(()=>{
            let message=realm.objects('RecentMessage').filtered('id=='+rowId);//过滤出id值为7的记录
            realm.delete(message);//删除
        });
    }

    //弹出框确定按钮点击
    _onModalRightPress(){
        if(this.state.selectedId){
            this._deleteRealm(this.state.selectedId-1);
            this.setState({selectedId:null,modalVisibility:false})
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomModal ref="_customModal" title="温馨提示" message="确定您要删除此条聊天记录吗？" visibility={this.state.modalVisibility} onLeftPress={()=>{this.setState({modalVisibility:false})}} onRightPress={this._onModalRightPress.bind(this)}/>
                <TitleBar title="消息" onRightPress={this._onRightPress.bind(this)}/>
                <ListView
                dataSource={this.state.dataSource.cloneWithRows(this.props.messageList.messageList)}
                renderRow={(rowData,sectionId,rowId)=>{return this._renderRow(rowData,sectionId,rowId)}}
                showsVerticalScrollIndicator={false}
                enableEmptySections={true}
            />
            </View>
        )
    }

    _renderRow(rowData, sectionId, rowId) {
        return (
            <View style={{flex:1}}>
                <TouchableHighlight underlayColor={'#E4E4E4'} onPress={()=>{this.setState({modalVisibility:true,selectedId:rowId})}}>
                    <View style={styles.row}>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <Image source={rowData.avatar} style={styles.msgHeader}/>
                            <View style={{justifyContent:'center'}}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Text style={styles.msgTitle}>{rowData.userName}</Text>
                                    <View style={styles.line}/>
                                    <Text style={styles.msgTag}>{rowData.userTag}</Text>
                                </View>
                                <Text style={styles.msgContent}>
                                    {rowData.content}
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.msgTime}>
                            {rowData.time}
                        </Text>
                    </View>
                </TouchableHighlight>
                <View style={{flex:1,height:0.5,backgroundColor:'#E4E4E4'}}/>
            </View>
        )
    }

    //标题右侧按钮点击事件
    _onRightPress() {

    }
}

function mapStateToProps(state) {
    const {messageList}=state;
    return {
        messageList
    }
}

export default connect(mapStateToProps)(MessageScene);

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
        fontSize: 12,
    },
    msgVer: {
        width: 10,
        height: 10,
        marginLeft: 3,
    },
    msgContent: {
        color: '#8a8a8a',
        fontSize: 12,
        marginLeft: 5,
        alignSelf:'flex-start'
    }
})