import { INCREMENT, DECREMENT, INPUT_CHANGE } from '../constants/actionTypes';
import { createAction } from '@reduxjs/toolkit';

// export const onIncrementClick = () => ({
// 	type: INCREMENT
// });

// export const onDecrementClick = () => ({
// 	type: DECREMENT
// });

export const onIncrementClick = createAction(INCREMENT);

export const onDecrementClick = createAction(DECREMENT);

export const inputChanged = (e) => ({
	type: INPUT_CHANGE,
	payload: e.target.value
});
