import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {term: ''};
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(e) {
		console.log(e.target.value);
		this.setState({term: e.target.value});
	}

	render(){
		return (
			<form className="input-group">
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