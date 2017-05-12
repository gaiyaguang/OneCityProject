/**
 * Created by gyg on 2017/4/14.
 */
'use strict'
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight
}from 'react-native';
import {TitleBar} from './../../message/view/MessageScene';
import CustomModal from '../../component/CustomModal';

export default class MineScene extends Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            modalVisibility:false,
        };
      }
    
    render(){
        return(
            <View style={styles.container}>
                <CustomModal title="标题" message="消息"  ref="_customModal" visibility={this.state.modalVisibility}
                             onLeftPress={()=>{this.setState({modalVisibility:false})}} onRightPress={()=>{this.setState({modalVisibility:false})}}/>
                <TitleBar title="我的" onRightPress={()=>{this._onRightPress()}}/>
                <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',padding:10,alignItems:'center'}}>
                   <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                       <Image source={require('./../../res/header_default.png')} style={{width:45,height:45}}/>
                       <View style={{justifyContent:'center',marginLeft:10}}>
                           <View style={{flexDirection:'row',alignItems:'center'}}>
                               <Text style={{color:'#080808',fontSize:14}}>XXX</Text>
                               <View style={{width:1,height:13,marginLeft:3,marginRight:3,backgroundColor:'#e4e4e4'}}/>
                               <Text style={{color:'#8f9499',fontSize:12}}>上海XX信息科技有限公司</Text>
                           </View>
                           <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                               <Image source={require('./../../res/copss.png')} style={{width:12,height:12}}/>
                               <Text style={{color:'#8f9499',fontSize:12,marginLeft:3}}>影响力</Text>
                               <Text style={{color:'#00A9F2',fontSize:12,marginLeft:3}}>0.0</Text>
                           </View>
                       </View>
                   </View>
                    <Image source={require('./../../res/arrow_right.png')} style={styles.arrow_right}/>
                </View>
                <View style={{height:1,backgroundColor:'#e4e4e4'}}/>

                <View style={{height:1,backgroundColor:'#FCD8D2',marginTop:10}}/>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#F8EDEB'}}>
                    <Image source={require('./../../res/rz.png')} style={{width:15,height:15,}}/>
                    <Text style={{color:'#707070',fontSize:13,marginLeft:10}}>成为认证用户 发现更多价值</Text>
                    <TouchableHighlight underlayColor={'#ff8428'} style={{marginLeft:20,marginTop:5,marginBottom:5}}>
                        <Text style={{color:'white',fontSize:12,padding: 5,backgroundColor:'#ff8428',borderRadius:3}}>立即认证</Text>
                    </TouchableHighlight>
                </View>
                <View style={{height:1,backgroundColor:'#FCD8D2'}}/>

                <View style={{height:1,backgroundColor:'#e4e4e4',marginTop:10}}/>
                <View style={{backgroundColor:'white'}}>
                    <View style={styles.row}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./../../res/u2.png')} style={styles.rowImg}/>
                            <Text style={styles.rowTxt}>我的动态</Text>
                        </View>
                        <Image source={require('./../../res/arrow_right.png')} style={styles.arrow_right}/>
                    </View>
                    <View style={styles.rowDivider}/>
                    <View style={styles.row}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./../../res/u3.png')} style={styles.rowImg}/>
                            <Text style={styles.rowTxt}>我的钱包</Text>
                        </View>
                        <Image source={require('./../../res/arrow_right.png')} style={styles.arrow_right}/>
                    </View>
                    <View style={styles.rowDivider}/>
                    <View style={styles.row}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./../../res/u7.png')} style={styles.rowImg}/>
                            <Text style={styles.rowTxt}>我的优惠</Text>
                        </View>
                        <Image source={require('./../../res/arrow_right.png')} style={styles.arrow_right}/>
                    </View>
                    <View style={styles.rowDivider}/>
                    <View style={styles.row}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./../../res/u5.png')} style={styles.rowImg}/>
                            <Text style={styles.rowTxt}>我的收藏</Text>
                        </View>
                        <Image source={require('./../../res/arrow_right.png')} style={styles.arrow_right}/>
                    </View>
                    <View style={{height:1,backgroundColor:'#e4e4e4'}}/>
                </View>

                <View style={{height:1,backgroundColor:'#e4e4e4',marginTop:10}}/>
                <TouchableHighlight underlayColor={'white'} onPress={()=>{
                }}>
                    <View style={styles.row}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./../../res/u8.png')} style={styles.rowImg}/>
                            <Text style={styles.rowTxt}>设置</Text>
                        </View>
                        <Image source={require('./../../res/arrow_right.png')} style={styles.arrow_right}/>
                    </View>
                </TouchableHighlight>

                <View style={{height:1,backgroundColor:'#e4e4e4'}}/>
            </View>
        )
    }

    _onRightPress(){
        this.setState({modalVisibility:true})
    }
} 

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f2f2f2',
    },
    arrow_right:{
        width:8,
        height:14
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'white'
    },
    rowImg:{
        width:20,
        height:20,
    },
    rowTxt:{
        color:'#080808',
        fontSize:14,
        marginLeft:10
    },
    rowDivider:{
        height:1,
        backgroundColor:'#e4e4e4',
        marginLeft:30,
    }
})