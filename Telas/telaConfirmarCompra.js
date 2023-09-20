import { useState, useEffect, react } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import styles from '../css/styles';
import {
    adicionaVenda
} from '../database/dbservice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProdutoCarrinho from '../componentes/produtoCarrinho';

export default function ConfirmarCompra({navigation}){

    const [carrinhoFinal, setCarrinhoFinal] = useState([]);

    useEffect(() => {
        carregaDados();
    }, []);

    async function carregaDados() {
        try {
          const jsonValue = await AsyncStorage.getItem('@carrinho')
          if (jsonValue != null) {
            const obj = JSON.parse(jsonValue);
            setCarrinhoFinal(obj);
            console.log(obj);
          }
    
        } catch (e) {
          Alert.alert(e.toString());
        }
      }
    

    function removerDoCarrinho(identificador)
    {
        Alert.alert('Remover do carrinho', 'Remover o produto do carrinho?',
          [
            {
              text: 'Sim',
              onPress: () => efetivaRemocaoItemCarrinho(identificador),
            },
            {
              text: 'Não',
              style: 'cancel',
            }
          ]);
    }
    
    async function efetivaRemocaoItemCarrinho(identificador) {
        try {
          const carrinhoAux = carrinhoFinal.filter(carrinho => carrinho.id != identificador);
          const jsonValue = JSON.stringify(carrinhoAux);
          await AsyncStorage.setItem('@carrinho', jsonValue);
          Alert.alert('Item removido do carrinho');
          await carregaDados();
        } catch (e) {
          Alert.alert(e.toString());
        }
      }

    function finalizarCompra() {
        if(carrinhoFinal.length <= 0 || carrinhoFinal === undefined) {
            Alert.alert('Seu carrinho está vazio');
            return;
        }

        let valorVendaTotal = 0;
        for(let i = 0; i < carrinhoFinal.length; i++) {
            valorVendaTotal += parseFloat(carrinhoFinal[i].preco);
        }

        let objVenda = {
            id_vendas: createUniqueId(),
            data_venda: Date(Date.now()),
            valorTotal: valorVendaTotal
        }

        const novoCarrinho = [...carrinhoFinal];
        adicionaVenda(objVenda, novoCarrinho)

        navigation.navigate('CompraFinalizada');
    }

    function createUniqueId() {
      return Date.now().toString(36) + Math.random().toString(36).slice(0, 2);
    }

    return (
        <View style={styles.container}>
            
            <Text style={styles.titulo}>Confirmar a compra dos seguintes items?</Text>

            <ScrollView style={styles.listaProdutos}>
            {
                carrinhoFinal.map((produto, index) => (
                    <ProdutoCarrinho produto={produto} key={index.toString()} removerDoCarrinho={removerDoCarrinho} />
                ))
            }
            </ScrollView>


            <TouchableOpacity style={styles.botaoVoltar}
                onPress={()=>navigation.navigate('Tela2')}>
                <Text>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoVoltar}
                onPress={()=> finalizarCompra()}>
                <Text>Finalizar compra</Text>
            </TouchableOpacity>
        </View>

    );

}