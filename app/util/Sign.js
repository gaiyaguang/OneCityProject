/**
 * Created by gyg on 2017/4/24.
 */
'use strict'
import React,{Component} from 'react';
import {
    NativeModules,
    AsyncStorage,
} from 'react-native';
import * as HttpUrl from './../common/HttpUrls';
var EncryptionModule=NativeModules.EncryptionModule
const DEBUG=HttpUrl.DEBUG;
export default class Sign extends Component{
    
    static async createSign(map,timestamp){
        if(map==null) map=new Map();
        map.set('uid','867909021770429');
        var user=await AsyncStorage.getItem('user');
        map.set('token',user==null?'':JSON.parse(user).token);
        map.set('timestamp',timestamp);
        map.set('key','ABcdeFGHIjklMN');
        var keys=Array.from(map.keys()).sort();
        var sb='';
        for(let key of keys){
            sb+=key+"="+map.get(key)+"&"
        }
        sb=sb.substring(0,sb.length-1);
        var sign=await EncryptionModule.MD5ByPromise(sb);//md5加密
        DEBUG&&console.log("sign:"+sign);
        return sign;
    }

}
