/**
 * Created by gyg on 2017/4/19.
 */
'use strict'
import {combineReducers} from 'redux';
import {
    homeList,
} from './../home/reducer/HomeSceneReducer';

const rootReducers = combineReducers({
    homeList
})
export default rootReducers;