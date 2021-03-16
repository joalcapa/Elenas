import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height,
    },
    select_label: {
      paddingTop: 15,
      paddingBottom: 15,
    },
    content: {
        width: '100%',
        maxWidth: 700,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: '10px',
        paddingBottom: '10px',
    },
    form_content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    input_content: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    button_content: {
        paddingTop: 10,
        paddingBottom: 10,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box_button: {
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;