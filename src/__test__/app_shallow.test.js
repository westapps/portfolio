import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';



describe('a shallow test of App', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});	
})

// this test only renders <App> and doesn’t go deeper.