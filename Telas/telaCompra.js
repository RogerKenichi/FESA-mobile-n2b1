import { Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useState, useEffect, react } from 'react';
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
    const [carrinho, setCarrinho] = useState([]);

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
    
    function adicionarAoCarrinho() {
        Alert.alert("Adicionado");
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Compra de Produtos</Text>

            <ScrollView style={styles.listaProdutos}>
            {
                produtos.map((produto, index) => (
                    <ProdutoComprar produto={produto} key={index.toString()} adicionarCarrinho={adicionarAoCarrinho} />
                ))
            }
            </ScrollView>

            <TouchableOpacity style={styles.botaoVoltar}
                onPress={()=>navigation.navigate('Home')}>
                <Text>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoVoltar}
                onPress={()=>navigation.navigate('ConfirmarCompra')}>
                <Text>Ir para o carrinho</Text>
            </TouchableOpacity>

        </View>

    );

}