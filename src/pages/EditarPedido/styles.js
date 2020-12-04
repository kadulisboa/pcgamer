import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: whitesmoke;
    align-items: center;
    width: 100%;
    height: 200px;
`;

export const Registros = styled.View`
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    border: 2px white solid;
    border-radius: 10px;
    background: #247ba0;

`;

export const Display = styled.View`
    flex-wrap: wrap;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
`;

export const Label = styled.View`
    border: 2px solid #70c1b3;
    margin-top: 20px;
    padding: 10px;
    width: 80%
`;

export const Header = styled.View`
    flex: 0.5;
    justify-content: center;
    align-items: center;
    background-color: #70c1b3;
    width: 100%;
    borderBottomColor: #247ba0;
    borderBottomWidth: 5px;
`;

export const Logo = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
    font-size: 20px;
    color: black;
`;

export const Pedidos = styled.View`
    flex: 1;
    justify-content: space-around;
    align-items: center;
`;

export const Logotext = styled.View`
    flex: 1;
    width: 30px;
    margin-left: 30px;
`;

export const Products = styled.View`
    margin-top: 20px;
`;

export const Textproduct = styled.Text`
    font-size: 20px;
    color: #000;
`;

export const Priceproduct = styled.Text`
    font-size: 20px;
    color: #000;
`;

export const Salvar = styled.TouchableOpacity`
width: 120px;
height: 60px;
background-color: green;
color: white;
border-radius: 10px;
margin-top: 30px;
text-align: center;
justify-content: center;
`;

export const Insert = styled.TextInput`
    width: 100px;
    height: 20px;
    border: 2px solid black;
`;

export const Mensagem = styled.Text`
    margin-top: 20px;
    color: black;
`;

export const Editar = styled.TouchableOpacity`
    flex:0.1;
    width:90px;
    background-color: goldenrod;
    color: goldenrod;
    border-radius: 10px;
    text-align: center;
    justify-content: center;
    margin-top: 20px;
`;

export const Excluir = styled.TouchableOpacity`
    flex:0.1;
    width:90px;
    background-color: red;
    color: red;
    border-radius: 10px;
    text-align: center;
    justify-content: center;
    margin-top: 30px;
`;

