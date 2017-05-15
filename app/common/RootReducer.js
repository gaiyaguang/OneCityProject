/**
 * Created by gyg on 2017/4/19.
 */
'use strict'
import {combineReducers} from 'redux';
import {
    dynamicList,
} from './../home/reducer/HomeSceneReducer';
import {
    messageList,
}from '../message/reducer/MessageReducer';

const rootReducers = combineReducers({
    dynamicList,
    messageList,
})
export default rootReducers;