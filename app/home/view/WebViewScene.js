/**
 * Created by gyg on 2017/5/4.
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    WebView,
    BackAndroid,
} from 'react-native';

class WebLoadingView extends Component {

    render() {
        return (
            <View style={{flex:1,justifyContent:'center',
        alignItems:'center',backgroundColor:'#f2f2f2'}}>
                <Text style={styles.loadingText}>
                    页面正在加载...
                </Text>
            </View>
        )
    }
}

export default class WebViewScene extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            url: "",
            title: "",
            loading: true,
            isBackButtonEnable: false,
            isForwardButtonEnable: false
        };
    }

    componentDidMount() {
        BackAndroid.addEventListener("webHardwareBackPress", ()=> {
            try {
                if (this.state.isBackButtonEnable) {
                    this.refs._webView.goBack();//返回上一个页面
                    return true;//true 系统不再处理 false交给系统处理
                }
            } catch (error) {
                return false;
            }
            return false;
        })
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener("webHardwareBackPress");
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    style={styles.webView}
                    ref="_webView"
                    source={{uri:this.props.route.extras.url}}//获取url参数
                    automaticallyAdjustContentInsets={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                    scalesPageToFit={true}
                    startInLoadingState={true}
                    renderLoading={()=>{return <WebLoadingView/>}}
                    onNavigationStateChange={this._onNavigationStateChange.bind(this)}
                />
            </View>
        )
    }

    //WebView导航状态改变
    _onNavigationStateChange(navState) {
        this.setState({
            url: navState.url,
            title: navState.title,
            loading: navState.loading,
            isBackButtonEnable: navState.canGoBack,
            isForwardButtonEnable: navState.canGoForward,
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
    },
    webview: {
        flex: 1,
    },
    loadingText: {
        color: '#8a8a8a',
        fontSize: 16
    }
})