import styled from 'styled-components/native';
import theme from './theme.json';

import MapView from 'react-native-maps';

export const Container = styled.View`
    flex: 1;
    background-color:${(props) => props.color ? theme.colors[props.color] : 'transparent'};
    flex-direction: ${(props) => props.row ? 'row' : 'column'};
    justify-content: ${(props) => props.justify || 'center'};
    padding: ${(props) => props.padding || 0}px;
    width:100%;
    align-items:${(props) => props.align || 'center'};
    max-width: ${(props) => props.width || '100%'};
    max-height: ${(props) => props.height  ? props.height + 'px' : 'auto'};
    position: ${(props) => props.position || 'relative'};
    top:${(props) => props.top || 0};
    z-index:${(props) => props.zIndex || 1};
`;

export const CreditCard = styled.View`
     flex: 1;
    background-color:${(props) => props.color ? theme.colors[props.color] : 'transparent'};
    flex-direction: ${(props) => props.row ? 'row' : 'column'};
    justify-content: ${(props) => props.justify || 'center'};
    padding: ${(props) => props.padding || 0}px;
    width:100%;
    align-items:${(props) => props.align || 'center'};
    max-width: ${(props) => props.width || '100%'};
    max-height: ${(props) => props.height  ? props.height + 'px' : 'auto'};
    position: ${(props) => props.position || 'relative'};
    top:${(props) => props.top || 0};
    z-index:${(props) => props.zIndex || 1};
    border-radius: 8px;
`

export const CreditCardNumber = styled.Text`
    color: ${theme.colors.light};
    font-size: ${props => props.fontSize || 20}px;
`

export const Button = styled.TouchableOpacity`
    background-color:${(props) => props.color ? theme.colors[props.color] : 'transparent'};
    padding: ${(props) => props.compact ? 5 : 15}px;
    margin:${(props) => props.margin ? 15 : 0}px;
    opacity: ${(props) => props.disabled ? 0.5 : 1};
    border: 0.5px solid #000;
    flex-direction: ${(props) => props.column ? 'column' : 'row'};
    align-items:center;
    justify-content:space-between;
`;

export const ButtonText = styled.Text`
    text-align:center;
    width:100%;
    color:${props => props.color ? theme.colors[props.color] : '#000' };
    font-weight: ${props => props.weight || 'normal'};
`

export const Title = styled.Text`
    font-size:20px;
    color:${theme.colors.primary};
    font-weight: bold;
`;

export const Subtitle = styled.Text`
    font-size:${props => props.small ? '12px' : '15px'};
    opacity: 0.7;
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    color: ${props => props.color ? theme.colors[props.color] : theme.colors.primary}
`;

export const PickerButton = styled.TouchableOpacity`
    width:100%;
    height: 30%;
    margin-top:10%;
    border-width: 0.5px;
    border-style: solid;
    border-color: #000 ;
    justify-content:space-around;
    align-items:center;
    background-color: ${props => props.active ? theme.colors.muted : theme.colors.light};;

`;

export const Input = styled.TextInput`
    background-color: ${theme.colors.light};
    border:0.5px solid #000;
    color: #000;
    width:100%;
    padding: 7px 15px;
`

export const Spacer = styled.View`
    width: ${(props) => props.width || '100%'};
    height: ${props => props.height || 10}px;
`

export const AdressList = styled.FlatList`
    flex: 1;
    width: 100%;
    padding-top: 10px;
`

export const AdressItem = styled.TouchableOpacity`
    padding: 5px 0 10px;
    align-items: flex-start;
`

export const Map = styled(MapView)`
    flex: 1;
    width: 100%;
    height: 100%;
    opacity: ${props => props.disabled ? 0.2 : 1}
`

export const Avatar = styled.Image.attrs({
    elevation: 50,
})`
    width: ${props => props.small ? '35px' : '50px'};
    height: ${props => props.small ? '35px' : '50px'};
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    background: ${theme.colors.muted};
    border-radius: ${props => props.small ? '35px' : '50px'};
`

export const VerticalSeparator = styled.View`
    width: 1px;
    height: 100%;
    background-color:${theme.colors.muted}
`

export const Bullet = styled.View`
    width:8px;
    height:8px;
    border-radius:8px;
    background-color:${props => props.destination ? theme.colors.destino : theme.colors.embarque};
    margin-right: 10px;
    margin-top:2px
`