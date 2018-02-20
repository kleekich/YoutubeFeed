import React, {Component} from 'react';



//ES6 class components
class SearchBar extends Component {
	/* without ES6
	render() {
		return <input onChange={this.onInputChange} />;
	}

	onInputChange(event) {
		console.log(event.target.value);
	}
	*/

	//ES6 Syntax with lamda-like function
	render() {
		return <input onChange={(event) => console.log(event.target.value)} />;
	}

}

export default SearchBar;