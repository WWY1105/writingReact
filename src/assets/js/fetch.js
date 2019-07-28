import 'whatwg-fetch'
import 'es6-promise'
import store from '../../store/index'
const baseUrl=store.getState().baseUrl;
const get=(url)=>{
    let result=fetch(baseUrl+url,{
        credentials:'include',
        method: "GET",
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json, text/plain, */*'
        },
         // 设置允许cors跨域
         mode: 'cors'
    })
    return result
}
const post=(url,paramsObj)=>{
    let result=fetch(baseUrl+url,{
        method:'POST',
        credentials:"include",
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: obj2params(paramsObj)
    })
    return result
}
// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
const obj2params=(obj)=>{
    let result='';
    let item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }
    if (result) {
        result = result.slice(1);
    }
    return result;
}

window.get=get;
window.post=post;
export {
    get,
    post
}