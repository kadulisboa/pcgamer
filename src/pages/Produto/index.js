import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Picker } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';

import {
    Container,
    Text,
    Header,
    Registros,
    Display,
    Logo,
    Pecas,
    Textproduct,
    Priceproduct,
    Salvar,
    Insert,
    Label,
    Mensagem,
} from './styles';

import { FontAwesome } from '@expo/vector-icons';
import { event } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    tinyLogo: {
        width: 90,
        height: 60,
    },
    ProductImg: {
        width: 110,
        height: 80
    }
})

const Produto = () => {
    const navigation = useNavigation();


    const [peca, setPecas] = useState([]);
    const [pago, setPago] = useState();
    const [quantidade, setQuantidade] = useState();

    useEffect(() => {
        async function getPeca() {
            const id = await AsyncStorage.getItem("@id");
            const response = await api.get(`/listarPeca/${id}`);
            // console.log(response)
            setPecas(response.data);
        };
        getPeca()

    }, []);

    function handleQuantidade(event) {
        setQuantidade(event);
    };
    function handlePago(event) {
        setPago(event);
    };

    async function handleSubmit() {
        const data = {
            Pecas: await AsyncStorage.getItem("@id"),
            Quantidade: quantidade,
            Pago: pago,
        }

        await api.post('/registrarPeca', data);

        goo()

    };

    function goo() {
        navigation.navigate('Pedidos');
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
                </Display>
            </Header>

            <Pecas key={peca._id}>
                <Textproduct>{peca.Nome}</Textproduct>
                <Priceproduct>R$:{peca.Preco}</Priceproduct>
                <Priceproduct>{peca.Infos}</Priceproduct>
            </Pecas>

            <Label>
                <Mensagem>Digite a quantidade</Mensagem>
                <Insert keyboardType='numeric' onChangeText={(event) => handleQuantidade(event)} />
            </Label>


            <Label>
                <Mensagem>Ja foi pago?</Mensagem>
                <View style={{
                    borderWidth: 2,
                    borderRadius: 10,
                    borderColor: "#011627",
                    borderStyle: "solid",
                }}>
                    <Picker
                        selectedValue={pago}
                        style={{
                            height: 50,
                            width: "100%",
                        }}
                        onValueChange={(event) => handlePago(event)}

                    >
                        <Picker.Item label="Pago" value={true} />
                        <Picker.Item label="Não Pago" value={false} />
                    </Picker>
                </View>
            </Label>

            <Salvar title="Submit" onPress={handleSubmit} >
                <Text style={{
                    textAlign: "center"
                }}>Salvar</Text>
            </Salvar>
            {/* <Salvar onPress={goo} >Ir para pedido</Salvar> */}

        </Container>

    )
}

export default Produto;
