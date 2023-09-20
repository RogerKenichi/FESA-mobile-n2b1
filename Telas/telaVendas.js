import {react} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../css/styles';

export default function Tela3({navigation}){
    return (
        <View style={styles.container}>
            
            <Text style={styles.titulo}>Lista de Vendas</Text>
            <TouchableOpacity style={styles.botaoVoltar}
                onPress={()=>navigation.navigate('Home')}>
                <Text>Voltar</Text>
            </TouchableOpacity>

        </View>

    );

}