/**
 * Created by gyg on 2017/4/17.
 */
'use strict'
import React, {Component} from 'react';
import {
    Navigator,
    BackAndroid,
} from 'react-native';
import NavigatorRoute from './NavigatorRoute';
import WelcomScene from './../login/view/WelcomScene';

var _navigator = null;
export default class NavigatorRoot extends Component {

    render() {
        return (
            <Navigator style={{flex:1}}
                       configureScene={this._configureScene}
                       renderScene={this._renderScene}
                       initialRoute={{
                       component:WelcomScene,
                       }}
            />
        )
    }

    _configureScene() {
        return Navigator.SceneConfigs.PushFromRight;
    }

    _renderScene(route, navigator) {
        let Component = route.component;
        _navigator = navigator;
        return (<Component navigator={navigator} route={route}/>)
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', ()=> {
            return NavigatorRoute.navigatorPopBack(_navigator);
        })
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress')
    }
}