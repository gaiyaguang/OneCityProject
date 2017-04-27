/**
 * Created by gyg on 2017/4/14.
 */
'use strict'
import React,{Component} from 'react';
import {
    StyleSheet,
    ListView,
    View,
    Text,
    Image,
}from 'react-native';
import {TitleBar} from './../../message/view/MessageScene';

class HeaderItem extends Component{
    render(){
        return(
            <View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5}}>
                    <Image source={this.props.img} style={styles.headerImg}/>
                    <Text style={styles.headerText}>{this.props.text}</Text>
                </View>
                <View style={{flex:1,height:1,marginLeft:55,backgroundColor:'#E4E4E4'}}/>
            </View>
        )
    }
}

export default class ContactScene extends Component{

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 != r2})
        this.state = {
            dataSource: ds,
            data: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'c', 'd', 'e', 'f', 'g']
        };
    }


    render(){
        return(
            <View style={styles.container}>
                <TitleBar title="通讯录" onRightPress={this._onRightPress.bind(this)}/>
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
                    renderRow={(rowData,sectionId,rowId)=>{return this._renderRow(rowData,sectionId,rowId)}}
                    renderHeader={()=>{return this._renderHeader()}}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    _renderHeader(){
        return(
            <View style={{flex:1,marginBottom:10,marginTop:10,}}>
                <HeaderItem img={require('./../../res/img_contact_newfriend.png')} text="新的朋友"/>
                <HeaderItem img={require('./../../res/img_contact_myhred.png')} text="我的群"/>
                <HeaderItem img={require('./../../res/icon_local.png')} text="同城号"/>
                <HeaderItem img={require('./../../res/img_contact_customer.png')} text="我的客户"/>
                <HeaderItem img={require('./../../res/default_cardmanager.png')} text="名片管理"/>
            </View>
        )
    }

    _renderRow(rowData,sectionId,rowId){
        return (
            <View style={{flex:1}}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,}}>
                    <Image source={require('./../../res/header_default.png')} style={{width:35,height:35,borderRadius:35}}/>
                    <Text style={{color:'#2A2A2A',fontSize:14,marginLeft:10,}}>段双</Text>
                    <View style={{width:1,height:10,backgroundColor:'#E4E4E4',marginLeft:3,marginRight:3,}}/>
                    <Text style={{color:'#8f9499',fontSize:13}}>上海九星电子商务有限公司</Text>
                    <Image source={require('./../../res/v.png')} style={{width:10,height:10,marginLeft:3}}/>
                </View>
                <View style={{flex:1,height:1,backgroundColor:'#E4E4E4'}}/>
            </View>
        )
    }

    _onRightPress(){

    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f2f2f2',
    },
    headerImg:{
        width:35,
        height:35,
    },
    headerText:{
        color:'#2A2A2A',
        fontSize:14,
        marginLeft:10,
    }
})
