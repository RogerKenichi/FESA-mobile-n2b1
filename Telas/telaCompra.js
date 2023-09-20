import {react} from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import styles from '../css/styles';
import {
    createTable,
    obtemTodosProdutos,
    adicionaProdutos,
    alteraProdutos,
    excluiProdutos,
    excluiTodosProdutos,
} from '../database/dbservice';
import ProdutoComprar from '../componentes/produtoComprar';

export default function Tela2({navigation}) {
    
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        carregaDados();
    }, []); 
    
    async function carregaDados() {
        try {      
            let produtos = await obtemTodosProdutos()
            setProdutos(produtos);      
        } catch (e) {
          Alert.alert(e.toString());
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Compra de Produtos</Text>

            <ScrollView style={styles.listaProdutos}>
            {
                produtos.map((produto, index) => (
                    <ProdutoComprar produto={produto} key={index.toString()} />
                ))
            }
            </ScrollView>

            <TouchableOpacity style={styles.botaoVoltar}
                onPress={()=>navigation.navigate('Home')}>
                <Text>Voltar</Text>
            </TouchableOpacity>

        </View>

    );

}