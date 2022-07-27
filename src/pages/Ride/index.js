import React, {useState, useEffect} from 'react';

import {
  Button,
  ButtonText,
  Container,
  Title,
  Subtitle,
  Input,
  Spacer,
  AdressList,
  AdressItem,
} from '../../styles';
import {Keyboard, Text} from 'react-native';

export default function Ride() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setVisible(false),
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setVisible(true),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <>
      <Container
        row
        height={60}
        align="center"
        justify="flex-start"
        color="light">
        <Container align="flex-start" padding={20}>
          <Subtitle>voltar</Subtitle>
        </Container>
        <Container>
          <Title>Corrida</Title>
        </Container>
        <Container align="flex-end" padding={20}></Container>
      </Container>
      <Container padding={30} color="light" justify="flex-start">
        <Container height={90} justify="flex-start" color="light">
          <Input placeholder="Embarque" placeholderTextColor="#C9C9C9" />
          <Input placeholder="Destino" placeholderTextColor="#C9C9C9" />
        </Container>
        <Container>
            <Spacer height={15}/>
          <AdressList 
            data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]} 
            renderItem={({item,index}) => (
                <AdressItem>
                    <Subtitle bold>Menco Park</Subtitle>
                    <Subtitle small>Port Alto, CA</Subtitle>
                </AdressItem>
            )}
        />
        </Container>
        <Spacer height={15}/>
        {visible && (
          <Container color="light" height={70} justify="flex-end">
            <Button>
              <ButtonText>Atualizar no mapa</ButtonText>
            </Button>
          </Container>
        )}
      </Container>
    </>
  );
}
