import React, {Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'


const API_KEY = 'AIzaSyAh2klEtZe45QYuzOwlWUN4UVzPNxpMqOc';



// Create a new component. This component should produce some HTML
//const for final variable(ES6 syntax)
class App extends Component  {
	constructor(props){
		super(props);

		this.state = {videos: {}}

		YTSearch({key: API_KEY, term: 'surfboards'}, data => {
		this.setState({viedos: data});

		});
	}
	//return JSX
	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
	
};


//This this compnent's generated and put it on the page(in the DOM)
ReactDom.render(<App/>, document.querySelector('.container'));

