import { combineReducers } from 'redux';
import counter from './counter';
import input from './input';

const rootReducer = combineReducers({
	counter,
	input
});

export default rootReducer;
