import React, {Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyAh2klEtZe45QYuzOwlWUN4UVzPNxpMqOc';



// Create a new component. This component should produce some HTML
//const for final variable(ES6 syntax)
class App extends Component  {
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};
		
		this.videoSearch('surfboards');
		
	}
	videoSearch(term){
		//Each time we set our state, we render again.
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
			//ES6 advanced: Same as this.setState({viedos: videos}); 

		});

	}


	//return JSX
	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
				 onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				 videos={this.state.videos}	 />

			</div>
		);
	}
	
};


//This this compnent's generated and put it on the page(in the DOM)
ReactDom.render(<App/>, document.querySelector('.container'));

