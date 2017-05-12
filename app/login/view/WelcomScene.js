/**
 * Created by gyg on 2017/4/11.
 */
'use strict'
import React, {Component} from 'react'
import {
    View,
    Image,
    StyleSheet,
    AsyncStorage,
} from 'react-native'
import NavigatorRoute from '../../common/NavigatorRoute';

export default class WelcomScene extends Component {

    static propTypes={
        navigator:React.PropTypes.object.isRequired,
        route:React.PropTypes.object.isRequired,
    }

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            curSecond:3,
        };
      }

    componentDidMount() {
        this.timer=setInterval(
            ()=>{
                if(this.state.curSecond<=0){
                    this.timer&&clearInterval(this.timer);
                    this._initSwitchScene().done();
                    return;
                }
                this.setState({
                    curSecond:--this.state.curSecond,
                });
            },1000)
    }

    componentWillUnmount() {
        this.timer&&clearInterval(this.timer);
    }

    async _initSwitchScene(){
        try{
            var value=await AsyncStorage.getItem('user');
            if(value!=null){
                NavigatorRoute.replaceToMainScene(this.props.navigator);
            }else{
                NavigatorRoute.replaceToLoginMain(this.props.navigator );
            }
        }catch(e){
            console.log("AsyncStorage错误"+e)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                       source={require('./../../res/welcom.png')}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f2f2f2',
    },
    image:{
        flex:1,
        resizeMode:'cover'
    }
}
)