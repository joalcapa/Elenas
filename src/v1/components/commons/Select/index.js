import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Modal, View, ScrollView} from 'react-native';

import TextField from '../../../components/commons/TextField';
import Button from '../../../components/commons/Button';
import useSelect from '../../../hooks/useSelect';

import styles from './styles';

/**
 * Este componente renderiza un select basico.
 */
const Select = (props) => {
    const {onSelect, value, options} = props;
    const {isVisibleSelect, showSelect, hiddenSelect} = useSelect();

    return (
        <>
            <Modal
                animationType="none"
                transparent={true}
                visible={isVisibleSelect}
                onRequestClose={hiddenSelect}>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <ScrollView>
                            {options.map((option) => (
                                <TouchableOpacity
                                    key={`Select${option.label}`}
                                    style={styles.item_content}
                                    onPress={() => {
                                        onSelect(option);
                                        hiddenSelect();
                                    }}>
                                    <TextField text={option.label} />
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                    <Button
                        isGreenButton
                        text={'Salir'}
                        onPress={hiddenSelect}
                    />
                </View>
            </Modal>
            <TouchableOpacity onPress={options.length > 0 ? showSelect : null} style={styles.button_content}>
                <TextField text={value ? value : 'Seleccionar'} />
            </TouchableOpacity>
        </>
    );
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