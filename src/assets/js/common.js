import {get}from '../../assets/js/fetch'
// 点击底部切换
const commonObj =  {
// imgUrl:"http://www.shuimujiajia.net/storage/",
// baseUrl:"http://www.shuimujiajia.net/works/",

// 当点击下面的路由
changeTab(name) {
      this.props.history.push('/' + name)
}, 

getBanner(fn) {
    get("api/Banner/List").then((res) =>  {
        return res.json(); 
    }).then((json) =>  {
        fn(json.data)
    }).catch(function (err) {
        console.log(err); 
    })
}

}

export  default commonObj 
