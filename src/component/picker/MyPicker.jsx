import React,{Component} from 'react'
import { Picker, List, WhiteSpace } from 'antd-mobile';
import PropTypes from 'prop-types'


class MyPicker extends Component{
   constructor(props){
      super(props)
   }
 

   componentDidMount(){
   //  console.log(this.props)
   }

    render(){
      //  console.log(this.props)
       const {gradeList,pickerChange,pickerExtra}=this.props;
       
       
      
      //  console.log(gradeList)
       return (
        <div>
        <WhiteSpace size="lg" />
        <List style={{ backgroundColor: 'white' }} className="picker-list">
             <Picker data={gradeList} cols={1}  onChange={pickerChange} className="forss" extra={pickerExtra} >
          <List.Item arrow="horizontal">{this.props.title}</List.Item>
        </Picker>
        </List>
        </div>
       )
      
    }
}
export default MyPicker
