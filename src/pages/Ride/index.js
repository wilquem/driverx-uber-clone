import React, {useState, useEffect} from 'react';

import {
  Button,
  ButtonText,
  Container,
  Title,
  Subtitle,
  Input,
  Spacer,
} from '../../styles';
import {Keyboard} from 'react-native';

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
    <Container color="light" padding={30} justify="flex-start">
      <Container align="flex-start" height={50}>
        <Title>Cadastre o seu veículo</Title>
        <Subtitle>Preencha os campos abaixo.</Subtitle>
      </Container>
      <Container justify="flex-start">

      </Container>
      {visible && (
        <Container height={70} justify="flex-end">
          <Button>
            <ButtonText>Começar a usar DriverX</ButtonText>
          </Button>
        </Container>
      )}
    </Container>
  );
}
