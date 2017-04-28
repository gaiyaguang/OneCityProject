/**
 * Created by gyg on 2017/4/21.
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    TextInput,
    Text,
    TouchableHighlight,
    ToastAndroid,
}from 'react-native';
import NavigatorRoute from './../../common/NavigatorRoute';
import ActionBar from './../../component/ActionBar';
import NetUtil from '../../util/NetUtil';
import * as HttpUrl from '../../common/HttpUrls';

export default class RegisterScene extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            checkContainerStyle: styles.checkCodeContainer,//获取验证码容器style
            checkTextStyle: styles.checkCodeText,//获取验证码文字style
            checkText: "获取验证码",//获取验证码按钮显示文字
            userName: '',//手机号
            checkCode: '',//验证码
            password: ''//新密码
        };
    }

    componentDidMount() {
        this.refs.checkContainer.enabled = true;//设置获取验证码按钮可点击
    }

    render() {
        return (
            <View style={styles.container}>
                <ActionBar title="忘记密码" onIconClicked={this._onIconClick.bind(this)}/>
                <View style={styles.inputContainer}>
                    <View style={styles.itemInputContainer}>
                        <Image source={require('./../../res/icon_phone.png')} style={styles.icon}/>
                        <TextInput style={{flex:1,height:40}} placeholder='请输入您的手机号码'
                                   keyboardType={'numeric'} underlineColorAndroid={'transparent'} autoFocus={true}
                                   onChangeText={(text)=>{
                                   this.setState({
                                   userName:text,
                                   })
                                   }}/>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.itemInputContainer}>
                        <Image source={require('./../../res/icon_phone.png')} style={styles.icon}/>
                        <TextInput style={{flex:1,height:40}} placeholder='请输入您的验证码'
                                   keyboardType={'numeric'} secureTextEntry={true} underlineColorAndroid={'transparent'}
                                   onChangeText={(text)=>{
                                   this.setState({
                                   checkCode:text,
                                   })
                                   }}/>
                        <TouchableHighlight style={this.state.checkContainerStyle} underlayColor={'transparent'}
                                            onPress={this._onCheckCodeClick.bind(this)} ref="checkContainer">
                            <Text style={this.state.checkTextStyle} ref="checkText">{this.state.checkText}</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.itemInputContainer}>
                        <Image source={require('./../../res/icon_pass.png')} style={styles.icon}/>
                        <TextInput style={{flex:1,height:40}} placeholder='请输入新的密码'
                                   keyboardType={'default'} secureTextEntry={true} underlineColorAndroid={'transparent'}
                                   onChangeText={(text)=>{
                                   this.setState({
                                   password:text,
                                   })
                                   }}/>
                    </View>
                </View>
                <TouchableHighlight style={styles.registerBn} underlayColor={'#00A9F2'}
                                    onPress={this._onCommitClick.bind(this)}>
                    <Text style={styles.registerText}>提交</Text>
                </TouchableHighlight>
            </View>
        )
    }

    //返回上一级页面
    _onIconClick() {
        NavigatorRoute.navigatorPopBack(this.props.navigator);
    }

    //提交更改密码请求
    _onCommitClick() {
        var params = new Map();
        params.set('username', this.state.userName);
        params.set('code', this.state.checkCode);
        params.set('pwd', this.state.password);
        params.set('type', '2');
        NetUtil.post(HttpUrl.FORGET_PWD_URL, params)
            .then((result)=> {
                ToastAndroid.show('更改密码成功!', ToastAndroid.SHORT);
                NavigatorRoute.navigatorPopBack(this.props.navigator);//返回到登陆页面
            }, (error)=> {
                ToastAndroid.show(error, ToastAndroid.SHORT);//提示错误信息
            });
    }

    //获取验证码请求
    _onCheckCodeClick() {
        this.refs.checkContainer.enabled = false;//设置按钮不可点击
        this.setState({
            checkContainerStyle: styles.checkCodeContainerGray,
            checkTextStyle: styles.checkCodeTextGray,
            checkText: '60s'
        });
        var time = 60;
        var interval = setInterval(()=> {
            this.setState({
                checkText: time + "s",
            });
            if (time <= 0) {
                clearInterval(interval);
                this.setState({
                    checkContainerStyle: styles.checkCodeContainer,
                    checkTextStyle: styles.checkCodeText,
                    checkText: '获取验证码',
                });
                this.refs.checkContainer.enabled = true;
            }
            time = time - 1;
        }, 1000);//每隔1s时间-1
        var params = new Map();
        params.set('phone', this.state.userName);
        params.set('type', '2');
        NetUtil.get(HttpUrl.GET_CHECK_CODE, params)
            .then((result)=> {
                ToastAndroid.show("验证码发送成功!", ToastAndroid.SHORT);
            }, (error)=> {
                ToastAndroid.show(error, ToastAndroid.SHORT);
            });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    inputContainer: {
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 30,
        borderStyle: 'solid',
        borderColor: '#cfd0d2',
        borderRadius: 3,
        borderWidth: 1,
    },
    itemInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        backgroundColor: '#cfd0d2',
        height: 1,
    },
    icon: {
        width: 15,
        height: 15,
    },
    checkCodeContainer: {
        borderStyle: 'solid',
        borderRadius: 3,
        borderColor: '#00A9F2',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    checkCodeContainerGray: {
        borderStyle: 'solid',
        borderRadius: 3,
        borderColor: '#cfd0d2',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    checkCodeText: {
        color: "#00A9F2",
        fontSize: 12,
    },
    checkCodeTextGray: {
        color: "#b2b2b3",
        fontSize: 12,
    },
    registerBn: {
        backgroundColor: '#00A9F2',
        borderStyle: null,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
    },
    registerText: {
        color: '#ffffff',
        fontSize: 16
    }
})
