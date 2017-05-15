/**
 * Created by gyg on 2017/5/15.
 */
'use strict'
import * as ActionType from "../../common/ActionTypes";
 const initMessageListState={
     messageList:[],
 }
export function messageList(state=initMessageListState, action){
    if(action.type==ActionType.ACTION_MESSAGE_LIST){
        return Object.assign({},state,{messageList:action.messageList});
    }else{
        return state;
    }
}
