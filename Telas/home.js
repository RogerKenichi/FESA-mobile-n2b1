import {react} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../css/styles';
import homeStyle from '../css/homeStyle';

export default function Home({navigation}){
    return (
        <View style={homeStyle.homeContainer}>

            <Image source={require('../img/akashi-1.png')} style={homeStyle.imagemCima} />
            
            <Text style={styles.titulo}>Escolha uma opção</Text>

            <TouchableOpacity style={homeStyle.botaoHome}
                onPress={()=>navigation.navigate('Tela1')}>
                <Text style={homeStyle.homeText}>Cadastro de Produtos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyle.botaoHome}
                onPress={()=>navigation.navigate('Tela2')}>
                <Text style={homeStyle.homeText}>Compra de Produtos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyle.botaoHome}
                onPress={()=>navigation.navigate('Tela3')}>
                <Text style={homeStyle.homeText}>Lista de Vendas</Text>
            </TouchableOpacity>

        </View>

    );

}