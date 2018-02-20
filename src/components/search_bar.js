import React, {Component} from 'react';



//ES6 class components
class SearchBar extends Component {
	render() {
		return <input onChange={this.onInputChange} />;
	}


	onInputChange() {

	}
}

export default SearchBar;