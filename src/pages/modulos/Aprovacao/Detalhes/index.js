import React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Container2,
  Header,
  LeftHeader,
  BackButton,
  CenterHeader,
  Title,
  Content,
  Background,
} from './styles';

import ReembolsoDetalhes from '~/components/Aprovacao/Reembolso/Detalhes';

export default function DetalhesScreen({navigation, route}) {
  const {item} = route.params;
  return (
    <>
      <Container />
      <StatusBar backgroundColor="#007551" barStyle="light-content" />
      <Header>
        <LeftHeader>
          <BackButton onPress={() => navigation.navigate('Pendentes')}>
            <Icon name="keyboard-backspace" size={32} color="#FFFFFF" />
          </BackButton>
        </LeftHeader>
        <CenterHeader>
          <Title>Reembolso</Title>
        </CenterHeader>
      </Header>
      <Container2>
        <Background>
          <Content>
            <ReembolsoDetalhes item={item} navigation={navigation} />
          </Content>
        </Background>
      </Container2>
    </>
  );
}
