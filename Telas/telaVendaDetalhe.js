import { Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useState, useEffect, react } from 'react';
import styles from '../css/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    createTable,
    obterTodosOsProdutosDaVenda,
    obtemTodosProdutos,
    adicionaProdutos,
    experimento,
    excluiProdutos,
    excluiTodosProdutos,
} from '../database/dbservice';
import ProdutoComprar from '../componentes/produtoComprar';

export default function VendaDetalhe({navigation}){

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        carregaDados();
    }, []);
    
    async function carregaDados() {

        try {
            await AsyncStorage.getItem('@vendaId').then(valor => {
                if (valor === null)
                    return;
                console.log(JSON.parse(valor))
                carregar(JSON.parse(valor));
            });
        } catch (e) {
          Alert.alert(e.toString());
        }
    }

    async function carregar(idVenda) {
        let produtos = await obterTodosOsProdutosDaVenda(idVenda)
        console.log(produtos);
        setProdutos(produtos);    
    }


    return (
        <View style={styles.container}>
            
            <Text style={styles.titulo}>Lista de Produtos da venda { idVenda }</Text>

            

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