/**
 * Created by gyg on 2017/4/17.
 */
'use strict'
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './common/ConfigureStore';
import NavigatorRoot from './common/NavigatorRoot';

const store = configureStore();
export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavigatorRoot/>
            </Provider>
        )
    }
}