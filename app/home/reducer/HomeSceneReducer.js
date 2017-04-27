/**
 * Created by gyg on 2017/4/19.
 */
'use strict'
import * as ActionType from './../../common/ActionTypes';

const initListState={
    homeList:[],
}

export function homeList(state=initListState,action) {//获取首页列表reducer
    switch(action.type){
        case ActionType.ACTION_HOME_LIST_FETCHED:
            return Object.assign({},state,{
                homeList:action.homeList
            })
        default:
            return state;

    }
}