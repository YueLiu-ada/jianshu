import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { 
	HomeWrapper, 
	HomeLeft, 
	HomeRight,
	BackTop
	 } from './style';

class Home extends PureComponent {


	handleScrollTop(){
		window.scrollTo(0,0);
	}

	render() {
		return (
			<HomeWrapper>
			 <HomeLeft>
			    <img alt = '' className = 'banner-img' src = "https://upload-images.jianshu.io/upload_images/1835526-2247f03e43017ca2.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" />
			    <Topic />
			    <List />

			 </HomeLeft>
       <HomeRight>
         <Recommend />
         <Writer />
       </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
       
			</HomeWrapper>
		)
	}
//
	componentDidMount(){
		this.props.changeHomeData();
		this.bindEvents();
	}

	componentWillUnmount(){
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}

	bindEvents(){
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}

}

const mapState = (state) => ({
	showScroll: state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch) => ({
  changeHomeData(){
  	  const action = actionCreators.getHomeInfo();
  	  dispatch(action);
    },
  changeScrollTopShow(){
  	if(document.documentElement.scrollTop > 100){
       dispatch(actionCreators.toggleTopShow(true));
  	}
  	else{
       dispatch(actionCreators.toggleTopShow(false));
  	}
  }
});
export default connect(mapState, mapDispatch)(Home);
