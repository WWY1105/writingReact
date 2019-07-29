import React, {Component} from 'react'
import store from'../../store/index'
import './order.less'
import {WingBlank} from 'antd-mobile'
import { Item } from 'antd-mobile/lib/tab-bar';
import { privateDecrypt } from 'crypto';
class Order extends Component{
    constructor(){
        super()
    }
    componentWillReceiveProps(next){
        console.log('next')
        console.log(next)
        console.log(this.state)
    }
    
    componentDidMount(){
        // console.log(store.getState())
    }
  
    render(){
        const {imgUrl}=store.getState()
        const order=JSON.parse(JSON.stringify(this.props.order));
        // const order=Object.assign({},this.props.order);
        return (
            <div className="orderBox bgW" onClick={()=>{this.props.seeOrdeDetail(order.id)}}>
               {/* 上部：发布者信息 */}
              
               <WingBlank>
               <div className="top">
               <p className="left">
                    <img src={order.user.imgurl?imgUrl+order.user.imgurl:''} className="userImg" alt=""/>
                    <span className="userName">{order.user.nickname}</span>
               </p>
                <div className="right">
                    <p className="priceDesc">费用预算</p>
                    <p className="price">￥{order.fee}/小时</p>
                </div>
                </div>
                </WingBlank>
                <WingBlank>
               {/* 订单详细信息 */}
               <div className="content">
                    <p className="flexSpace">
                        <span>年级：{order.classNo}</span><span>科目：{order.subject}</span>
                    </p>
                    <p className="flexSpace">
                     <span>上课:{order.coordination }</span><span>区域：{order.area}</span></p>
                    <p className="flexStart orderSketch">
                        简述：{order.content}
                    </p>
               </div>
               <div className="footer flexSpace">
                   <div className="left">
                    <span>
                            截止报名：{order.deadline?order.deadline.substring(0,11):''}
                        </span>
                        <span>
                            已报名：{order.applicationCount}
                        </span>
                   </div>
                   <div className="right">
                        <button>报名</button>
                   </div>
               </div>
               </WingBlank>
            </div>
        )
    }
}
export default Order