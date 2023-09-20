import { StatusBar } from 'expo-status-bar';
import {
  Alert, Text, TextInput, TouchableOpacity,
  View, Keyboard, ScrollView, Image
} from 'react-native';
import { useState, useEffect } from 'react';
import styles from './styles';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './Telas/home';
import Tela1 from './Telas/telaCadastro';
import Tela2 from './Telas/telaCompra';
import Tela3 from './Telas/telaVendas';
import ConfirmarCompra from './Telas/telaConfirmarCompra';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Tela1,
    Tela2,
    Tela3,
    ConfirmarCompra,
  })
);

export default function App() {
  return (
    <Routes/>
  );
}

