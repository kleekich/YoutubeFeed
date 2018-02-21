import React, {Component} from 'react';



//ES6 class components
class SearchBar extends Component {
	//For State
	constructor(props){
		super(props);
		//This is only time we manually set our state.
		this.state = {term:''};
	}
	
	render() {
		return (
			<div className="search-bar">
				<input //controlled component.
					value={this.state.term}
					//Everytime we have change onChange, we call onInputchange with our input 
					onChange={(event) => this.onInputChange(event.target.value)} />
			</div>

		);
	}

	//setState calls render() funciton everytime it has change
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}




	/* without ES6
	render() {
		return <input onChange={this.onInputChange} />;
	}

	onInputChange(event) {
		console.log(event.target.value);
	}
	*/

	//ES6 Syntax with lamda-like function

}

export default SearchBar;