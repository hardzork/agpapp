import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Container2,
  Header,
  LeftHeader,
  BackButton,
  CenterHeader,
  Title,
  CompanyIcon,
  Content,
  Background,
} from './styles';

export default function EstatisticasScreen({navigation}) {
  return (
    <>
      <Container />
      <Header>
        <LeftHeader>
          <BackButton onPress={() => navigation.jumpTo('Pendentes')}>
            <Icon name="keyboard-backspace" size={32} color="#000000" />
          </BackButton>
        </LeftHeader>
        <CenterHeader>
          <Title>Estatisticas</Title>
        </CenterHeader>
        <CompanyIcon />
      </Header>
      <Container2>
        <Background>
          <Content />
        </Background>
      </Container2>
    </>
  );
}
