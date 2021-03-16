import React from 'react';
import 'cross-fetch/polyfill';
import {create} from 'react-test-renderer';
import {View} from 'react-native';

import App from '../../../../../../__providers__/components/App';
import BaseCustomers from '../../../../../../src/v1/scenes/logged/customers/BaseCustomers';

const TextComponent = () => <View style={{width: 100, height: 100}} />;

describe('BaseCustomers component', () => {
    test('render TextComponent component without title and buttons', () => {
        const Component = BaseCustomers(TextComponent);
        const tree = create(<App><Component /></App>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render TextComponent component with title and without buttons', () => {
        const Component = BaseCustomers(TextComponent, 'Test scene');
        const tree = create(<App><Component /></App>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render TextComponent component with title and with create button', () => {
        const Component = BaseCustomers(TextComponent, 'Test scene', {isCreateButton: true});
        const tree = create(<App><Component /></App>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render TextComponent component with title and with list button', () => {
        const Component = BaseCustomers(TextComponent, 'Test scene', {isListButton: true});
        const tree = create(<App><Component /></App>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});