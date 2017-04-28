/**
 * Created by gyg on 2017/4/24.
 */
'use strict'
export const DEBUG=true;//是否打印信息
const ENDPOINT='https://apitest.wanquanba.com/';//服务器url
const ENDPOINT_TEST="http://192.168.1.220:8080/";
/*============================================================login=======================================================*/
export const LOGIN_URL=ENDPOINT+'wqb/users/login';//登录
export const GET_CHECK_CODE=ENDPOINT+'wqb/users/pollCode';//获取验证码
export const REGISTER_URL=ENDPOINT+'wqb/users/register';//注册
export const FORGET_PWD_URL=ENDPOINT+'wqb/users/updatePwd';//忘记密码
/*===========================================================home=========================================================*/
export const QUERY_DYNAMIC_LIST=ENDPOINT+'wqb/trends/queryActive';//获取首页动态列表
