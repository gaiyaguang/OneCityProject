/**
 * Created by gyg on 2017/4/19.
 */
'use strict'
import {combineReducers} from 'redux';
import {
    dynamicList,
} from './../home/reducer/HomeSceneReducer';

const rootReducers = combineReducers({
    dynamicList,
})
export default rootReducers;