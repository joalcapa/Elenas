import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Modal, View, ScrollView} from 'react-native';

import TextField from '../../../components/commons/TextField';
import Button from '../../../components/commons/Button';

import styles from './styles';

/**
 * Componente que renderiza los items de un select basico.
 */
const Component = (props) => (
    <>
        <Modal
            animationType="none"
            transparent={true}
            visible={props.isVisibleSelect}
            onRequestClose={props.hiddenSelect}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <ScrollView>
                        {props.options.map((option) => (
                            <TouchableOpacity
                                key={`Select${option.label}`}
                                style={styles.item_content}
                                onPress={() => {
                                    props.onSelect(option);
                                    props.hiddenSelect();
                                }}>
                                <TextField text={option.label} />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <Button
                    isGreenButton
                    text={'Salir'}
                    onPress={props.hiddenSelect}
                />
            </View>
        </Modal>
        <TouchableOpacity onPress={props.options.length > 0 ? props.showSelect : null} style={styles.button_content}>
            <TextField text={props.value ? props.value : 'Seleccionar'} />
        </TouchableOpacity>
    </>
);

Component.propTypes = {
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
    /**
     * Funcion que muestra el selector (Modal).
     */
    showSelect: PropTypes.func,
    /**
     * Funcion que oculta el selector (Modal).
     */
    hiddenSelect: PropTypes.func,
    /**
     * Determina si el selector se encuentra visible.
     */
    isVisibleSelect: PropTypes.bool,
};

Component.defaultProps = {
    value: '',
    options: [],
    onSelect: () => {},
    showSelect: () => {},
    hiddenSelect: () => {},
    isVisibleSelect: false,
};

export default Component;