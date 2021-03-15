import React from 'react';
import PropTypes from 'prop-types';

import Component from './Component';
import useSelect from '../../../hooks/useSelect';

/**
 * Este componente renderiza un select basico.
 */
const Select = (props) => {
    const hook = useSelect();
    return <Component {...props} {...hook} />;
};

Select.propTypes = {
    /**
     * Valor del select.
     */
    value: PropTypes.string,
    /**
     * Opciones del select.
     */
    options: PropTypes.array,
    /**
     * Funcion que devuelve el dato seleccionado.
     */
    onSelect: PropTypes.func,
};

Select.defaultProps = {
    value: '',
    options: [],
    onSelect: () => {},
};

export default Select;