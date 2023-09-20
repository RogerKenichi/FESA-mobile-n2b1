import {
    Text, TouchableOpacity, View, Image, ScrollView
} from 'react-native';

import styles from '../css/styles';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';

// <Image source={iconTelefone} style={styles.iconTelefone} />


export default function ProdutoCarrinho({produto, removerDoCarrinho}) {

    return (
        <View style={styles.produto} >

            <Text style={styles.listaDescricao}> {produto.descricao}</Text>
            <View style={styles.dadosListaPreco}>
                <Text style={styles.listaTelefone} >{produto.preco} </Text>
            </View>

            <View style={styles.dadosBotoesAcao}>
                <TouchableOpacity onPress={() => removerDoCarrinho(produto.id)}>
                        <Ionicons name="md-remove-circle" size={32} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    );

};