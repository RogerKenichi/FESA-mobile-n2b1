import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1eb5d4',
    },
    titulo:{
        fontSize: 30,
        marginBottom: 50,
    },
    botaoHome:{
        width: 120,
        height: 60,
        backgroundColor: '#c0ced1',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    botaoVoltar:{
        width: 120,
        height: 60,
        backgroundColor: '#c0ced1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    produto: {
      backgroundColor: '#ed8f1c',
      flexDirection: 'row',
      height: 80,
      alignItems: 'center',
      margin: 10,
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    listaDescricao: {
        width: '50%',
        fontSize: 18,
        paddingRight: 10,
    },

    dadosListaPreco: {
        width: '40%',
        flexDirection: 'row',
    },
    dadosBotoesAcao: {
        width: '10%',
    },
    iconTelefone: {
        width: 20,
        height: 25,
        marginRight: 5,
    },
    listaPreco: {
        color: "#FFF",
        fontSize: 18,
    },
    containerCadastro: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    tituloCadastro: {
        fontSize: 25,
        color: '#FFF',
        backgroundColor: 'blue',
        width: '100%',
        textAlign: 'center'
    },

    caixaTextoCadastro: {
        borderColor: "#000",
        borderWidth: 2,
        height: 50,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    botaoCadastro: {
        width: '30%',
        height: 50,
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#040d59',
    },
    botaoApagarTudo: {
        backgroundColor: 'red',
    },
    areaDadosCadastro: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    areaBotoesCadastro: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 30,
    },
    textoBotaoCadastro: {
        color: '#FFF',
    },
    areaDescricao: {
        width: '55%',
    },
    areaPreco: {
        width: '30%',
    },

    listaProdutos: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        marginTop: 20,
    },
    produto: {
        backgroundColor: '#ed8f1c',
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        margin: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    listaDescricao: {
        width: '50%',
        fontSize: 18,
        paddingRight: 10,
    },

    dadosListaPreco: {
        width: '40%',
        flexDirection: 'row',
    },
    dadosBotoesAcao: {
        width: '10%',
    },
    iconTelefone: {
        width: 20,
        height: 25,
        marginRight: 5,
    },
    listaPreco: {
        color: "#FFF",
        fontSize: 18,
    },
  });
  
  export default styles;