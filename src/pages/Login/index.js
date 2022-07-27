import React from 'react';
import {Image, Text} from 'react-native';
import Logo from '../../assets/logo.png';
import facebook from '../../assets/facebookLogo.png';
import google from '../../assets/googleLogo.png';

import {Button, ButtonText, Container} from '../../styles';

export default function Login() {
  return (
    <Container color="light" justify="flex-end">
      <Container justify="space-between" height={650} top={0} zindex={9}>
        <Image source={Logo} />
        <Container justify="flex-end" padding={30}>
          <Button>
            <Image source={facebook} />
            <ButtonText>Fazer login com Facebook</ButtonText>
            <Text />
          </Button>
          <Button>
            <Image source={google} />
            <ButtonText>Fazer login com Google</ButtonText>
            <Text />
          </Button>
        </Container>
      </Container>
    </Container>
  );
}
