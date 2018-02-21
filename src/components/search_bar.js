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
					//setState calls render() funciton everytime it has change
					onChange={(event) => this.setState({ term: event.target.value  })} />
			</div>

		);
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