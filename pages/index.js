import React from 'react';
import Counter from '../components/Counter';
import Input from '../components/Input';
import store from '../store';

const index = () => {
	return (
		<div>
			<Counter store={store} />
			<hr />
			<Input store={store} />
		</div>
	);
};

export default index;
