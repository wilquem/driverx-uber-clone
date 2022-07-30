import React from 'react';
import {TouchableOpacity} from 'react-native';

import {
  Container,
  Map,
  Avatar,
  Title,
  Subtitle,
  Spacer,
  Input,
  Button,
  ButtonText,
  VerticalSeparator,
  Bullet,
} from '../../styles/index';

const Pulse = require('react-native-pulse').default;

export default function Home() {
  const tipo = 'M';
  const status = 'C'; //S = SEM CORRIDA, I = INFORMAÇÔES, P = PESQUISA, C = CORRIDA

  return (
    <Container color="light">
      <Map
        initialRegion={{
          latitude: -23.2238015,
          longitude: -45.8944638,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        disabled={status === 'P'}
      />
      <Container
        position="absolute"
        justify="space-between"
        align="flex-start"
        padding={20}
        zIndex={999}
        pointerEvents="box-none"
        style={{height: '100%'}}>
        {/* PARTE SUPERIOR */}
        <Container height={140} justify="flex-start" align="flex-start">
          {/* AVATAR */}
          {status == 'S' || tipo == "M" && (
            <TouchableOpacity>
              <Avatar
                source={{
                  uri: 'https://avatars.githubusercontent.com/u/93217081?v=4',
                }}
              />
            </TouchableOpacity>
          )}
          {status != 'S' && tipo == "P" && (
            <Container color="light" elevation={50} justify="flex-end">
              <Container padding={20}>
                <Container justify="flex-start" align="center" row>
                  <Bullet />
                  <Subtitle>Endereço de embarque completo</Subtitle>
                </Container>
                <Spacer />
                <Container justify="flex-start" align="center" row>
                  <Bullet destination />
                  <Subtitle>Endereço de destino completo</Subtitle>
                </Container>
              </Container>
              <Button color="info">
                <ButtonText color="light">Toque para editar</ButtonText>
              </Button>
            </Container>
          )}
        </Container>
        {/* PASSAGEIRO PROCURANDO CORRIDA */}
        {status == 'P' && tipo == 'P' && (
          <Container padding={20} zIndex={-1}>
            <Pulse
              color="black"
              numPulses={3}
              diameter={400}
              speed={20}
              duration={2000}
            />
          </Container>
        )}

        <Container elevation={50} height={150} color="light">
          {/* PASSAGEIRO SEM CORRIDA */}
          {tipo == 'P' && status == 'S' && (
            <Container justify="flex-start" padding={20} align="flex-start">
              <Subtitle>Olá, Emanuel Wilquem.</Subtitle>
              <Title>Para onde você quer ir?</Title>
              <Spacer height={15} />
              <Input
                placeholder="Procure um destino"
                placeholderTextColor="#C9C9C9"
              />
            </Container>
          )}

          {/* PASSAGEIRO INFORMAÇÔES DA CORRIDA */}
          {tipo == 'P' && (status == 'I' || status == 'P') && (
            <Container justify="flex-end" align="flex-start">
              <Container padding={20}>
                <Subtitle>DriverX Convencional</Subtitle>
                <Spacer />
                <Container row>
                  <Container>
                    <Title>R$ 13,90</Title>
                  </Container>
                  <VerticalSeparator />
                  <Container>
                    <Title>5 mins</Title>
                  </Container>
                </Container>
              </Container>
              <Button color={status == 'P' ? 'muted' : 'light'}>
                <ButtonText>
                  {status === 'P' ? 'Cancelar DriverX' : 'Chamar DriverX'}
                </ButtonText>
              </Button>
            </Container>
          )}

          {/* PASSAGEIRO EM CORRIDA */}
          {tipo == 'P' && status == 'C' && (
            <Container border="primary" justify="flex-end" align="flex-start">
              <Container padding={20} row>
                <Container align="flex-start" row>
                  <Avatar
                    small
                    source={{
                      uri: 'https://avatars.githubusercontent.com/u/93217081?v=4',
                    }}
                  />
                  <Spacer width="10px" />
                  <Container align="flex-start">
                    <Subtitle bold>Felipe Souza</Subtitle>
                    <Subtitle small>ABC-123, BMW X6, Preta</Subtitle>
                  </Container>
                </Container>
                <VerticalSeparator />
                <Container width={120}>
                  <Title>R$ 12,90</Title>
                  <Subtitle bold>Aprox. 5 mins</Subtitle>
                </Container>
              </Container>
              <Button color="muted">
                <ButtonText>Cancelar DriverX</ButtonText>
              </Button>
            </Container>
          )}

          {/* MOTORISTA SEM CORRIDA */}
          {tipo == 'M' && status == 'S' && (
            <Container>
              <Subtitle>Olá, Juliana.</Subtitle>
              <Title>Nenhuma solicitação.</Title>
            </Container>
          )}

          {/* MOTORISTA ESTA EM CORRIDA */}
          {tipo == 'M' && status == 'C' && (
            <Container border="primary" justify="flex-end" align="flex-start">
              <Container padding={20} row>
                <Container align="flex-start" row>
                  <Avatar
                    small
                    source={{
                      uri: 'https://avatars.githubusercontent.com/u/93217081?v=4',
                    }}
                  />
                  <Spacer width="10px" />
                  <Container align="flex-start">
                    <Subtitle bold>Emanuel (2km)</Subtitle>

                    <Container justify="flex-start" align="center" row>
                      <Bullet />
                      <Subtitle small numberOfLines={1}>Endereço de embarque completo</Subtitle>
                    </Container>
                    <Container justify="flex-start" align="center" row>
                      <Bullet destination />
                      <Subtitle small numberOfLines={1}>Endereço de destino completo</Subtitle>
                    </Container>
                  </Container>
                </Container>
                <VerticalSeparator />
                <Container width={100}>
                  <Title small>R$ 12,90</Title>
                  <Subtitle small bold>Aprox. 5 mins</Subtitle>
                </Container>
              </Container>
              <Button>
                <ButtonText>Aceitar Corrida</ButtonText>
              </Button>
            </Container>
          )}
        </Container>
      </Container>
    </Container>
  );
}
