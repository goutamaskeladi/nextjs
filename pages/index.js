import React from 'react';
import store from '../store';
import { Provider } from 'react-redux';
import Counter from '../components/Counter';
import Input from '../components/Input';

const index = () => {
	return (
		<Provider store={store}>
			<div>
				<Counter />
				<Input />
			</div>
		</Provider>
	);
};

export default index;
