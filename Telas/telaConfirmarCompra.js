import { useState, useEffect, react } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import styles from '../css/styles';
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
        navigation.navigate('CompraFinalizada');
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