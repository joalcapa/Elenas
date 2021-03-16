import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {create} from 'react-test-renderer';
import {TouchableOpacity} from 'react-native';
import {shallow, configure} from 'enzyme';

import Select from '../../../../../../src/v1/components/commons/Select/Component';

configure({adapter: new Adapter()});
describe('Select component', () => {
    test('render Select component', () => {
        const tree = create(<Select />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render Select component with value', () => {
        const tree = create(<Select value="select"/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render Select component with options', () => {
        const tree = create(<Select options={[{label: 'option 1', value: '1'}, {label: 'option 2 ', value: '2'}]}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('onSelect functionality', () => {
        const onPressEvent = jest.fn();
        onPressEvent.mockReturnValue('Link on press invoked');
        const wrapper = shallow(<Select onSelect={onPressEvent} options={[{label: 'option 1', value: '1'}, {label: 'option 2 ', value: '2'}]} />);

        wrapper.find(TouchableOpacity).first().props().onPress();
        expect(onPressEvent.mock.results[0].value).toBe('Link on press invoked');
    });
});