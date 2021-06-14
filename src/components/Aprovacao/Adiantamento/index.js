import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ItemHeader,
  ItemHeaderLeft,
  CompanyName,
  ItemHeaderCenter,
  RequestDate,
  ItemHeaderRight,
  RequestNumber,
  ItemContent,
  ItemMainInformation,
  BeneficiaryInfo,
  BeneficiaryNameLabel,
  BeneficiaryName,
  RequesterInfo,
  RequesterNameLabel,
  RequesterName,
  ReceptionInfo,
  ReceptionNameLabel,
  ReceptionName,
  ItemSecondaryInformation,
  TotalValueInfo,
  TotalValueLabel,
  TotalValue,
  TypeInfo,
  TypeLabel,
  Type,
  ItemFooter,
  DetailsButton,
  DetailsButtonText,
  ActionContainer,
  ApprovalButton,
  ApprovalText,
  DisapprovalButton,
  DisapprovalText,
} from './styles';

export default function AdiantamentoItem(item) {
  const RightActions = ({
    progress,
    dragX,
    onApprovalPress,
    onDisapprovalPress,
  }) => {
    return (
      <ActionContainer>
        <ApprovalButton onPress={onApprovalPress}>
          <Icon name="check-circle" size={32} color="#006c58" />
          <ApprovalText>Aprovar</ApprovalText>
        </ApprovalButton>
        <DisapprovalButton onPress={onDisapprovalPress}>
          <Icon name="remove-circle" size={32} color="#DA2D2D" />
          <DisapprovalText>Reprovar</DisapprovalText>
        </DisapprovalButton>
      </ActionContainer>
    );
  };
  const {
    nomemp,
    datsol,
    numsol,
    nomfor,
    nomsol,
    recebimento,
    vlrsol,
    tipo,
    onApprovalPress,
    onDisapprovalPress,
    onDetailsPress,
  } = item;
  return (
    <Swipeable
      renderRightActions={props => (
        <RightActions
          {...props}
          onApprovalPress={onApprovalPress}
          onDisapprovalPress={onDisapprovalPress}
        />
      )}
      overshootRight={false}>
      <Container>
        <ItemHeader>
          <ItemHeaderLeft>
            <Icon name="monetization-on" size={28} color="#000000" />
            <CompanyName>{nomemp}</CompanyName>
          </ItemHeaderLeft>
          <ItemHeaderCenter>
            <RequestDate>{datsol}</RequestDate>
          </ItemHeaderCenter>
          <ItemHeaderRight>
            <RequestNumber>Nº {numsol}</RequestNumber>
          </ItemHeaderRight>
        </ItemHeader>
        <ItemContent>
          <ItemMainInformation>
            <BeneficiaryInfo>
              <BeneficiaryNameLabel>Beneficiário</BeneficiaryNameLabel>
              <BeneficiaryName>{nomfor}</BeneficiaryName>
            </BeneficiaryInfo>
            <RequesterInfo>
              <RequesterNameLabel>Solicitante</RequesterNameLabel>
              <RequesterName>{nomsol}</RequesterName>
            </RequesterInfo>
            <ReceptionInfo>
              <ReceptionNameLabel>Recebimento</ReceptionNameLabel>
              <ReceptionName>{recebimento}</ReceptionName>
            </ReceptionInfo>
          </ItemMainInformation>
          <ItemSecondaryInformation>
            <TotalValueInfo>
              <TotalValueLabel>Valor total</TotalValueLabel>
              <TotalValue>{vlrsol}</TotalValue>
            </TotalValueInfo>
            <TypeInfo>
              <TypeLabel>Tipo</TypeLabel>
              <Type>{tipo}</Type>
            </TypeInfo>
          </ItemSecondaryInformation>
          <ItemFooter>
            <DetailsButton onPress={onDetailsPress}>
              <DetailsButtonText>ver detalhes</DetailsButtonText>
            </DetailsButton>
          </ItemFooter>
        </ItemContent>
      </Container>
    </Swipeable>
  );
}
