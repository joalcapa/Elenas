import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {create} from 'react-test-renderer';
import {TextInput} from 'react-native';
import {shallow, configure} from 'enzyme';

import InputField from '../../../../../../src/v1/components/commons/InputField';

configure({adapter: new Adapter()});
describe('InputField component', () => {
    test('render InputField component', () => {
        const tree = create(<InputField />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render InputField component with value', () => {
        const tree = create(<InputField value="input"/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render InputField component with placeholder', () => {
        const tree = create(<InputField placeholder={'placeholder text'}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('onChangeText functionality', () => {
        const onPressEvent = jest.fn();
        onPressEvent.mockReturnValue('Link on press invoked');
        const wrapper = shallow(<InputField onChangeText={onPressEvent} />);

        wrapper.find(TextInput).first().props().onChangeText('value');
        expect(onPressEvent.mock.results[0].value).toBe('Link on press invoked');
    });
});