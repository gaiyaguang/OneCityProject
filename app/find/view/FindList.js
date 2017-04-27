/**
 * Created by gyg on 2017/4/25.
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    ListView,
    Text
}from 'react-native';

export default class FindList extends Component {

    // 构造
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 != r2})
        this.state = {
            dataSource: ds,
            data: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'c', 'd', 'e', 'f', 'g']
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
                    renderRow={(rowData,sectionId,rowId)=>{return this._renderRow(rowData,sectionId,rowId)}}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    _renderRow(rowData, sectionId, rowId) {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <View
                    style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
                    <View style={{height:'100%',flexDirection:'column',justifyContent:'space-between'}}>
                        <Text style={{color: '#494949',fontSize:14}}>资讯--本地生活</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color: '#808080',fontSize:12,}}>2月前</Text>
                            <Text style={styles.textGray}>2赞</Text>
                            <Text style={styles.textGray}>5评论</Text>
                        </View>
                    </View>
                    <Image source={require('./../../res/girl.jpg')} style={{width:50,height:50}}/>
                </View>
                <View style={{height:1,backgroundColor:'#e4e4e4'}}/>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    textGray: {
        color: '#808080',
        fontSize: 12,
        marginLeft: 10,
    }
})
