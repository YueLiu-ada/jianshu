import React, { PureComponent } from 'react';
import { WriterWrapper, WriterItem, WriterInfo } from '../style';
import { connect } from 'react-redux';
class Writer extends PureComponent {
	render() {
		const { list } = this.props;
		return (
			<WriterWrapper>
      {
        list.map((item)=>{
        return (
        	<WriterItem key = {item.get('id')}>
		       <img className ='pic' src = {item.get('imgUrl')} alt = ''/>
		        <WriterInfo>
             <p className = 'title'>{item.get('title')}</p>
             <p className = 'desc'>{item.get('desc')}</p>
		        </WriterInfo>
		      </WriterItem>
		     );
        })
      }
			</WriterWrapper>
	  )
	}
}
//

const mapState = (state) => ({
	list: state.getIn(['home','writerList'])
})
export default connect(mapState)(Writer);

