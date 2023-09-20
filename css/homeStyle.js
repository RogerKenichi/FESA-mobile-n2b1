import {StyleSheet, StatusBar} from 'react-native';

const homeStyle = StyleSheet.create({
    
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

export default homeStyle;