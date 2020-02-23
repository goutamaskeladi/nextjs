import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../actions';

const Counter = (props) => {
	return (
		<div>
			<h1>I am a counter</h1>
			<p>Count : {props.count}</p>
			<button onClick={props.onIncrementClick}>increment</button>
			<button onClick={props.onDecrementClick}>decrement</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		count: state.counter.count
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(CounterActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
