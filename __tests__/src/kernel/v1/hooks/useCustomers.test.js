import {renderHook, act} from '@testing-library/react-hooks';

import wrapper from '../../../../../__providers__/components/App';
import useCustomers from '../../../../../src/kernel/v1/hooks/useCustomers';
import {customers} from '../../../../../__factories__/customers';

describe('Create and Edit', () => {
    test('change fields', async () => {
        const {result} = renderHook(
            () => useCustomers(),
            {wrapper},
        );

        const customer = customers[0];

        expect(result.current.firstName).toBe('');
        expect(result.current.lastName).toBe('');
        expect(result.current.cedula).toBe('');
        expect(result.current.email).toBe('');
        expect(result.current.cellphone).toBe('');
        expect(result.current.address).toBe('');
        expect(result.current.streetAddress).toBe('');
        expect(result.current.city).toBe('');
        expect(result.current.cityId).toBe(0);
        expect(result.current.stateShortCode).toBe('');
        expect(result.current.country).toBe('');
        expect(result.current.stateId).toBe(0);

        act(() => {
            result.current.changeFirstName(customer.firstName);
            result.current.changeLastName(customer.lastName);
            result.current.changeCedula(customer.cedula);
            result.current.changeEmail(customer.email);
            result.current.changeCellphone(customer.cellphone);
            result.current.changeAddress(customer.address);
            result.current.changeStreetAddress('Test streetAddress');
            result.current.changeCity('Test city');
            result.current.changeCityId(1);
            result.current.changeStateShortCode('Test ShortCode');
            result.current.changeCountry('Test Country');
            result.current.changeStateId(2);
        });

        expect(result.current.firstName).toBe(customer.firstName);
        expect(result.current.lastName).toBe(customer.lastName);
        expect(result.current.cedula).toBe(customer.cedula);
        expect(result.current.email).toBe(customer.email);
        expect(result.current.cellphone).toBe(customer.cellphone);
        expect(result.current.address).toBe(customer.email);
        expect(result.current.streetAddress).toBe('Test streetAddress');
        expect(result.current.city).toBe('Test city');
        expect(result.current.cityId).toBe(1);
        expect(result.current.stateShortCode).toBe('Test ShortCode');
        expect(result.current.country).toBe('Test Country');
        expect(result.current.stateId).toBe(2);
    });
});