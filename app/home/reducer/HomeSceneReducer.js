/**
 * Created by gyg on 2017/4/19.
 */
'use strict'
import * as ActionType from './../../common/ActionTypes';

const initListState={
    dynamicList:[],
}

export function dynamicList(state=initListState,action) {//获取首页列表reducer
    switch(action.type){
        case ActionType.ACTION_DYNAMIC_LIST:
            return Object.assign({},state,{
                dynamicList:action.dynamicList,
            })
        default:
            return state;
    }
}