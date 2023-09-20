import {
    Text,TouchableOpacity, View, Image
} from 'react-native';

import styles from '../css/styles';
import { Ionicons, Entypo } from '@expo/vector-icons';



// <Image source={iconTelefone} style={styles.iconTelefone} />


export default function Venda({venda, verDetalheVenda}) {

    return (
        <View style={styles.produto} >

            <Text style={styles.listaDescricao}> {venda.id_vendas}</Text>
            <View style={styles.dadosListaPreco}>
                    <Text style={styles.listaTelefone} >{venda.data_venda} </Text>
                    <Text style={styles.listaDescricao}> {venda.valorTotal}</Text>
            </View>

            <View style={styles.dadosBotoesAcao}>

                <TouchableOpacity onPress={()=>verDetalheVenda(venda.id_vendas)}>
                    <Entypo name="edit" size={32} color="black" />
                </TouchableOpacity>

            </View>
        </View>
    );

};