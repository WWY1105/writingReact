
import {TabBar} from 'antd-mobile'
import React,{Component} from 'react'
 import './Footer.less'
 
// import { Link } from 'react-router-dom'

class Footer extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedTab:'',
            itemList:[
                {title:'找家教',name:"index",icon:'icon-boshimao1'},
                {title:'订单',name:"mission",icon:'icon-dingdan'},
                {title:'消息',name:"circle",icon:'icon-send'},
                {title:'我的',name:"mine",icon:'icon-wode'},
            ],
            hidden:false
        }
    }
    componentDidMount(){
        this.setState({
            selectedTab:this.props.nowPage
        })
    }
    render(){
        return (
            <div className="footerBox">
                <TabBar
                tintColor="#3375C5"
                >
                    {
                        this.state.itemList.map((item,index)=>
                        ( <TabBar.Item
                            className="footerItem"
                            title={item.title}
                            key={item.title}
                            icon={
                                <i className={"iconfont "+item.icon}></i>
                            }
                            selectedIcon={
                                <i className={"iconfont avtive "+item.icon}></i>
                            }
                            selected={this.state.selectedTab===item.name}
                            onPress={
                                ()=>{
                                    this.setState({
                                        selectedTab:item.name
                                    })
                                    console.log('路径参数')
                                    console.log(this.props)
                                    this.props.changeTab(item.name)
                                }
                                
                            }

                            >
                           
                            </TabBar.Item>))
                    }
                </TabBar>
            </div>
        )
    }
}

export default Footer