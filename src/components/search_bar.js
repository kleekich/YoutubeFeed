import React, {Component} from 'react';



//ES6 class components
class SearchBar extends Component {
	//For State
	constructor(props){
		super(props);
		this.state = {term:''};
	}
	
	render() {
		return <input onChange={(event) => this.setState({ term: event.target.value })} />;
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