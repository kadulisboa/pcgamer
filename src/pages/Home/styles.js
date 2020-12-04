import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: whitesmoke;
    align-items: center;
    width: 100%;
    height: 200px;
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


export const Text = styled.Text`
    font-size: 20px;
    color: white;
`;

export const TextBlack = styled.Text`
    font-size: 20px;
    color: #70c1b3;
    margin-top: 20px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const Registros = styled.View`
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    border: 2px white solid;
    border-radius: 10px;
    background: #247ba0;

`;

export const Logo = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 10px;
`;

export const Pecas = styled.View`
    margin-top: 40px;
    border: 2px #247ba0 solid;
    padding: 10px;
    border-radius: 10px;
    width: 45%;
`;

export const TextPeca = styled.Text`
    font-size: 20px;
    color: #000;
    text-align: center;
`;

export const PrecoPeca = styled.Text`
    font-size: 20px;
    color: #ff1654;
    text-decoration: underline;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
`;

export const MarcarPeca = styled.TouchableOpacity`
    background-color: #247ba0;
    color: white;
    text-align: center;
    padding: 5px 10px;
    border-radius: 10px;
`;

export const FlexView = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%
    justify-content: space-between;
`;

