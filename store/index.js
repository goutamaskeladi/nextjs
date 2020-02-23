import { createStore } from 'redux';

const initialState = {
	count: 3,
	inputValue: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				count: state.count + 1
			};
		case 'DECREMENT':
			return {
				...state,
				count: state.count - 1
			};
		case 'INPUT_CHANGE':
			return {
				...state,
				inputValue: action.payload
			};
		default:
			return state;
	}
};

const store = createStore(reducer);

export default store;
