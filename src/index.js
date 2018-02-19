import React from 'react';
import ReactDom from 'react-dom';


// Create a new component. This component should produce some HTML
//const for final variable(ES6 syntax)
const App = () => {

	//return JSX
	return <div>Hi!</div>;
}


//This this compnent's generated and put it on the page(in the DOM)
ReactDom.render(<App/>, document.querySelector('.container'));

