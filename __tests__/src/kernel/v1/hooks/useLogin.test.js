import {renderHook, act} from '@testing-library/react-hooks';

import wrapper from '../../../../../__providers__/components/App';
import useLogin from '../../../../../src/kernel/v1/hooks/useLogin';
import {customers} from '../../../../../__factories__/customers';

describe('Login', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('change cellphone', async () => {
        const {result} = renderHook(
            () => useLogin(),
            {wrapper},
        );

        const cellphone = customers[0].cellphone;
        expect(result.current.cellphone).toBe('');

        act(() => {
            result.current.changeCellphone(cellphone);
        });

        expect(result.current.cellphone).toBe(cellphone);
    });

    test('change password', async () => {
        const {result} = renderHook(
            () => useLogin(),
            {wrapper},
        );

        const password = 'password';
        expect(result.current.password).toBe('');

        act(() => {
            result.current.changePassword(password);
        });

        expect(result.current.password).toBe(password);
    });

    test('valid form', async () => {
        const {result} = renderHook(
            () => useLogin(),
            {wrapper},
        );

        const cellphone = customers[0].cellphone;
        const password = 'password';
        expect(result.current.isValidForm).toBe(false);

        act(() => {
            result.current.changeCellphone(cellphone);
        });

        expect(result.current.isValidForm).toBe(false);

        act(() => {
            result.current.changePassword(password);
        });

        expect(result.current.isValidForm).toBe(true);
    });

    test('sucessful login function', async () => {
        const {result, waitForNextUpdate} = renderHook(
            () => useLogin(),
            {wrapper},
        );

        const cellphone = customers[0].cellphone;
        const password = 'password';
        act(() => {
            result.current.changeCellphone(cellphone);
            result.current.changePassword(password);
        });

        act(() => {
            result.current.login();
        });

        await waitForNextUpdate();

        expect(result.current.isSuccesfull).toBe(true);
        expect(JSON.parse(localStorage.getItem('USER'))).toHaveProperty('email', customers[0].email);
        expect(JSON.parse(localStorage.getItem('USER'))).toHaveProperty('authToken');
    });

    test('failed login function', async () => {
        const {result, waitForNextUpdate} = renderHook(
            () => useLogin(),
            {wrapper},
        );

        const cellphone = customers[0].cellphone;
        const password = 'other password';
        act(() => {
            result.current.changeCellphone(cellphone);
            result.current.changePassword(password);
        });

        act(() => {
            result.current.login();
        });

        await waitForNextUpdate();

        expect(result.current.isError).toBe(true);
        expect(localStorage.getItem('USER')).toBeNull();
    });
});