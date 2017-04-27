/**
 * Created by gyg on 2017/4/21.
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableHighlight,
    AsyncStorage,
    ToastAndroid,
}from 'react-native';
import ActionBar from './../../component/ActionBar';
import NavigatorRoute from './../../common/NavigatorRoute';
import ForgetPwdScene from './ForgetPwdScene';
import NetUtil from '../../util/NetUtil';
import * as HttpUrl from '../../common/HttpUrls';

export default class LoginScene extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            username:'',
            password:'',
        };
    }

    //返回
    _onIconClick(){
        NavigatorRoute.navigatorPopBack(this.props.navigator);
    }

    //忘记密码
    _onForgetPass(){
        this.props.navigator.push({
            component:ForgetPwdScene,
        })
    }

    //登录
    _onLoginClick(){
        var params=new Map();
        params.set('username',this.state.username);
        params.set('password',this.state.password);
        params.set('cid','53b857f07b3ace9bdb2b99e0d65dc123');
        params.set('loDeviceInfo','AndroidA31');
        params.set('platfrom','Android');
        NetUtil.post(HttpUrl.LOGIN_URL,params)
            .then((result)=>{
               console.log("data:"+result);
                AsyncStorage.setItem("user",JSON.stringify(result));//保存用户数据到本地
                NavigatorRoute.replaceToMainScene(this.props.navigator);//跳转到主页
            },(error)=>{
                console.log("error:"+error);
                //ToastAndroid.show(error,ToastAndroid.SHORT);
            });
    }


    render() {
        return (
            <View style={styles.container}>
                <ActionBar title="登录" navigator={this.props.navigator} onIconClicked={this._onIconClick.bind(this)}/>
                <View style={styles.inputContainer}>
                    <View style={styles.itemInputContainer}>
                        <Image source={require('./../../res/icon_phone.png')} style={styles.icon}/>
                        <TextInput style={{flex:1,height:40}} placeholder='请输入您的手机号码'
                                   keyboardType={'numeric'} underlineColorAndroid={'transparent'} autoFocus={true}
                                   onChangeText={(text)=>this.setState({username:text})}/>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.itemInputContainer}>
                        <Image source={require('./../../res/icon_pass.png')} style={styles.icon}/>
                        <TextInput style={{flex:1,height:40}} placeholder='请输入您的密码'
                                   keyboardType={'default'} secureTextEntry={true} underlineColorAndroid={'transparent'} onChangeText={(text)=>this.setState({password:text})}/>
                    </View>
                </View>
                <TouchableHighlight onPress={this._onForgetPass.bind(this)} underlayColor={'transparent'}>
                    <Text
                        style={styles.forgetPassText}>忘记密码</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.loginBn} underlayColor={'#00A9F2'} onPress={this._onLoginClick.bind(this)}>
                    <Text style={styles.loginText}>登录</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    inputContainer: {
        marginLeft: 10,
        marginRight: 10,
        paddingLeft:10,
        paddingRight:10,
        marginTop: 30,
        borderStyle: 'solid',
        borderColor: '#cfd0d2',
        borderRadius: 3,
        borderWidth: 1,
    },
    line:{
        backgroundColor:'#cfd0d2',
        height: 1,
    },
    itemInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 15,
        height: 15,
    },
    forgetPassText: {
        color: '#7A7E83',
        fontSize: 14,
        alignSelf: 'flex-end',
        marginTop: 20,
        marginRight: 10,
        textDecorationLine: 'underline',
        textDecorationStyle: "solid",
        textDecorationColor: '#7A7E83'
    },
    loginBn: {
        backgroundColor: '#00A9F2',
        borderStyle:null,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        margin:10,
        padding:10,
    },
    loginText: {
        color: '#ffffff',
        fontSize: 16
    }

});