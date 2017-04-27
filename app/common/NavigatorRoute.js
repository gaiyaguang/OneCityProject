/**
 * Created by gyg on 2017/4/17.
 */
'use strict'
import React,{Component} from 'react';
import {
    BackAndroid,
    Alert,
}from 'react-native';
import MainScene from './../MainScene';
import LoginMainScene from './../login/view/LoginMainScene';

export default class NavigatorRoute extends Component{

    //返回
    static navigatorPopBack(navigator){
        if(navigator&&navigator.getCurrentRoutes().length>1){
            console.log('----------navigatorPopBack-1');
            navigator.pop();
            return true;
        }
        Alert.alert(
            '退出应用',
            '主人,您真的不需要奴婢为您服务了吗？',
            [{text:'需要', onPress:()=>{}},
                {text:'不需要',onPress:()=>{BackAndroid.exitApp()}}
            ]
        );
        return true;
    }

    //切换到主页面
    static replaceToMainScene(navigator){
        navigator.replace({
            component:MainScene,
        })
    }
    
    //切换到登录主页面
    static replaceToLoginMain(navigator){
        navigator.replace({
            component:LoginMainScene,
        })
    }

    
}