/**
 * Created by gyg on 2017/4/25.
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
}from 'react-native';

export default class Search extends Component{
    render(){
        return(
            <View style={{backgroundColor:'#f2f2f2'}}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',padding:5,margin: 10,borderStyle:null,borderRadius:3,backgroundColor:'white'}}>
                    <Image source={require('./../res/icon_search.png')} style={{width:13,height:13}}/>
                    <Text style={{color:'#7F7F7F',fontSize:14,marginLeft:3}}>搜索</Text>
                </View>
            </View>
        )
    }
}