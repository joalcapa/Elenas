import {StyleSheet} from 'react-native';

import {Colors} from '../../../resources';

const styles = StyleSheet.create({
    button_container: {
        borderRadius: '4px',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '4px',
        paddingBottom: '4px', 
    },
    text: {
        fontSize: '14px',
        color: Colors.C_FFFFFF,
    },
    default_button: {
        backgroundColor: Colors.C_4287f5,
    },
});

export default styles;