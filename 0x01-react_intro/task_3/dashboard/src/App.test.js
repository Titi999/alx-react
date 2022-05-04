import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App tests', () => {
    const component = shallow(<App/>)
    it('renders without crashing', () => {
        expect(component).toBeDefined();
    });

    it('renders a div with the class App-header', () =>{
        expect(component.find('.App-header')).toBeDefined();
    })

    it('renders a div with the class App-body', () =>{
        expect(component.find('.App-body')).toBeDefined();
    })

    it('renders a div with the class App-footer', () =>{
        expect(component.find('.App-footer')).toBeDefined();
    })

    




});