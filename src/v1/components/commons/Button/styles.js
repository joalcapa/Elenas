import {StyleSheet} from 'react-native';

import {Colors} from '../../../resources';

const styles = StyleSheet.create({
    button_container: {
        borderRadius: '8px',
        paddingTop: '8px',
        paddingBottom: '8px', 
        maxWidth: '200px',
        displayFlex: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: '14px',
        color: '#ffffff',
    },
    default_button: {
        backgroundColor: Colors.C_4287f5,
    },
});

export default styles;