import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {create} from 'react-test-renderer';
import {TouchableOpacity} from 'react-native';
import {shallow, configure} from 'enzyme';

import Button from '../../../../../../src/v1/components/commons/Button';

configure({adapter: new Adapter()});
describe('Button component', () => {
    test('render blue button component', () => {
        const tree = create(<Button />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render green button component', () => {
        const tree = create(
            <Button
                isGreenButton
                onPress={() => {}}
                text="button title"
            />,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('onPress functionality', () => {
        const onPressEvent = jest.fn();
        onPressEvent.mockReturnValue('Link on press invoked');
        const wrapper = shallow(
            <Button onPress={onPressEvent} text="button title" />,
        );

        wrapper.find(TouchableOpacity).first().props().onPress();
        expect(onPressEvent.mock.results[0].value).toBe('Link on press invoked');
    });

    test('render disabled button component', () => {
        const tree = create(
            <Button
                isDisabled
                onPress={() => {}}
                text="button title"
            />,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('disabled functionality', () => {
        let isPress = true;
        const onPressEvent = jest.fn();
        onPressEvent.mockReturnValue('Link on press invoked');
        const wrapper = shallow(
            <Button isDisabled onPress={onPressEvent} text="button title" />,
        );

        try {
            wrapper.find(TouchableOpacity).first().props().onPress();
        } catch (error) {
            isPress = false;
        }

        expect(isPress).toBe(false);
    });
});