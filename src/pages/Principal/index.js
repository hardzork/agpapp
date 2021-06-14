import React, {useEffect, useState, useMemo, useContext} from 'react';
import {StatusBar, View} from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Container2,
  Header,
  Info,
  Username,
  InfoText,
  CompanyIcon,
  Background,
  Content,
  CardModuloList,
  CardModulo,
  CardModuloTitle,
  LogoutContainer,
  LogoutText,
  LogoutButton,
} from './styles';

import AuthContext from '~/context/AuthContext';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Principal({navigation}) {
  const {signOut} = useContext(AuthContext);
  const modulos = [
    {name: 'Aprovações'},
    // {name: 'Aprovações1'},
    // {name: 'Aprovações2'},
    // {name: 'Aprovações3'},
    // {name: 'Aprovações4'},
    // {name: 'Aprovações5'},
    // {name: 'Aprovações6'},
    // {name: 'Aprovações7'},
    // {name: 'Aprovações8'},
    // {name: 'Aprovações9'},
  ];
  const [codusu, setCodusu] = useState(null);
  const [nomcom, setNomcom] = useState(null);
  useEffect(() => {
    async function getData() {
      const storedData = await AsyncStorage.getItem('@AgroApp:UUsr');
      if (storedData) {
        const {codusu: codigo, nomcom: nome} = JSON.parse(storedData);
        setCodusu(codigo);
        setNomcom(nome);
      }
    }
    getData();
  }, []);

  const userTitle = useMemo(() => nomcom?.split(' ')[0].toLowerCase(), [
    nomcom,
  ]);

  //const {codusu, nomexb, nomcom} = await AsyncStorage.getItem('@AgroApp:UUsr');

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Container />
      <Header>
        <Info>
          <Username>{userTitle}</Username>
          <InfoText>Escolha um módulo abaixo</InfoText>
        </Info>
        <CompanyIcon />
      </Header>
      <LogoutContainer>
        <LogoutButton onPress={() => signOut()}>
          <Icon name="subdirectory-arrow-left" size={20} color="#ff4040" />
          <LogoutText>Sair do aplicativo</LogoutText>
        </LogoutButton>
      </LogoutContainer>
      <Container2>
        <Background>
          <Content>
            <CardModuloList
              data={modulos}
              keyExtractor={modulo => modulo.name}
              renderItem={({item: modulo}) => (
                <CardModulo onPress={() => navigation.navigate('Aprovacao')}>
                  <CardModuloTitle>{modulo.name}</CardModuloTitle>
                  <LottieView
                    source={require('~/assets/lottie-aprovacoes.json')}
                    autoPlay
                    loop={false}
                    style={{width: 100, height: 100}}
                  />
                </CardModulo>
              )}
            />
          </Content>
        </Background>
      </Container2>
    </>
  );
}
