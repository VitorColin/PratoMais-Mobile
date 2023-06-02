import { View, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map:{
        flex: 1,
        width: '99%',
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 50,
    },
    areaButton: {
        backgroundColor: '#ccc8c8',
        height: 60,
        width: 60,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelButton: {
        marginTop: 8,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFF'
    }
});