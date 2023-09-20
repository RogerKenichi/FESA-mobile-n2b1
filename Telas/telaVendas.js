import {react} from 'react';
import { Text, View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import styles from '../css/styles';
import Venda from '../componentes/venda';
import { useState, useEffect } from 'react';
import { obterTodasVendas } from '../database/dbservice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Tela3({navigation}){

    const [vendas, setVendas] = useState([]);

    useEffect(() => {
        carregaDados();
    }, []); 
    
    async function carregaDados() {
        try {      
            let todasVendas = await obterTodasVendas();
            setVendas(todasVendas);      
        } catch (e) {
          Alert.alert(e.toString());
        }
    }

    async function verDetalheVenda(venda) {
        const jsonValue = JSON.stringify(venda);
        AsyncStorage.setItem('@vendaId', jsonValue);

        navigation.navigate('VendaDetalhe');
    }
    
    return (
        <View style={styles.container}>
            
            <Text style={styles.titulo}>Lista de Vendas</Text>

            <ScrollView style={styles.listaProdutos}>
            {
                vendas.map((venda, index) => (
                    <Venda venda={venda} key={index.toString()} verDetalheVenda={verDetalheVenda} />
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