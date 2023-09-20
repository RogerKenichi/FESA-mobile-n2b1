import { StatusBar } from 'expo-status-bar';
import {
  Alert, Text, TextInput, TouchableOpacity,
  View, Keyboard, ScrollView, Image
} from 'react-native';
import { useState, useEffect } from 'react';
import styles from '../css/styles';
import Produto from '../componentes/produto';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import {
  createTable,
  obtemTodosProdutos,
  adicionaProdutos,
  alteraProdutos,
  excluiProdutos,
  excluiTodosProdutos,
} from '../database/dbservice';

export default function Tela1({ navigation }) {

  const [id, setId] = useState();
  const [descricao, setDescricao] = useState();
  const [preco, setPreco] = useState();
  const [produtos, setProdutos] = useState([]);
  let tabelasCriadas = false;

  async function processamentoUseEffect() {
    if (!tabelasCriadas) {
      console.log("Verificando necessidade de criar tabelas...");
      tabelasCriadas = true;
      await createTable();
    }

    console.log("UseEffect...");
    await carregaDados();
  }

  useEffect(
    () => {
      console.log('executando useffect');
      processamentoUseEffect(); //necessário método pois aqui não pode utilizar await...
    }, []);

  function createUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(0, 2);
  }

  async function salvaDados() {
    let novoRegistro = id == undefined;

    let obj = {
      id: novoRegistro? createUniqueId() : id,
      descricao: descricao,
      preco: preco,
    };

    try {

      if (novoRegistro) {
        let resposta = (await adicionaProdutos(obj));

        if (resposta)
          Alert.alert('Registro adicionado com sucesso!');
        else
          Alert.alert('Falha ao adicionar registro!');
      }
      else {      
        let resposta = await alteraProdutos(obj);
        if (resposta)
          Alert.alert('Registro alterado com sucesso!');
        else
          Alert.alert('Falha ao alterar registro!');
      }
      
      Keyboard.dismiss();
      limparCampos();
      await carregaDados();
    } catch (e) {
      Alert.alert(e);
    }
  }

  async function  carregaDados() {
    try {      
        let produtos = await obtemTodosProdutos()
        setProdutos(produtos);      
    } catch (e) {
      Alert.alert(e.toString());
    }
  }

  function editar(identificador) {
    const produto = produtos.find(produto => produto.id == identificador);

    if (produto != undefined) {
      setId(produto.id);
      setDescricao(produto.descricao);
      setPreco(produto.preco);
    }

    console.log(produto);
  }


  async function limparCampos() {
    setDescricao("");
    setPreco("");
    setId(undefined);
    Keyboard.dismiss();
  }


  async function efetivaExclusao() {
    try {
      await excluiTodosProdutos();
      await carregaDados();
    }
    catch (e) {
      Alert.alert(e);
    }
  }

  function apagarTudo() {
    if (Alert.alert('Muita atenção!!!', 'Confirma a exclusão de todos os produtos?',
      [
        {
          text: 'Sim, confirmo!',
          onPress: () => {
            efetivaExclusao();
          }
        },
        {
          text: 'Não!!!',
          style: 'cancel'
        }
      ]));
  }


  function removerElemento(identificador) {
    Alert.alert('Atenção', 'Confirma a remoção do produto?',
      [
        {
          text: 'Sim',
          onPress: () => efetivaRemoverProduto(identificador),
        },
        {
          text: 'Não',
          style: 'cancel',
        }
      ]);
  }

  async function efetivaRemoverProduto(identificador) {
    try {
      await excluiProdutos(identificador);
      Keyboard.dismiss();
      limparCampos();
      await carregaDados();
      Alert.alert('Produto apagado com sucesso!!!');
    } catch (e) {
      Alert.alert(e);
    }
  }
   
    return (
        <View style={styles.containerCadastro}>
          <Text style={styles.tituloCadastro}>Cadastro de Produtos</Text>
  
          <View style={styles.areaDadosCadastro}>
  
            <View style={styles.areaDescricao}>
              <Text>Descrição</Text>
              <TextInput style={styles.caixaTextoCadastro}
                onChangeText={(texto) => setDescricao(texto)}
                value={descricao} />
            </View>
  
           <View style={styles.areaPreco}>
              <Text>Preço</Text>
              <TextInput style={styles.caixaTextoCadastro}
                onChangeText={(texto) => setPreco(texto)}
                value={preco}
                keyboardType='numbers-and-punctuation' />
           </View>
  
        </View>
  
  
        <View style={styles.areaBotoesCadastro}>
          <TouchableOpacity style={styles.botaoCadastro} onPress={() => salvaDados()}>
            <Text style={styles.textoBotaoCadastro}>Salvar</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.botaoCadastro} onPress={() => limparCampos()}>
            <Text style={styles.textoBotaoCadastro}>Cancelar</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={[styles.botaoCadastro, styles.botaoApagarTudo]} onPress={() => apagarTudo()}>
            <Text style={styles.textoBotaoCadastro}>Apagar tudo</Text>
          </TouchableOpacity>
        </View>
  
  
  
        <ScrollView style={styles.listaProdutos}>
          {
            produtos.map((produto, index) => (
              <Produto produto={produto} key={index.toString()}
                removerElemento={removerElemento} editar={editar} />
            ))
          }
  
        </ScrollView>

        <TouchableOpacity style={styles.botaoVoltar}
          onPress={()=>navigation.navigate('Home')}>
          <Text>Voltar</Text>
        </TouchableOpacity>
  
  
        <StatusBar style="auto" />
      </View>

    );

}