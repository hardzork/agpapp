import React from 'react';
import {Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  Header,
  Title,
  DismissTopButton,
  Footer,
  DismissBottomButton,
  DismissBottomButtonText,
  Body,
} from './styles';

export default function ModalDetalhes({display, item, onClose}) {
  return (
    <Modal
      visible={display}
      animationType="slide"
      onRequestClose={onClose}
      transparent>
      <Container>
        <Content>
          <Header>
            <Title>item {item?.ususeq}</Title>
            <DismissTopButton onPress={onClose}>
              <Icon name="highlight-off" size={32} color="#000000" />
            </DismissTopButton>
          </Header>
          <Body />
          <Footer>
            <DismissBottomButton onPress={onClose}>
              <DismissBottomButtonText>Fechar</DismissBottomButtonText>
            </DismissBottomButton>
          </Footer>
        </Content>
      </Container>
    </Modal>
  );
}
