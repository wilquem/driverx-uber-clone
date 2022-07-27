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

export default function Car() {
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
        <Spacer height={50} />
        <Input placeholder="Placa do Veículo" placeholderTextColor="#C9C9C9" />
        <Spacer />
        <Input placeholder="Marca do Veículo" placeholderTextColor="#C9C9C9" />
        <Spacer />
        <Input placeholder="Modelo do Veículo" placeholderTextColor="#C9C9C9" />
        <Spacer />
        <Input placeholder="Cor do Veículo" placeholderTextColor="#C9C9C9" />
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
