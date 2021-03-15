import {StyleSheet, Dimensions} from 'react-native';

import {Colors} from '../../../resources';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    button_content: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: Colors.C_7e807f,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20,
        borderRadius: 5,
    },
    content: {
        width: 300,
        height: 250,
        backgroundColor: Colors.C_FFFFFF,
    },
    item_content: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.5)',
        width,
        height,
    },
});

export default styles;