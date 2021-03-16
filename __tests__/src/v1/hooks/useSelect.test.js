import {renderHook, act} from '@testing-library/react-hooks';

import useSelect from '../../../../src/v1/hooks/useSelect';

describe('UseSelect hook', () => {
    test('select isVisible in false default', () => {
        const {result} = renderHook(() => useSelect());
        expect(result.current.isVisibleSelect).toBe(false);
    });

    test('select isVisible call showSelect', () => {
        const {result} = renderHook(() => useSelect());
        expect(result.current.isVisibleSelect).toBe(false);

        act(() => {
            result.current.showSelect();
        });

        expect(result.current.isVisibleSelect).toBe(true);
    });

    test('select isVisible call hiddenSelect', () => {
        const {result} = renderHook(() => useSelect());
        expect(result.current.isVisibleSelect).toBe(false);

        act(() => {
            result.current.showSelect();
        });

        expect(result.current.isVisibleSelect).toBe(true);

        act(() => {
            result.current.hiddenSelect();
        });

        expect(result.current.isVisibleSelect).toBe(false);
    });
});