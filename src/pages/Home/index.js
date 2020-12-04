import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';
import { FontAwesome } from '@expo/vector-icons';

import {
    Container,
    Text,
    TextBlack,
    Header,
    Registros,
    Logo,
    Pecas,
    FlexView,
    TextPeca,
    PrecoPeca,
    MarcarPeca
} from './styles';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const pecas = async () => {
            const response = await api.get('/listaPecas');
            setPecas(response.data)
        }
        pecas()
    }, []);

    async function handleNavigateToProduto(id) {
        await AsyncStorage.setItem("@id", id);

        navigation.navigate('Produto');
    }

    const [pecas, setPecas] = useState([]);
    function edit() {
        navigation.navigate('Pedidos');
    }


    return (
        <Container>
            <Header>
                <Logo>
                    PC dos Sonhos
                </Logo>
                <Registros>
                    <FontAwesome onPress={edit} name="desktop" size={54} color="white" />
                    <Text>Peças Marcadas</Text>
                </Registros>
            </Header>
            <View>
                <TextBlack>Peças Disponiveis</TextBlack>
            </View>

            <FlexView>
                {pecas.map(peca => (
                    <Pecas key={peca._id}>
                        <TextPeca>{peca.Nome}</TextPeca>
                        <PrecoPeca>R$: {peca.Preco}</PrecoPeca>
                        <MarcarPeca title="Marcar" onPress={(event) => handleNavigateToProduto(peca._id)} >
                            <Text style={{ textAlign: "center" }}>Marcar</Text>
                        </MarcarPeca>
                    </Pecas>
                ))}
            </FlexView>
        </Container >
    )
};

export default Home;
