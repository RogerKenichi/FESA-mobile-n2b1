import { Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useState, useEffect, react } from 'react';
import styles from '../css/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    createTable,
    obtemTodosProdutos,
    obtemProduto,
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

        try {
            const jsonValue = await AsyncStorage.getItem('@carrinho')
            if (jsonValue != null) {
              const obj = JSON.parse(jsonValue);
              setCarrinho(obj);
              console.log(obj);
            }
      
          } catch (e) {
            Alert.alert(e.toString());
          }
    }

    function adicionarAoCarrinho(identificador) {
        Alert.alert('Adicionar ao carrinho', 'Adicionar o produto ao carrinho?',
          [
            {
              text: 'Sim',
              onPress: () => efetivoAdicionarProdutoAoCarrinho(identificador),
            },
            {
              text: 'Não',
              style: 'cancel',
            }
          ]);
      }
      
    async function efetivoAdicionarProdutoAoCarrinho(identificador) {
        try {
            const produtoNoCarrinho = await obtemProduto(identificador)
            const novoCarrinho = [...carrinho];
            console.log(novoCarrinho);
            novoCarrinho.push(produtoNoCarrinho);
            setCarrinho(novoCarrinho);

            const jsonValue = JSON.stringify(novoCarrinho);
            await AsyncStorage.setItem('@carrinho', jsonValue);
        } catch (e) {
        Alert.alert(e);
        }
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
                onPress={() => navigation.navigate('ConfirmarCompra')}>
                <Text>Ir para o carrinho</Text>
            </TouchableOpacity>

        </View>

    );

}