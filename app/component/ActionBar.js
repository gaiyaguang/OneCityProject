/**
 * Created by gyg on 2017/4/19.
 */
'use strict'
import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    ToolbarAndroid,
}from 'react-native';

export default class ActionBar extends Component{

    static  propTypes={
        title:React.PropTypes.string,
        navIcon:React.PropTypes.number,
        onIconClicked:React.PropTypes.func,
        actions:React.PropTypes.array,
        onActionSelected:React.PropTypes.func,
        backgroundColor:React.PropTypes.string,
    }

    static get defaultProps(){
        return{
            title:'同城号',
            navIcon:require('./../res/back.png'),
            onIconClicked:undefined,
            actions:[],
            onActionSelected:undefined,
            backgroundColor:'#00A9F2'
        }
    }

    render(){
        return(
            <View>
                <ToolbarAndroid style={{backgroundColor:this.props.backgroundColor,height:56}}
                                title={this.props.title}
                                navIcon={this.props.navIcon}
                                onIconClicked={this.props.onIconClicked}
                                actions={this.props.actions}
                                onActionSelected={this.props.onActionSelected}
                                titleColor='#ffffff'
                />
            </View>
        );
    }
}