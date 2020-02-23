import React from 'react';
import Counter from '../components/Counter';
import store from '../store';

const index = () => {
	return (
		<div>
			<Counter count="10" store={store} />
		</div>
	);
};

export default index;
