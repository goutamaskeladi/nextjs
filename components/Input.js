import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../actions';

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
		inputValue: state.input.inputValue
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(CounterActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
