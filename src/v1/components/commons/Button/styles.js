import {StyleSheet} from 'react-native';

import {Colors, FontSize} from '../../../resources';

const styles = StyleSheet.create({
    button_container: {
        borderRadius: '8px',
        paddingTop: '8px',
        paddingBottom: '8px',
        width: '100%', 
        maxWidth: '150px',
        displayFlex: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: FontSize.normal,
        color: Colors.C_000000,
    },
    default_button: {
        backgroundColor: Colors.C_4287f5,
    },
    green_button: {
        backgroundColor: Colors.C_42f575,
    },
    disabled_button: {
        backgroundColor: Colors.C_dbdbdb,
    },
});

export default styles;