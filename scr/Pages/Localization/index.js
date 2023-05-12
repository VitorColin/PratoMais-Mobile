import { View } from 'react-native';
import {styles} from './style';

export default function Localization(){
    return(
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    }
})