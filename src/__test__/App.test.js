import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';



describe('integration test for this create-react-app', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});	
})

// by using ReactDOM.render(), 
// this test renders all children components under <App>.
