import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS ({
  login: false,//判断用户是否登录
  
});


export default(state = defaultState, action) => {
	switch(action.type){
		case constants.CHANGE_LOGIN:
		  return state.set('login', action.value);
        
        case constants.LOGOUT:
          return state.set('login', action.value);
          
		default:
		  return state;
	}
}