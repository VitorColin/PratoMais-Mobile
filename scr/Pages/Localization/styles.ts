import { View, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
    },
    map:{
        flex: 1.5,
        width: '99%',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        margin: 0,
        color:'#FFF',
        textAlign:'center',
        display:'flex',
        paddingBottom:10,
        paddingTop:10,
    },
    list:{
        color:'#FFF',
    },
    lista: {
        backgroundColor: "#000",
        padding: 20,
        marginVertical: 8,
    },
    text: {
        backgroundColor: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    text2: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
});