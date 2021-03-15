import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {create} from 'react-test-renderer';
import {TouchableOpacity} from 'react-native';
import {shallow, configure} from 'enzyme';

import Form from '../../../../../../../src/v1/scenes/auth/login/components/form.js';
import InputField from '../../../../../../../src/v1/components/commons/InputField';
import Button from '../../../../../../../src/v1/components/commons/Button';

configure({adapter: new Adapter()});
describe('Form component', () => {
    test('render empty form component', () => {
        const tree = create(<Form />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render form component with cellphone', () => {
        const tree = create(<Form cellphone={'+5732485855'} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render form component with password', () => {
        const tree = create(<Form password={'123456789'} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render form component with error', () => {
        const tree = create(<Form isError />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('onChangeText cellphone functionality', () => {
        const onPressEvent = jest.fn();
        onPressEvent.mockReturnValue('Link on press invoked');
        const wrapper = shallow(
            <Form changeCellphone={onPressEvent} />,
        );

        wrapper.find(InputField).first().props().onChangeText('value');
        expect(onPressEvent.mock.results[0].value).toBe('Link on press invoked');
    });

    test('onChangeText password functionality', () => {
        const onPressEvent = jest.fn();
        onPressEvent.mockReturnValue('Link on press invoked');
        const wrapper = shallow(
            <Form changePassword={onPressEvent} />,
        );

        wrapper.find(InputField).at(1).props().onChangeText('value');
        expect(onPressEvent.mock.results[0].value).toBe('Link on press invoked');
    });

    test('onPress functionality', () => {
        const onPressEvent = jest.fn();
        onPressEvent.mockReturnValue('Link on press invoked');
        const wrapper = shallow(<Form login={onPressEvent} isValidForm />);

        wrapper.find(Button).first().props().onPress();
        expect(onPressEvent.mock.results[0].value).toBe('Link on press invoked');
    });

    test('disabled functionality', () => {
        let isPress = true;
        const onPressEvent = jest.fn();
        onPressEvent.mockReturnValue('Link on press invoked');
        const wrapper = shallow(<Form login={onPressEvent} isValidForm={false} />);

        try {
            wrapper.find(TouchableOpacity).first().props().onPress();
        } catch (error) {
            isPress = false;
        }

        expect(isPress).toBe(false);
    });
});