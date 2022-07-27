import React, {useState, useEffect} from 'react';

import {
  Button,
  ButtonText,
  Container,
  Title,
  Subtitle,
  Spacer,
  CreditCard,
  CreditCardNumber,
  Input,
} from '../../styles';

import {Keyboard} from 'react-native';

export default function Payment() {
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

  const [numeroCartao,setNumeroCartao] = useState('NUMERO')
  const [validadeCartao,setValidadeCartao] = useState('VALIDADE')
  const [nomeCartao,setNomeCartao] = useState('NOME COMPLETO')
  const [cvcCartao,setCvcCartao] = useState('CVC')

  return (
    <Container color="light" padding={30} justify="flex-start">
      <Container align="flex-start" height={50}>
        <Title>Escolha como pagar</Title>
        <Subtitle>Preencha os dados do cartão de crédito.</Subtitle>
      </Container>
        <Spacer height={30} />
      <Container position="relative" justify="flex-start">
        <CreditCard position="absolute" color="primary" height={200}>
          <CreditCardNumber color="light">{numeroCartao}</CreditCardNumber>
          <CreditCardNumber fontSize={16} color="light">
            {validadeCartao}
          </CreditCardNumber>
          <CreditCardNumber fontSize={16} color="light">
            {nomeCartao}
          </CreditCardNumber>
          <CreditCardNumber fontSize={16} color="light">
            {cvcCartao}
          </CreditCardNumber>
        </CreditCard>
      </Container>
      <Container justify="flex-start">
        <Spacer height={30} />
        <Input
          keyboardType="number-pad"
          maxLength={16}
          placeholder="1234 5678 1234 5678"
          placeholderTextColor="#C9C9C9"
          onChangeText={(event) => setNumeroCartao(event)}
        />
        <Spacer />
        <Input
          keyboardType="number-pad"
          maxLength={4}
          placeholder="MM/YY"
          placeholderTextColor="#C9C9C9"
          onChangeText={(event) => setValidadeCartao(event)}
        />
        <Spacer />
        <Input
          placeholder="NOME COMPLETO"
          placeholderTextColor="#C9C9C9"
          onChangeText={(event) => setNomeCartao(event)}
        />
        <Spacer />
        <Input
          keyboardType="number-pad"
          maxLength={3}
          placeholder="CVC"
          placeholderTextColor="#C9C9C9"
          onChangeText={(event) => setCvcCartao(event)}
        />
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
