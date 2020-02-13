import React, { Component } from "react";
import { GlobalStyle } from "./style";
import { Provider } from 'react-redux';
import { GlobalIconFont } from './statics/iconfont/iconfont';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';//detail成了异步组件
import Login from './pages/login';
import Write from './pages/write';
import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store = {store}>
       <GlobalStyle />
       <GlobalIconFont />
       <BrowserRouter>
        <div>
         <Header />
         <Route path = '/' exact component = {Home}></Route>
         <Route path = '/login' exact component = {Login}></Route>
         <Route path = '/write' exact component = {Write}></Route>
         <Route path = '/detail/:id' exact component = {Detail}></Route>       
        </div>
       </BrowserRouter>
      </Provider>
    );
  }
}

export default App;