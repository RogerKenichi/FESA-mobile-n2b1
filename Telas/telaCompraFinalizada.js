import {react} from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../css/styles';

export default function CompraFinalizada({navigation}){
    return (
        <View style={styles.container}>


            
            <Text style={styles.titulo}>Nyahh, obrigada pelas compras!</Text>
            <TouchableOpacity style={styles.botaoVoltar}
                onPress={()=>navigation.navigate('ConfirmarCompra')}>
                <Text>Voltar ao início</Text>
            </TouchableOpacity>

        </View>

    );

}