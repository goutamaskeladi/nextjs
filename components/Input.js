import React from 'react';
import { connect } from 'react-redux';

const Input = ({ inputValue, inputChanged }) => {
	return (
		<div>
			<h1>I am a form</h1>
			<input value={inputValue} onChange={inputChanged} />
			<p>{inputValue}</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		inputChanged: (e) => {
			dispatch({ type: 'INPUT_CHANGE', payload: e.target.value });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
