import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20px',
        paddingBottom: '40px',
        width,
    },
    contain: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
    },
    BoxOne: {
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingBottom: '10px',
        width: '12.5%'
    },
    textBox: {
    
    },
});

export default styles;