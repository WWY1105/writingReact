
import React,{Component} from 'react'
import Footer from '../../component/Footer/Footer';
import commonObj from '../../assets/js/common'
const changeTab=commonObj.changeTab
class Mission extends Component{
    constructor(props){
        super(props)
        this.state={
            nowPage:'mission'
        }
    }
    componentDidMount(){
        alert(this.props.location.state.name)
    }
    render(){
        return (
            <div>
                <p>mission</p>
                <Footer nowPage={this.state.nowPage} changeTab={changeTab.bind(this)}/>
            </div>
        )
    }
}
export default Mission
