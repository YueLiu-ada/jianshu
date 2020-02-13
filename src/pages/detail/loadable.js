import React from 'react';
import Loadable from 'react-loadable';
//detail 组件变成了异步组件

const LoadableComponent = Loadable({
  loader: () => import('./'),
  //loading 在加载的这段时间里先显示一些内容
  loading(){
  	return <div>正在加载</div>
  }
});
//
export default () => <LoadableComponent/>
