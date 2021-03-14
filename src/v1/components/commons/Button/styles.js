import {StyleSheet} from 'react-native';

import {Colors, FontSize} from '../../../resources';

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
        fontSize: FontSize.normal,
        color: Colors.C_FFFFFF,
    },
    default_button: {
        backgroundColor: Colors.C_4287f5,
    },
});

export default styles;