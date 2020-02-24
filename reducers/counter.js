import { onIncrementClick, onDecrementClick } from '../actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
	count: 3
};

const counter = createReducer(initialState, {
	// [onIncrementClick]: (state) => state.count + 1,
	// [onDecrementClick]: (state) => state.count - 1
	[onIncrementClick]: (state, action) => {
		return {
			...state,
			count: state.count + 1
		};
	},
	[onDecrementClick]: (state, action) => {
		return {
			...state,
			count: state.count - 1
		};
	}
});

// const counter = (state = initialState, action) => {
// 	switch (action.type) {
// 		case 'INCREMENT':
// 			return {
// 				...state,
// 				count: state.count + 1
// 			};
// 		case 'DECREMENT':
// 			return {
// 				...state,
// 				count: state.count - 1
// 			};
// 		default:
// 			return state;
// 	}
// };

export default counter;
