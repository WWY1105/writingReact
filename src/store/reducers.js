

import {combineReducers} from 'redux'
import defaultState from './state'

// 获取公共年级选中数组
function gradeList(state=defaultState.gradeList,action){
    switch(action.type){
        case 'SET_GRADE_LIST':
            return action.data
        default:return state
    }
}
// 一个reducer就是一个函数
function pageTitle (state = defaultState.pageTitle, action) {
    // 不同的action有不同的处理逻辑
    switch (action.type) {
      case 'SET_PAGE_TITLE':
        return  action.data
      default:
        return state
    }
  }

  // 获取搜索条件的年级
  function searchGradeReducer(state=defaultState.searchGrade,action){
      switch(action.type){
          case 'SET_SEARCH_GRADE':
          return action.text
          default:
          return state
      }

  }
  // 获取banner
  function bannerList(state=defaultState.bannerList,action){
    switch(action.type){
        case 'GET_BANNER':
        return action.data
        default:
       return state
    }
  }
  // 静态 图片路径   
  function imgUrl(state=defaultState.imgUrl,action){
    switch(action.type){
        case 'GET_IMGURL':
        return action.data
        default:
       return state
    }
  }
  //   静态 请求路径
  function baseUrl(state=defaultState.baseUrl,action){
      switch(action.type){
          case 'GET_BASEURL':
          return action.data
          default:
         return state
      }
  }
export default combineReducers({
    gradeList,pageTitle,searchGradeReducer,bannerList,imgUrl,baseUrl
})