import {
     Text,TouchableOpacity, View, Image
} from 'react-native';

import styles from '../css/styles';
import { Ionicons, Entypo } from '@expo/vector-icons';



// <Image source={iconTelefone} style={styles.iconTelefone} />


export default function Produto({produto, removerElemento, editar}) {
    return (
        <View style={styles.produto} >

            <Text style={styles.listaDescricao}> {produto.descricao}</Text>
            <View style={styles.dadosListaPreco}>
                <Text style={styles.listaTelefone} >{produto.preco} </Text>
            </View>

            <View style={styles.dadosBotoesAcao}>
                <TouchableOpacity onPress={() => removerElemento(produto.id)}>
                    <Ionicons name="md-remove-circle" size={32} color="red" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => editar(produto.id)}>
                    <Entypo name="edit" size={32} color="black" />
                </TouchableOpacity>

            </View>
        </View>
    );

};