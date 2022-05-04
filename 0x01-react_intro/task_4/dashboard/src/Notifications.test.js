import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('Notification test', () => {
    const component = shallow(<Notifications/>);

    it('Notifications renders without crashing', () => {
        expect(component).toBeDefined();
    });

    it('Renders ul', () => {
        expect(component.find('ul')).toBeDefined();
    });

    it('renders three list items', () => {
        expect(component.find('li')).toHaveLength(3);
    });

    it('renders the correcttext', () => {
        expect(component.find('p')).prop('childre').toBe('Here is the list of notifications');
    })
})

