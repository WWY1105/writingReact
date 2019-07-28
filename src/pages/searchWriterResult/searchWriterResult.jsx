import React,{Component} from 'react'
import {connect} from 'react-redux'
import {setSearchGrade} from  '../../store/actions'
 class SearchWriterResult extends Component{
    componentDidMount(){
        this.props.getSearchGrade(this.props.location.query.name)
    }
    render(){
        return(
            <div>sss</div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        searchGrade:state.searchGrade
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        getSearchGrade(text){
            dispatch(setSearchGrade(text))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchWriterResult)