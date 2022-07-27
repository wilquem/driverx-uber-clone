import React from 'react';
import {Image} from 'react-native';

import {
  Button,
  ButtonText,
  Container,
  Title,
  Subtitle,
  PickerButton,
} from '../../styles';

import carImg from '../../assets/carro.png';
import maoImg from '../../assets/mao.png';

export default function Type() {
  return (
    <Container color="light" padding={30} justify="flex-start">
      <Container align="flex-start" height={50}>
        <Title>Passageiro ou motorista?</Title>
        <Subtitle>Selecione qual será sua função no DriverX.</Subtitle>
      </Container>
      <Container height={1000}>
        <PickerButton active>
          <Image source={carImg} />
          <Title>Motorista</Title>
        </PickerButton>
        <PickerButton>
          <Image source={maoImg} />
          <Title>Passageiro</Title>
        </PickerButton>
      </Container>
      <Container height={70} justify="flex-end">
        <Button>
          <ButtonText>Próximo passo</ButtonText>
        </Button>
      </Container>
    </Container>
  );
}
