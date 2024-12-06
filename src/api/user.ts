import { http } from './index';


export type LoginData = {
  phone: string,
  countryCode: number | string
  code?: number | string
}
export type person = {
  turn: string,
  name: string,
  corpType: number,
  birth: string,
  visas: number
}
/**
 * 账号密码登录
 * @method loginPassword //获取验证码
 * @method loginPhone //登录手机号
 * @method putStatement //同意授权
 * @method getPersonList //获取办签人员列表
 * @method addPerson //获取办签人员列表
 * @method getVisa //获取签证加载
 * @method uploadFile //上传文件
 * @method uploadImg //签字
 */
export function loginPassword(data: LoginData) {
  return http.post('/auth/phoneCode', data);
}
export function loginPhone(data: LoginData) {
  return http.post('/auth/loginPhone', data);
}
export function putStatement() {
  return http.post('/statement');
}
export function getPersonList() {
  return http.get('/passenger');
}
export function addPerson(data: person) {
  return http.post('/passenger', data);
}
export function getVisa(trid: number) {
  return http.get(`/visa/${trid}`);
}
export function uploadFile(data: any) {
  return http.post('/visa', data, { headers: { "Content-Type": "multipart/form-data;charset=UTF-8" } });
}
export function uploadImg(data: any) {
  return http.post('/sign/uploadVisaFile', data);
}