import { INCREMENT, DECREMENT, INPUT_CHANGE } from '../constants/actionTypes';

export const onIncrementClick = () => ({
	type: INCREMENT
});

export const onDecrementClick = () => ({
	type: DECREMENT
});

export const inputChanged = (e) => ({
	type: INPUT_CHANGE,
	payload: e.target.value
});
