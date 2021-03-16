import {renderHook} from '@testing-library/react-hooks';

import wrapper from '../../../../../__providers__/components/App';
import useStates from '../../../../../src/kernel/v1/hooks/useStates';
import {states} from '../../../../../__factories__/states';

describe('States', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('get states', async () => {
        const {result, waitForNextUpdate} = renderHook(
            () => useStates(),
            {wrapper},
        );

        await waitForNextUpdate();

        expect(result.current.states.length).toBe(states.length);
    });
});