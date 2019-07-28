import React,{Component} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import commonObj from '../../assets/js/common'
import { connect } from 'react-redux';
class MyCarousel extends Component{
      constructor(props){
        super(props)
    }

    componentDidMount() {
        // console.log(this.props)
      }
    render(){
        return (
            <WingBlank style={{margin:0}}>
            <Carousel
              autoplay={true}
              infinite
            >
              {this.props.bannerList.map((item,index) => (
                <a
                  key={item.id}
                  href={item.bannerContent}
                  style={{ display: 'inline-block', width: '100%',height:this.props.imgHeight}}
                >
                  <img
                    src={this.props.imgUrl+item.bannerSrc}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top', height:this.props.imgHeight }}
                    onLoad={() => {
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </WingBlank>
        )
    }
}
const mapStateToProps=(state)=>{
  // console.log(state)
  return {
    imgUrl:state.imgUrl
  }
}
export default connect(mapStateToProps)(MyCarousel)