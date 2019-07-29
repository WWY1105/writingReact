import React ,{Component} from 'react'
// import {WingBlank} from 'antd-mobile'
import store from'../../store/index'
import {WingBlank} from 'antd-mobile'
import {getOrderDetail} from  '../../store/actions'
import {connect} from 'react-redux'
import Order from '../../component/Order/Order'; 
 class OrderDetail extends Component{
    constructor(){
        super()
        this.state={
            orderDetail:{}
        }
    }
    componentWillMount(){

    }
    componentWillReceiveProps(next){
        // console.log('next')
        // console.log(next)
        // this.setState({
        //     orderDetail:next
        // })
        // console.log(this.state)
    }
    componentDidMount(){
        // 获取路由中的任务id 来请求任务详情
        const id=this.props.location.state.orderId
        this.props.getOrderDetail(id)
        // if(!!this.props.orderdetail){
        //     console.log(this.props.orderDetail)
        // }
        console.log(!!this.props.orderDetail)
        
    }
    // 获取订单详情
    // getOrderDetail()
    render(){
    
        const user={...this.props.orderDetail.user}
        const {imgUrl}=store.getState();
        let order={...this.props.orderDetail};
        console.log(order)
        return (
            <div className="orderBox bgW">
               {/* 上部：发布者信息 */}
              
               <WingBlank>
               <div className="top">
               <p className="left">
                    <img src={user.imgurl?imgUrl+user.imgurl:''} className="userImg" alt=""/>
                    <span className="userName">{user.nickname}</span>
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
                   {/* <div className="right">
                        <button>报名</button>
                   </div> */}
               </div>
               </WingBlank>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log('state')
    console.log(state)
    return {
        orderDetail:state.orderDetail
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    // console.log(ownProps)
    return {
        getOrderDetail:(id)=>{
                // getOrderDetail是action
             return  dispatch(getOrderDetail(id))
            
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OrderDetail);