import React, {useState, useCallback, useEffect, useMemo} from 'react';
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
  Categories,
  Category,
  CategoryName,
  Separator,
  List,
  Background,
} from './styles';

import ItemReembolso from '~/components/Aprovacao/Reembolso';
import ItemAdiantamento from '~/components/Aprovacao/Adiantamento';
import {Alert} from 'react-native';

const reembolsos = [
  {
    nomemp: 'CIA REFINADORA DA AMAZÔNIA',
    datsol: '13 JAN 2020',
    numsol: 22500,
    nomfor: 'ROBINSON JUNIOR',
    nomsol: 'MILVER SILVA',
    recebimento: 'Em conta',
    vlrsol: 334.0,
    qtdite: 3,
    tipo: 'Funcionario-Viagens',
  },
  {
    nomemp: 'INDUSTRIAS XHARA LTDA',
    datsol: '13 JAN 2020',
    numsol: 22501,
    nomfor: 'ROBINSON JUNIOR',
    nomsol: 'MILVER SILVA',
    recebimento: 'Em conta',
    vlrsol: 334.0,
    qtdite: 3,
    tipo: 'Funcionario-Viagens',
  },
];
const adtos = [
  {
    nomemp: 'INDUSTRIAS XHARA LTDA',
    datsol: '13 JAN 2020',
    numsol: 22501,
    nomfor: 'ROBINSON SILVA JUNIOR',
    nomsol: 'MILVER SILVA',
    recebimento: 'Em conta',
    vlrsol: 1000.0,
    tipo: 'Funcionario-Viagens',
  },
];

export default function PendentesScreen({navigation}) {
  const [categorias, setCategorias] = useState([
    {id: 1, modulo: 'Reembolso', icon: 'monetization-on', active: true},
    {id: 2, modulo: 'Adiantamento', icon: 'monetization-on', active: false},
    {
      id: 3,
      modulo: 'Prestação de Contas',
      icon: 'monetization-on',
      active: false,
    },
    {id: 4, modulo: 'Táxi', icon: 'local-taxi', active: false},
  ]);
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const {id} = categorias.find(el => el.active);
    switch (id) {
      case 1:
        setItens(reembolsos);
        break;
      case 2:
        setItens(adtos);
        break;
      default:
        break;
    }
  }, [categorias]);

  const TypeSelection = useMemo(() => {
    const {id} = categorias.find(el => el.active);
    return id;
  }, [categorias]);

  const handleSelection = useCallback(
    categoria => {
      const selected = categorias.filter(item => item.active);
      if (selected.id === categoria.id) {
        return;
      }
      let categ = categorias;
      const newData = categ.map(item => {
        return {
          ...item,
          active: item.id === categoria.id ? true : false,
        };
      });
      setCategorias(newData);
    },
    [categorias],
  );

  function handleApprove(item) {
    Alert.alert(`Aprovação do item ${item?.numsol} realizada com sucesso.`);
  }
  function handleDisapprove(item) {
    Alert.alert(`Reprovação do item ${item?.numsol} realizada com sucesso.`);
  }

  return (
    <>
      <Container />
      <Header>
        <LeftHeader>
          <BackButton onPress={() => navigation.navigate('Principal')}>
            <Icon name="keyboard-backspace" size={32} color="#000000" />
          </BackButton>
        </LeftHeader>
        <CenterHeader>
          <Title>Aprovações</Title>
        </CenterHeader>
        <CompanyIcon />
      </Header>
      <Container2>
        <Background>
          <Content>
            <Categories
              horizontal
              data={categorias}
              keyExtractor={modulo => String(modulo.id)}
              renderItem={({item: modulo}) => (
                <Category
                  active={modulo.active}
                  onPress={() => handleSelection(modulo)}>
                  <CategoryName>{modulo.modulo}</CategoryName>
                  <Icon name={modulo.icon} size={24} color="#FFFFFF" />
                </Category>
              )}
            />
            <Separator />
            <List
              data={itens}
              keyExtractor={item => String(item.numsol)}
              renderItem={({item}) => {
                switch (TypeSelection) {
                  case 1:
                    return (
                      <ItemReembolso
                        {...item}
                        onApprovalPress={() =>
                          Alert.alert(
                            'Aprovar Solicitação?',
                            'Esta operação não poderá ser desfeita. Deseja continuar?',
                            [
                              {
                                text: 'Não',
                                onPress: () => {},
                                style: 'cancel',
                              },
                              {
                                text: 'Sim',
                                onPress: () => handleApprove(item),
                                style: 'default',
                              },
                            ],
                            {cancelable: false},
                          )
                        }
                        onDisapprovalPress={() =>
                          Alert.alert(
                            'Reprovar Solicitação?',
                            'Esta operação não poderá ser desfeita. Deseja continuar?',
                            [
                              {
                                text: 'Não',
                                onPress: () => {},
                                style: 'cancel',
                              },
                              {
                                text: 'Sim',
                                onPress: () => handleDisapprove(item),
                                style: 'default',
                              },
                            ],
                            {cancelable: false},
                          )
                        }
                        onDetailsPress={() => {
                          navigation.navigate('Detalhes', {item});
                        }}
                      />
                    );
                  case 2:
                    return (
                      <ItemAdiantamento
                        {...item}
                        onApprovalPress={() =>
                          Alert.alert(
                            'Aprovar Solicitação?',
                            'Esta operação não poderá ser desfeita. Deseja continuar?',
                            [
                              {
                                text: 'Não',
                                onPress: () => {},
                                style: 'cancel',
                              },
                              {
                                text: 'Sim',
                                onPress: () => handleApprove(item),
                                style: 'default',
                              },
                            ],
                            {cancelable: false},
                          )
                        }
                        onDisapprovalPress={() =>
                          Alert.alert(
                            'Reprovar Solicitação?',
                            'Esta operação não poderá ser desfeita. Deseja continuar?',
                            [
                              {
                                text: 'Não',
                                onPress: () => {},
                                style: 'cancel',
                              },
                              {
                                text: 'Sim',
                                onPress: () => handleDisapprove(item),
                                style: 'default',
                              },
                            ],
                            {cancelable: false},
                          )
                        }
                        onDetailsPress={() => {
                          navigation.navigate('Detalhes', {item});
                        }}
                      />
                    );
                  default:
                    break;
                }
              }}
            />
          </Content>
        </Background>
      </Container2>
    </>
  );
}
