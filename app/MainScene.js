/**
 * Created by gyg on 2017/4/14.
 */
'use strict'

import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
}from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomeScene from './home/view/HomeScene';
import MessageScene from './message/view/MessageScene';
import ContactScene from './contact/view/ContactScene';
import FindScene from './find/view/FindScene';
import MineScene from './mine/view/MineScene';

export default class MainScene extends Component {

    static propTypes = {
        navigator: React.PropTypes.object.isRequired,
        route: React.PropTypes.object.isRequired,
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab: 'home',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator tabBarStyle={{backgroundColor:'#f8f8f8'}} style={{backgroundColor: '#f8f8f8'}}>
                    <TabNavigator.Item
                        title="首页"
                        selected={this.state.selectedTab==='home'}
                        titleStyle={{color:'#6d797e'}}
                        selectedTitleStle={{color:'#00a9f2'}}
                        renderIcon={()=><Image source={require('./res/home_default.png')} style={styles.tabIcon}/>}
                        renderSelectedIcon={()=><Image source={require('./res/home_selected.png')}style={styles.tabIcon}/>}
                        onPress={()=>this.setState({selectedTab:'home'})}
                    >
                    <HomeScene
                    navigator={this.props.navigator}
                    route={this.props.route}
                    />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="消息"
                        selected={this.state.selectedTab==='message'}
                        titleStyle={{color:'#6d797e'}}
                        selectedTitleStle={{color:'#00a9f2'}}
                        renderIcon={()=><Image source={require('./res/message_default.png')} style={styles.tabIcon}/>}
                        renderSelectedIcon={()=><Image source={require('./res/message_selected.png')} style={styles.tabIcon}/>}
                        onPress={()=>this.setState({selectedTab:'message'})}
                    >
                        <MessageScene
                            navigator={this.props.navigator}
                            route={this.props.route}
                        />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="通讯录"
                        selected={this.state.selectedTab==='contact'}
                        titleStyle={{color:'#6d797e'}}
                        selectedTitleStle={{color:'#00a9f2'}}
                        renderIcon={()=><Image source={require('./res/contact_default.png')} style={styles.tabIcon}/>}
                        renderSelectedIcon={()=><Image source={require('./res/contact_selected.png')} style={styles.tabIcon}/>}
                        onPress={()=>this.setState({selectedTab:'contact'})}
                    >
                        <ContactScene
                            navigator={this.props.navigator}
                            route={this.props.route}
                        />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="发现"
                        selected={this.state.selectedTab==='find'}
                        titleStyle={{color:'#6d797e'}}
                        selectedTitleStle={{color:'#00a9f2'}}
                        renderIcon={()=><Image source={require('./res/find_default.png')} style={styles.tabIcon}/>}
                        renderSelectedIcon={()=><Image source={require('./res/find_selected.png')} style={styles.tabIcon}/>}
                        onPress={()=>this.setState({selectedTab:'find'})}
                    >
                        <FindScene
                            navigator={this.props.navigator}
                            route={this.props.route}
                        />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="我的"
                        selected={this.state.selectedTab==='mine'}
                        titleStyle={{color:'#6d797e'}}
                        selectedTitleStle={{color:'#00a9f2'}}
                        renderIcon={()=><Image source={require('./res/mine_default.png')} style={styles.tabIcon}/>}
                        renderSelectedIcon={()=><Image source={require('./res/mine_selected.png')} style={styles.tabIcon}/>}
                        onPress={()=>this.setState({selectedTab:'mine'})}
                    >
                        <MineScene
                            navigator={this.props.navigator}
                            route={this.props.route}
                        />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    tabIcon:{
        width:24,
        height:24
    }
})
