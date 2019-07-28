import React,  {Component}from 'react'
import MyCarousel from '../../component/MyCarousel/MyCarousel'; 
import Order from '../../component/Order/Order'; 
import Footer from '../../component/Footer/Footer'; 
import commonObj from '../../assets/js/common'
import './index.less'
import PropTypes from 'prop-types'; 
import {connect }from 'react-redux'
import {Button, WingBlank}from 'antd-mobile'
import history from '../../history'
// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响

import {setGradeList, setPageTitle,getBanner} from '../../store/actions'

const {changeTab} =  {...commonObj}
class Index extends Component {
constructor(props) {
    super(props)
    this.state =  {
        nowPage:'index', 
        gradeExtra:'全年级', 
        gradeIndex:'',
        orderList:[]
    }
   
}
componentDidMount() {
  
  this.props.setGradeList()   
  //获取轮播图数据
  this.props.getBanner() 
  console.log(window)
     // 获取订单列表
  this.getOrderList()
}

componentWillMount() {
     
}
// 获取订单列表
getOrderList=()=>{
    window.get('api/Order/List').then((res)=>{
       return  res.json()
    }).then((data)=>{
        this.setState({
            orderList:data.data
        })
    })
}
gradeChange(val) {
    if (val.length > 0) {
        this.setState( {
            gradeIndex:val[0]
        })
    }
   
    this.setState( {
        gradeExtra:val[0]
    })
}
gotoSee() {
    this.props.history.push( {pathname:'/searchWriterResult', query: {name:'sunny'}})
}

    render() {
        
        return ( 
            < div >  
                {/* 顶部轮播图  */}
                < MyCarousel bannerList={this.props.bannerList} imgHeight='120'/>
                < WingBlank >  
               
                {/* 循环每个订单 */}
                {
                    this.state.orderList.map((item,index)=>
                       (
                            <Order id={item.id}/>
                        )
                    )
                }
                </WingBlank >  
                < Footer nowPage =  {this.state.nowPage}changeTab =  {changeTab.bind(this)}/>
            </div > 
            )
    }
}
//mapStateToProp :将state映射到组件的props中
const mapStateToProps = (state) =>  {
    // state 打印出来是reducer
    // console.log(state)
    return {
      gradeList:state.gradeList, 
      pageTitle:state.pageTitle, 
      bannerList:state.bannerList,
      
    }
  }
  // mapDispatchToProps：将action映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) =>  {
    return {
        setGradeList () {
          dispatch(setGradeList())
        }, 
        setPageTitle (data) {
            dispatch(setPageTitle(data))
        }, 
        getBanner(){
            dispatch(getBanner())
        }
    }
  }


//   ------------------------------------------------------------

export default connect(mapStateToProps, mapDispatchToProps)(Index); 
