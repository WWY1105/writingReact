

import {get} from '../assets/js/fetch'


//  设置每页title
 function setPageTitle (data) {
    return (dispatch, getState) => {
      dispatch({ type: 'SET_PAGE_TITLE', data: data })
    }
  }
//   搜索作者的时候
function setSearchGrade(text){
    return (dispatch)=>{
        dispatch(
            {
                type:'SET_SEARCH_GRADE',
                text
            }
        )
    }
}
//获取公共的年级选择器选项
function  setGradeList(){
    return (dispatch,getState)=>{
        get('api/CategoryConfig/Category/List').then((res) =>  {
            return res.json()
        }).then((res) =>  {
            res.data=res.data.map(item=>{
                item['label']=item.categroy
                item['value']=item.nameValue
                return item
            })
            dispatch({
                type:'SET_GRADE_LIST',
                data:res.data
            })
        }).catch(function (err) {
        //   console.log(err); 
      })
        
    }
}
// 获取banner
function getBanner(data){
    return (dispatch)=>{
        get('api/Banner/List').then((res)=>{
            return res.json()
        }).then((res)=>{
        //    console.log('执行了banner')
            dispatch({
                type:'GET_BANNER',
                data:res.data
            })
        }).catch(function (err) {
            // console.log(err); 
        })
          
    }
}
  export{
    setGradeList,
    setPageTitle,
    setSearchGrade,
    getBanner
  }