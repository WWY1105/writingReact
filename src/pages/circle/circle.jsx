
import React,{Component} from 'react'
import Footer from '../../component/Footer/Footer';
import commonObj from '../../assets/js/common'
const changeTab=commonObj.changeTab

class Circle extends Component{
    constructor(props){
        super(props)
        this.state={
            nowPage:'circle'
        }
    }
    render(){
        return (
            <div>
                <p>circle</p>
                <Footer nowPage={this.state.nowPage} changeTab={changeTab.bind(this)}/>
            </div>
        )
    }
}
export default Circle
