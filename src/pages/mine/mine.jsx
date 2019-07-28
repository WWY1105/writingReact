
import React,{Component} from 'react'
import Footer from '../../component/Footer/Footer';
import commonObj from '../../assets/js/common'
const changeTab=commonObj.changeTab
class Mine extends Component{
    constructor(props){
        super(props)
        this.state={
            nowPagr:'mine'
        }
    }
    render(){
        return (
            <div>
                <p>mine</p>
                <Footer nowPage={this.state.nowPage} changeTab={changeTab.bind(this)}/>
            </div>
        )
    }
}
export default Mine
