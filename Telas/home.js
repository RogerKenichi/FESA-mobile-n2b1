import {react} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../css/styles';

export default function Home({navigation}){
    return (
        <View style={styles.container}>
            
            <Text style={styles.titulo}>Escolha uma tela</Text>

            <TouchableOpacity style={styles.botaoHome}
                onPress={()=>navigation.navigate('Tela1')}>
                <Text>Cadastro de Produtos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoHome}
                onPress={()=>navigation.navigate('Tela2')}>
                <Text>Compra de Produtos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoHome}
                onPress={()=>navigation.navigate('Tela3')}>
                <Text>Lista de Vendas</Text>
            </TouchableOpacity>

        </View>

    );

}