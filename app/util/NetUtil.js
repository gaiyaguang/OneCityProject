/**
 * Created by gyg on 2017/4/24.
 */
'use strict'
import React, {Component} from 'react';
import {
    AsyncStorage,
}from 'react-native';
import * as Constant from './../common/Constant';
import * as HttpUrl from  './../common/HttpUrls';
import Sign from './Sign'
const DEBUG = HttpUrl.DEBUG;
export default class NetUtil extends Component {

    //get请求
    static get(url, params) {
        if (params) {
            let paramsArray = []
            for(var item of params.entries()){
                paramsArray.push(item[0]+'='+encodeURIComponent(item[1]));
            }
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
    }
        return this.request(url, 'get', undefined, params);
    }

    //pos请求
    static post(url, params) {
        var body = '';
        for (let item of params.entries()) {
            body += item[0] + "=" + item[1] + "&";
        }
        body = body.substring(0, body.length - 1);
        return this.request(url, 'post', body, params);
    }

    static async request(url, method, body, params) {
        DEBUG && console.log("#REQUEST NetUtil# [" + method + "] url=" + url + ",body=" + body);
        var timestamp=new Date().getTime()/1000;//当前时间毫秒值
        var user=await AsyncStorage.getItem('user');//缓存本地的用户数据
        var token='';//用户token
        if(user!=null){
            token=JSON.parse(user).token;
        }else{
            token='';
        }
        var sign= await Sign.createSign(params,timestamp);//获取签名
        return new Promise((resolve, reject)=> {
            fetch(url, {
                method: method,
                body: body,
                headers: new Headers({
                    'uid': '867909021770429',
                    'token':token,
                    'timestamp':timestamp,
                    'sign':sign,//签名
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Connection': 'close'
                }),
            })
                .then((response)=> {
                    if(response.ok){
                        return response.json();
                    }else{
                        reject("服务器错误!");
                    }
                })
                .then((json)=> {
                    DEBUG && console.log("#RESPONSE# NetUitl ["+method+"] url = "+url+", body = "+body+",responseData="+json);
                    if(json.code==Constant.SUCCESS){
                        resolve(json.data);
                    }else{
                        reject(data.msg);
                    }
                })
                .catch((error)=> {
                    DEBUG && console.log("#RESPONSE# NetUitl ["+method+"] url = "+url+", body = "+body+", error="+error);
                    reject("服务器错误!");
                });
        });
    }
}