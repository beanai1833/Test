// import Cookies from "js-cookie";

// const TOKEN_KEY = 'token';

// // cookie key 前缀
// const keyPrefix = "vue3_h5_template_";

// export function getCookie(key: string) {
//   return Cookies.get(`${keyPrefix}${key}`);
// }

// export function setCookie(key: string, value: string) {
//   Cookies.set(`${keyPrefix}${key}`, value, { expires: 30 });
// }

// export function removeCookie(key: string) {
//   return Cookies.remove(`${keyPrefix}${key}`);
// }


// export const isLogin = () => {
//   return !!getCookie(TOKEN_KEY);
// };

// export const getToken = () => {
//   return getCookie(TOKEN_KEY);
// };

// export const setToken = (token: string) => {
//    setCookie(TOKEN_KEY, token);
// };

// export const clearToken = () => {
//   removeCookie(TOKEN_KEY);
// };