import React, {Fragment, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Row,
  CompanyInfo,
  CompanyInfoLabel,
  CompanyInfoName,
  RequestNumberInfo,
  RequestNumberLabel,
  RequestNumberName,
  RequestDateInfo,
  RequestDateLabel,
  RequestDateName,
  RequesterInfo,
  RequesterInfoLabel,
  RequesterInfoName,
  BeneficiaryInfo,
  BeneficiaryInfoLabel,
  BeneficiaryInfoName,
  CostCenterInfo,
  CostCenterInfoLabel,
  CostCenterInfoName,
  ReceivingModeInfo,
  ReceivingModeInfoLabel,
  ReceivingModeInfoName,
  BankInfo,
  BankInfoLabel,
  BankInfoName,
  BankAgencyInfo,
  BankAgencyInfoLabel,
  BankAgencyInfoName,
  BankAccountInfo,
  BankAccountInfoLabel,
  BankAccountInfoName,
  DescriptionInfo,
  DescriptionLabel,
  Description,
  List,
  Item,
  IdItem,
  Icone,
  TypeItemInfo,
  TypeItemLabel,
  TypeItemName,
  ItemValueInfo,
  ItemValueLabel,
  ItemValueName,
  Separator,
  Footer,
  Totals,
  TotalLabel,
  TotalValue,
  ActionButtons,
  Approval,
  ApprovalText,
  Disapproval,
  DisapprovalText,
} from './styles';

const itensReembolso = [
  {
    ususeq: 1,
    tipcom: 1,
    descom: 'Transporte',
    icon: 'local-taxi',
    codmoe: 1,
    desmoe: 'Real',
    datcot: null,
    vlrcot: null,
    vlrite: 200.0,
    vlrcvt: 200.0,
    origem: 'Residência',
    destino: 'Aeroporto',
    datite: '22 SET 2019',
    comentarios:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    ususeq: 2,
    tipcom: 2,
    descom: 'Lanches e Refeições',
    icon: 'restaurant',
    codmoe: 1,
    desmoe: 'Real',
    datcot: null,
    vlrcot: null,
    vlrite: 251.4,
    vlrcvt: 251.4,
    datite: '22 SET 2019',
    comentarios:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    ususeq: 3,
    tipcom: 2,
    descom: 'Lanches e Refeições',
    icon: 'restaurant',
    codmoe: 1,
    desmoe: 'Real',
    datcot: null,
    vlrcot: null,
    vlrite: 251.4,
    vlrcvt: 251.4,
    datite: '22 SET 2019',
    comentarios:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    ususeq: 4,
    tipcom: 2,
    descom: 'Lanches e Refeições',
    icon: 'restaurant',
    codmoe: 1,
    desmoe: 'Real',
    datcot: null,
    vlrcot: null,
    vlrite: 251.4,
    vlrcvt: 251.4,
    datite: '22 SET 2019',
    comentarios:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    ususeq: 5,
    tipcom: 2,
    descom: 'Lanches e Refeições',
    icon: 'restaurant',
    codmoe: 1,
    desmoe: 'Real',
    datcot: null,
    vlrcot: null,
    vlrite: 251.4,
    vlrcvt: 251.4,
    datite: '22 SET 2019',
    comentarios:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    ususeq: 6,
    tipcom: 2,
    descom: 'Lanches e Refeições',
    icon: 'restaurant',
    codmoe: 1,
    desmoe: 'Real',
    datcot: null,
    vlrcot: null,
    vlrite: 251.4,
    vlrcvt: 251.4,
    datite: '22 SET 2019',
    comentarios:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    ususeq: 7,
    tipcom: 2,
    descom: 'Lanches e Refeições',
    icon: 'restaurant',
    codmoe: 1,
    desmoe: 'Real',
    datcot: null,
    vlrcot: null,
    vlrite: 251.4,
    vlrcvt: 251.4,
    datite: '22 SET 2019',
    comentarios:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    ususeq: 8,
    tipcom: 2,
    descom: 'Lanches e Refeições',
    icon: 'restaurant',
    codmoe: 1,
    desmoe: 'Real',
    datcot: null,
    vlrcot: null,
    vlrite: 251.4,
    vlrcvt: 251.4,
    datite: '22 SET 2019',
    comentarios:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

import ModalDetalhes from './Modal';

export default function Detalhes({item}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleViewDetails(reembolso) {
    setSelectedItem(reembolso);
    setModalVisible(true);
  }

  function handleCloseDetails() {
    setSelectedItem(null);
    setModalVisible(false);
  }

  return (
    <>
      <Container>
        <Row>
          <CompanyInfo>
            <CompanyInfoLabel>Empresa</CompanyInfoLabel>
            <CompanyInfoName>{item?.nomemp}</CompanyInfoName>
          </CompanyInfo>
          <RequestNumberInfo>
            <RequestNumberLabel>Nº</RequestNumberLabel>
            <RequestNumberName>{item?.numsol}</RequestNumberName>
          </RequestNumberInfo>
          <RequestDateInfo>
            <RequestDateLabel>Data solicitação</RequestDateLabel>
            <RequestDateName>{item?.datsol}</RequestDateName>
          </RequestDateInfo>
        </Row>
        <Row>
          <RequesterInfo>
            <RequesterInfoLabel>Solicitante</RequesterInfoLabel>
            <RequesterInfoName>{item?.nomsol}</RequesterInfoName>
          </RequesterInfo>
          <BeneficiaryInfo>
            <BeneficiaryInfoLabel>Beneficiário</BeneficiaryInfoLabel>
            <BeneficiaryInfoName>
              {item?.nomfor} (258.668.220-32)
            </BeneficiaryInfoName>
          </BeneficiaryInfo>
        </Row>
        <Row>
          <CostCenterInfo>
            <CostCenterInfoLabel>Centro de custo</CostCenterInfoLabel>
            <CostCenterInfoName>16 - Controladoria</CostCenterInfoName>
          </CostCenterInfo>
          <ReceivingModeInfo>
            <ReceivingModeInfoLabel>
              Forma de recebimento
            </ReceivingModeInfoLabel>
            <ReceivingModeInfoName>Crédito em conta</ReceivingModeInfoName>
          </ReceivingModeInfo>
        </Row>
        <Row>
          <BankInfo>
            <BankInfoLabel>Banco</BankInfoLabel>
            <BankInfoName>341 - Itaú Unibanco</BankInfoName>
          </BankInfo>
          <BankAgencyInfo>
            <BankAgencyInfoLabel>Agência</BankAgencyInfoLabel>
            <BankAgencyInfoName>0933</BankAgencyInfoName>
          </BankAgencyInfo>
          <BankAccountInfo>
            <BankAccountInfoLabel>Conta</BankAccountInfoLabel>
            <BankAccountInfoName>12345-6</BankAccountInfoName>
          </BankAccountInfo>
        </Row>
        <Row>
          <DescriptionInfo>
            <DescriptionLabel>Comentários</DescriptionLabel>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Description>
          </DescriptionInfo>
        </Row>
        {itensReembolso.map(reembolso => (
          <Fragment key={reembolso.ususeq}>
            <Separator />
            <Item onPress={() => handleViewDetails(reembolso)}>
              <IdItem>{reembolso?.ususeq}</IdItem>
              <Icone name={reembolso?.icon} size={35} color="rgba(0,0,0,0.5)" />
              <TypeItemInfo>
                <TypeItemLabel>Tipo</TypeItemLabel>
                <TypeItemName>{reembolso?.descom}</TypeItemName>
              </TypeItemInfo>
              <ItemValueInfo>
                <ItemValueLabel>Valor</ItemValueLabel>
                <ItemValueName>{reembolso?.vlrite}</ItemValueName>
              </ItemValueInfo>
            </Item>
          </Fragment>
        ))}
        <Footer>
          <Totals>
            <TotalLabel>Total</TotalLabel>
            <TotalValue>R$ 451,00</TotalValue>
          </Totals>
          <ActionButtons>
            <Approval>
              <Icon name="check-circle" size={32} color="#FFFFFF" />
              <ApprovalText>Aprovar</ApprovalText>
            </Approval>
            <Disapproval>
              <Icon name="remove-circle" size={32} color="#FFFFFF" />
              <DisapprovalText>Reprovar</DisapprovalText>
            </Disapproval>
          </ActionButtons>
        </Footer>
      </Container>
      <ModalDetalhes
        display={modalVisible}
        item={selectedItem}
        onClose={handleCloseDetails}
      />
    </>
  );
}
