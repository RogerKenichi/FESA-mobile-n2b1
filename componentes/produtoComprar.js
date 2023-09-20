import {
     Text, TouchableOpacity, View, Image, ScrollView
} from 'react-native';

import styles from '../css/styles';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';

// <Image source={iconTelefone} style={styles.iconTelefone} />


export default function ProdutoComprar({produto, adicionarCarrinho}) {

    return (
        <View style={styles.produto} >

            <Text style={styles.listaDescricao}> {produto.descricao}</Text>
            <View style={styles.dadosListaPreco}>
                <Text style={styles.listaTelefone} >{produto.preco} </Text>
            </View>

            <View style={styles.dadosBotoesAcao}>
                <TouchableOpacity onPress={() => adicionarCarrinho(produto.id)}>
                    <AntDesign name="shoppingcart" size={32} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );

};