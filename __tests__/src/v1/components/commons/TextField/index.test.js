import React from 'react';
import {create} from 'react-test-renderer';

import TextField, {
    SMALL_TYPE,
    EXTRA_TYPE,
    BIG_TYPE,
    HIGH_TYPE,
} from '../../../../../../src/v1/components/commons/TextField';

describe('TextField component', () => {
    test('render empty text component', () => {
        const tree = create(<TextField />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render text component with text', () => {
        const tree = create(<TextField text={'Test text'} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render text component with text and title', () => {
        const tree = create(<TextField isTitle text={'Test text'} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render text component with text and title and fontSize of 14px', () => {
        const tree = create(<TextField isTitle text={'Test text'} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render text component with text and title and fontSize of 12px', () => {
        const tree = create(<TextField isTitle text={'Test text'} type={SMALL_TYPE} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render text component with text and title and fontSize of 16px', () => {
        const tree = create(<TextField isTitle text={'Test text'} type={EXTRA_TYPE} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render text component with text and title and fontSize of 20px', () => {
        const tree = create(<TextField isTitle text={'Test text'} type={BIG_TYPE} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render text component with text and title and fontSize of 32px', () => {
        const tree = create(<TextField isTitle text={'Test text'} type={HIGH_TYPE} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});