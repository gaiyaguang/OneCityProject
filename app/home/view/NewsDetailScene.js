/**
 * Created by gyg on 2017/5/4.
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    WebView,
    BackAndroid,
} from 'react-native';
import {connect} from 'react-redux';
import ActionBar from '../../component/ActionBar';
import NavigatorRoute from '../../common/NavigatorRoute';

class NewsDetailScene extends Component {

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
                    this.refs._webView.goBack();
                    return true;
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
                <ActionBar title="资讯" onIconClicked={this._onIconClick.bind(this)}/>
                <WebView
                    style={styles.webView}
                    ref="_webView"
                    source={{uri:this.props.route.extras.url}}
                    automaticallyAdjustContentInsets={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                    scalesPageToFit={true}
                    onNavigationStateChange={this._onNavigationStateChange.bind(this)}
                />
            </View>
        )
    }

    //返回
    _onIconClick() {
        NavigatorRoute.navigatorPopBack(this.props.navigator);
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

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(NewsDetailScene);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2"
    },
    webview: {
        flex: 1,
    }
})