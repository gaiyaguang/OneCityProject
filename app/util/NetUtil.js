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
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))
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

    static request(url, method, body, params) {
        DEBUG && console.log("#REQUEST NetUtil# [" + method + "] url=" + url + ",body=" + body);
        return new Promise((resolve, reject)=> {
            fetch(url, {
                method: method,
                body: body,
                headers: new Headers({
                    'uid': '867909021770429',
                    'token':'',
                    'timestamp':'1493264340',
                    'sign':Sign.createSign(params),//签名
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