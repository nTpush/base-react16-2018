// 合并所有的reducer 并且返回

import { combineReducers } from 'redux'

import { Test } from '@/redux/modules/test.redux.js'

import { baseConfig } from '@/redux/modules/config.redux.js'

export default combineReducers({ Test, baseConfig })
