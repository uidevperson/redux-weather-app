import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {term: ''};
		// bind functions to class
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(e) {
		console.log(e.target.value);
		this.setState({term: e.target.value});
	}

	onFormSubmit(e) {
		e.preventDefault();
		console.log(e.target.value);
	}

	render(){
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="get a 5 day forcast for your favourite city"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				 />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}
}

export default SearchBar;