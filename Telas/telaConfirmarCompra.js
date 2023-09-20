import { useState, useEffect, react } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../css/styles';

export default function ConfirmarCompra({navigation}){
    
    const [carrinho, setCarrinho] = useState([]);

    return (
        <View style={styles.container}>
            
            <Text style={styles.titulo}>Confirmar a compra dos seguintes items?</Text>
            <TouchableOpacity style={styles.botaoVoltar}
                onPress={()=>navigation.navigate('Tela2')}>
                <Text>Voltar</Text>
            </TouchableOpacity>

        </View>

    );

}