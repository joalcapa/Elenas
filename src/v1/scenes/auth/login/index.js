import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useLogin, useUser} from '../../../../ElenasKernel';

import InputField from '../../../components/commons/InputField';
import Button from '../../../components/commons/Button';
import TextField, {EXTRA_TYPE} from '../../../components/commons/TextField';

import styles from './styles';

const Login = () => {
    const {user} = useUser();
    const {
        cellphone,
        password,
        isValidForm,
        changeCellphone,
        changePassword,
        login,
    } = useLogin();

    useEffect(() => {
        if (user) {
            // logged user
        }
    }, [user]);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <View style={styles.form_content}>
                <TextField 
                    isTitle 
                    text="Inicio de sesión" 
                    type={EXTRA_TYPE}
                />
            </View>
            <View style={styles.input_content}>
                <InputField 
                    placeholder="Telefono"
                    value={cellphone}
                    onChangeText={changeCellphone}
                />
            </View>
            <View style={styles.input_content}>
                <InputField 
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={changePassword}
                />
            </View>
            <View style={styles.button_content}>
                <Button 
                    isGreenButton
                    text="Iniciar Sesión" 
                    isDisabled={!isValidForm}
                    onPress={login} 
                />
            </View>
        </View>
        </View>
    );
};

export default Login;