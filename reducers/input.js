import { INPUT_CHANGE } from '../constants/actionTypes';

const initialState = {
	inputValue: ''
};

const input = (state = initialState, action) => {
	switch (action.type) {
		case 'INPUT_CHANGE':
			return {
				...state,
				inputValue: action.payload
			};
		default:
			return state;
	}
};

export default input;
