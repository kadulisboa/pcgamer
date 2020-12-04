import React, { useEffect, useState } from 'react';
import {
    Container,
    Text,
    Header,
    Pedidos,
    Logo,
    PecaRegistrada,
    Display,
    Registros,
    Editar,
    Excluir
} from './styles';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, RefreshControlComponent, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

    const navigation = useNavigation();
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        api.get('/listaRegistros').then(response => {
            setOrders(response.data)
        })
    }, [orders]);

    function deletar(id) {
        api.delete(`deletarRegistro/${id}`).then(response => {
            setOrders(response.data)
        })

    }

    async function edit(id) {
        await AsyncStorage.setItem("@id_registro", id);
        navigation.navigate('EditarPedido');
    }
    function back() {
        navigation.navigate('Home');
    }

    return (

        <Container>
            <Header>
                <Logo>
                    PC dos Sonhos
                </Logo>

                <Display>
                    <Registros>
                        <FontAwesome onPress={back} name="arrow-left" size={54} color="white" />
                        <Text style={{ color: "white" }}>Voltar</Text>
                    </Registros>
                    {/* <View style={{ padding: 20 }}>
                    </View>
                    <Registros>
                        <FontAwesome onPress={edit} name="edit" size={54} color="white" />
                        <Text style={{ color: "white" }}>Editar</Text>
                    </Registros> */}
                </Display>

            </Header>

            <Display>

                {orders.map(peca => (
                    <PecaRegistrada key={peca._id}>

                        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
                            {peca.Pecas.Nome}
                        </Text>
                        <Text style={{ color: "white", fontSize: 16, fontWeight: "normal" }}>
                            Quantidade: {peca.Quantidade}
                        </Text>
                        <Text style={{ color: "#011627", fontSize: 20, fontWeight: "bold", marginTop: 10, textDecorationLine: "underline" }}>
                            R$: {peca.ValorTotal}
                        </Text>
                        <Editar onPress={(event) => edit(peca._id)} >
                            <Text style={{ textAlign: "center" }} >Editar</Text>
                        </Editar>
                        <Excluir onPress={(event) => deletar(peca._id)}>
                            <Text style={{ textAlign: "center" }} >Excluir</Text>
                        </Excluir>
                    </PecaRegistrada>

                )
                )}
            </Display>

        </Container>
    )
}

export default Home
