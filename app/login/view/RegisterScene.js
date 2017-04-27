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
}from 'react-native';
import NavigatorRoute from './../../common/NavigatorRoute';
import ActionBar from './../../component/ActionBar';

export default class RegisterScene extends Component {
    
    //返回
    _onIconClick(){
        NavigatorRoute.navigatorPopBack(this.props.navigator);
    }

    //注册
    _onRegisterClick(){

    }

    //验证码
    _onCheckCodeClick(){

    }

    render() {
        return (
            <View style={styles.container}>
                <ActionBar title="注册" onIconClicked={this._onIconClick.bind(this)}/>
                <View style={styles.inputContainer}>
                    <View style={styles.itemInputContainer}>
                        <Image source={require('./../../res/icon_phone.png')} style={styles.icon}/>
                        <TextInput style={{flex:1,height:40}} placeholder='请输入您的手机号码'
                                   keyboardType={'numeric'} underlineColorAndroid={'transparent'} autoFocus={true}/>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.itemInputContainer}>
                        <Image source={require('./../../res/icon_phone.png')} style={styles.icon}/>
                        <TextInput style={{flex:1,height:40}} placeholder='请输入您的验证码'
                                   keyboardType={'numeric'} secureTextEntry={true} underlineColorAndroid={'transparent'}/>
                        <TouchableHighlight style={styles.checkCodeContainer} onPress={this._onCheckCodeClick.bind(this)}>
                            <Text style={styles.checkCodeText}>获取验证码</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.itemInputContainer}>
                        <Image source={require('./../../res/icon_pass.png')} style={styles.icon}/>
                        <TextInput style={{flex:1,height:40}} placeholder='请输入您的密码'
                                   keyboardType={'default'} secureTextEntry={true} underlineColorAndroid={'transparent'}/>
                    </View>
                </View>
                <TouchableHighlight style={styles.registerBn} underlayColor={'#00A9F2'} onPress={this._onRegisterClick.bind(this)}>
                    <Text style={styles.registerText}>注册</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f2f2f2',
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
    itemInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line:{
        backgroundColor:'#cfd0d2',
        height: 1,
    },
    icon: {
        width: 15,
        height: 15,
    },
    checkCodeContainer:{
        borderStyle:'solid',
        borderRadius:3,
        borderColor:'#00A9F2',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
    },
    checkCodeText:{
      color:"#00A9F2",
        fontSize:12,
    },
    registerBn: {
        backgroundColor: '#00A9F2',
        borderStyle:null,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        marginLeft:10,
        marginRight:10,
        padding:10,
    },
    registerText: {
        color: '#ffffff',
        fontSize: 16
    }
})
