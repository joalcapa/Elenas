import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {create} from 'react-test-renderer';
import {configure} from 'enzyme';

import Component from '../../../../../../../src/v1/scenes/logged/customers/list/Component';
import {customers} from '../../../../../../../__factories__/customers';

configure({adapter: new Adapter()});
describe('Component List component', () => {
    test('render empty list component', () => {
        const tree = create(<Component />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render customers list component', () => {
        const tree = create(<Component customers={customers} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});