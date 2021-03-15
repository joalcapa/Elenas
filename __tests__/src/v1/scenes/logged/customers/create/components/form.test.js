import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {create} from 'react-test-renderer';
import {TouchableOpacity} from 'react-native';
import {shallow, configure} from 'enzyme';

import Form from '../../../../../../../../src/v1/scenes/logged/customers/create/components/form.js';
import InputField from '../../../../../../../../src/v1/components/commons/InputField';
import Button from '../../../../../../../../src/v1/components/commons/Button';

configure({adapter: new Adapter()});
describe('Form component', () => {
    test('render empty form component', () => {
        const tree = create(<Form />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render form component with firstName', () => {
        const tree = create(<Form firstName={'FirstName test'} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render form component with lastName', () => {
        const tree = create(<Form lastName={'LastName test'} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render form component with email', () => {
        const tree = create(<Form email={'email@email.com'} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render form component with cellphone', () => {
        const tree = create(<Form cellphone={'+5732485855'} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render form component with address', () => {
        const tree = create(<Form address={'address'} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render form component with cedula', () => {
        const tree = create(<Form cedula={'15151212151'} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('onChangeText firstName functionality', () => {
        const onPressEvent = jest.fn();
        onPressEvent.mockReturnValue('Link on press invoked');
        const wrapper = shallow(
            <Form changeFirstName={onPressEvent} />,
        );

        wrapper.find(InputField).first().props().onChangeText('value');
        expect(onPressEvent.mock.results[0].value).toBe('Link on press invoked');
    });

    test('onChangeText lastName functionality', () => {
        const onPressEvent = jest.fn();
        onPressEvent.mockReturnValue('Link on press invoked');
        const wrapper = shallow(
            <Form changeLastName={onPressEvent} />,
        );

        wrapper.find(InputField).at(1).props().onChangeText('value');
        expect(onPressEvent.mock.results[0].value).toBe('Link on press invoked');
    });

    test('onChangeText email functionality', () => {
        const onPressEvent = jest.fn();
        onPressEvent.mockReturnValue('Link on press invoked');
        const wrapper = shallow(
            <Form changeEmail={onPressEvent} />,
        );

        wrapper.find(InputField).at(3).props().onChangeText('value');
        expect(onPressEvent.mock.results[0].value).toBe('Link on press invoked');
    });

    test('onChangeText cedula functionality', () => {
        const onPressEvent = jest.fn();
        onPressEvent.mockReturnValue('Link on press invoked');
        const wrapper = shallow(
            <Form changeCedula={onPressEvent} />,
        );

        wrapper.find(InputField).at(2).props().onChangeText('value');
        expect(onPressEvent.mock.results[0].value).toBe('Link on press invoked');
    });

    test('onChangeText address functionality', () => {
        const onPressEvent = jest.fn();
        onPressEvent.mockReturnValue('Link on press invoked');
        const wrapper = shallow(
            <Form changeAddress={onPressEvent} />,
        );

        wrapper.find(InputField).at(5).props().onChangeText('value');
        expect(onPressEvent.mock.results[0].value).toBe('Link on press invoked');
    });

    test('onChangeText cellphone functionality', () => {
        const onPressEvent = jest.fn();
        onPressEvent.mockReturnValue('Link on press invoked');
        const wrapper = shallow(
            <Form changeCellphone={onPressEvent} />,
        );

        wrapper.find(InputField).at(4).props().onChangeText('value');
        expect(onPressEvent.mock.results[0].value).toBe('Link on press invoked');
    });

    test('onPress functionality', () => {
        const onPressEvent = jest.fn();
        onPressEvent.mockReturnValue('Link on press invoked');
        const wrapper = shallow(<Form createCustomer={onPressEvent} isValidForm />);

        wrapper.find(Button).first().props().onPress();
        expect(onPressEvent.mock.results[0].value).toBe('Link on press invoked');
    });

    test('disabled functionality', () => {
        let isPress = true;
        const onPressEvent = jest.fn();
        onPressEvent.mockReturnValue('Link on press invoked');
        const wrapper = shallow(<Form createCustomer={onPressEvent} isValidForm={false} />);

        try {
            wrapper.find(TouchableOpacity).first().props().onPress();
        } catch (error) {
            isPress = false;
        }

        expect(isPress).toBe(false);
    });
});