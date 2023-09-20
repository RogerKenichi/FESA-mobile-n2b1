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
        height: 35,
        backgroundColor: '#c0ced1',
        borderRadius: 5,
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
        backgroundColor: '#a4d1af',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    tituloCadastro: {
        fontSize: 25,
        color: '#FFF',
        backgroundColor: '#d97b8b',
        width: '100%',
        textAlign: 'center'
    },

    caixaTextoCadastro: {
        borderColor: "#000",
        borderWidth: 2,
        height: 35,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    botaoCadastro: {
        width: '30%',
        height: 35,
        borderColor: '#6fa47c',
        borderWidth: 2,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a4d1af',
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
        marginTop: 10,
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
        backgroundColor: '#e9f8ed',
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


    botaoHome:{
        width: 280,
        height: 60,
        backgroundColor: '#c0ced1',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,

        paddingVertical: 12,
        paddingHorizontal: 24,
        fontSize: 16,
        textAlign: 'center',
        backgroundColor: '#d97b8b', // Cor de fundo do botão (azul)
        color: '#fff', // Cor do texto do botão (branco)
        borderRadius: 12,
    },

    homeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a4d1af',
    },

    homeText: {
        color: 'white',
        fontSize: 18
    },

    imagemCima: {
        height: 200,
        width: 200,
    }


  });
  
  export default styles;