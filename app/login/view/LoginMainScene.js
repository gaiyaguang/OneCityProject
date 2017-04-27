/**
 * Created by gyg on 2017/4/13.
 */
'use strict'
import React, {Component} from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableHighlight,
}from 'react-native';
import LoginScene from './LoginScene';
import RegisterScene from './RegisterScene';

export default class LoginMainScene extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1,flexDirection:'row',alignItems:'flex-end',justifyContent:'center'}}>
                    <Image source={require('./../../res/longok.png')} style={styles.image}/>
                </View>
                <View style={{flex: 1,flexDirection:'row',alignItems:'flex-end',justifyContent:'center'}}>
                    <View style={styles.linearBottom}>
                        <TouchableHighlight style={styles.bnLogin} underlayColor={'#ffffff'} onPress={this._onLoginPressed.bind(this)}>
                            <Text style={styles.loginText}>登录</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.bnRegister} underlayColor={'#00A9F2'}onPress={this._onRegisterPressed.bind(this)}>
                            <Text style={styles.registerText}>注册</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }

    //登录
    _onLoginPressed() {
        this.props.navigator.push({
            component: LoginScene,
        })
    }

    //注册
    _onRegisterPressed() {
        this.props.navigator.push({
            component: RegisterScene,
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00A9F2',
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150,
    },
    linearBottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'nowrap',
        marginBottom: 30,
        paddingLeft: 10,
        paddingRight: 10
    },
    bnLogin: {
        backgroundColor: '#ffffff',
        borderStyle: null,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flexGrow: 1,
    },
    bnRegister: {
        backgroundColor: '#00A9F2',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flexGrow: 1,
        marginLeft: 10,
    },
    loginText: {
        color: '#00A9F2',
        fontSize: 14,
    },
    registerText: {
        color: '#ffffff',
        fontSize: 14,
    },
})

