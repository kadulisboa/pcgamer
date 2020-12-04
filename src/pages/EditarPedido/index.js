import React, { useEffect, useState } from 'react';
import {
    Container,
    Text,
    Header,
    Registros,
    Logo,
    Display,
    Label,
    Salvar,
    Insert,
    Mensagem,
    Editar, Excluir
} from './styles';
import api from '../../services/api';
import { Image, StyleSheet, View, Picker } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
    tinyLogo: {
        width: 90,
        height: 60,
    },
    ProductImg: {
        width: 110,
        height: 80
    },
    styleProduct: {
        marginTop: 30
    }
})

const EditarPedido = () => {
    const navigation = useNavigation();

    const [registros, setRegistros] = useState([]);
    const [quantidade, setQuantidade] = useState();
    const [pago, setPago] = useState(registros.Pago);


    useEffect(() => {
        async function getRegistro() {
            const id = await AsyncStorage.getItem("@id_registro");
            const response = await api.get(`/listarRegistro/${id}`)
            setPago(response.data.Pago)
            setRegistros(response.data)
        }
        getRegistro()

    }, []);



    async function handleSubmit() {
        const id = await AsyncStorage.getItem("@id_registro");

        const data = {
            Pago: pago,
        }

        await api.put(`/atualizarRegistro/${id}`, data);

    };

    function handlePago(event) {
        setPago(event);
    };

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

            <Text >PRODUTO: {registros.Pecas.Nome}</Text>
            <Text >Valor do Item: R$ {registros.Pecas.Preco}</Text>
            <Text >Valor Total: R$ {registros.ValorTotal}</Text>
            <Text>Quantidade: {registros.Quantidade}</Text>
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
            <Salvar title="Submit" onPress={handleSubmit} ><Text style={{
                textAlign: "center",
                color: "white"
            }}>Salvar</Text></Salvar>

        </Container>
    )
}

export default EditarPedido
