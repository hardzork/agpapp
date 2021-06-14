import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RectButton} from 'react-native-gesture-handler';
import {lighten} from 'polished';
import {Platform} from 'react-native';

// const paddingBottomFlatList = Platform.OS === 'ios' ? 130 : 30;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  // contentContainerStyle: {paddingBottom: paddingBottomFlatList},
})`
  margin: 20px;
  /* flex: 1; */
`;
export const Row = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;
export const CompanyInfo = styled.View`
  margin: 5px;
`;
export const CompanyInfoLabel = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #006c58;
  text-transform: capitalize;
`;
export const CompanyInfoName = styled.Text`
  font-family: Poppins-Regular;
  font-size: 11px;
`;

export const RequestNumberInfo = styled.View`
  margin: 5px;
`;
export const RequestNumberLabel = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #006c58;
  text-transform: capitalize;
`;
export const RequestNumberName = styled.Text`
  font-family: Poppins-Regular;
  font-size: 11px;
`;

export const RequestDateInfo = styled.View`
  margin: 5px;
`;
export const RequestDateLabel = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #006c58;
  text-transform: capitalize;
`;
export const RequestDateName = styled.Text`
  font-family: Poppins-Regular;
  font-size: 11px;
`;

export const RequesterInfo = styled.View`
  margin: 5px;
`;
export const RequesterInfoLabel = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #006c58;
  text-transform: capitalize;
`;
export const RequesterInfoName = styled.Text`
  font-family: Poppins-Regular;
  font-size: 11px;
  text-transform: capitalize;
`;

export const BeneficiaryInfo = styled.View`
  margin: 5px;
`;
export const BeneficiaryInfoLabel = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #006c58;
  text-transform: capitalize;
`;
export const BeneficiaryInfoName = styled.Text`
  font-family: Poppins-Regular;
  font-size: 11px;
  text-transform: capitalize;
`;

export const CostCenterInfo = styled.View`
  margin: 5px;
`;
export const CostCenterInfoLabel = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #006c58;
  text-transform: capitalize;
`;
export const CostCenterInfoName = styled.Text`
  font-family: Poppins-Regular;
  font-size: 11px;
  text-transform: capitalize;
`;

export const ReceivingModeInfo = styled.View`
  margin: 5px;
`;
export const ReceivingModeInfoLabel = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #006c58;
  text-transform: capitalize;
`;
export const ReceivingModeInfoName = styled.Text`
  font-family: Poppins-Regular;
  font-size: 11px;
  text-transform: capitalize;
`;

export const BankInfo = styled.View`
  margin: 5px;
`;
export const BankInfoLabel = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #006c58;
  text-transform: capitalize;
`;
export const BankInfoName = styled.Text`
  font-family: Poppins-Regular;
  font-size: 11px;
  text-transform: capitalize;
`;

export const BankAgencyInfo = styled.View`
  margin: 5px;
`;
export const BankAgencyInfoLabel = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #006c58;
  text-transform: capitalize;
`;
export const BankAgencyInfoName = styled.Text`
  font-family: Poppins-Regular;
  font-size: 11px;
  text-transform: capitalize;
`;

export const BankAccountInfo = styled.View`
  margin: 5px;
`;
export const BankAccountInfoLabel = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #006c58;
  text-transform: capitalize;
`;
export const BankAccountInfoName = styled.Text`
  font-family: Poppins-Regular;
  font-size: 11px;
  text-transform: capitalize;
`;

export const DescriptionInfo = styled.View`
  margin: 5px;
`;
export const DescriptionLabel = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #006c58;
  text-transform: capitalize;
`;
export const Description = styled.Text`
  font-family: Poppins-Regular;
  font-size: 11px;
  text-align: justify;
  line-height: 20px;
`;

export const List = styled.FlatList`
  /* flex: 1; */
  height: 100%;
  margin-top: 10px;
`;
export const Item = styled.TouchableOpacity`
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
  margin: 20px 8px;
`;
export const IdItem = styled.Text`
  flex-grow: 0;
  font-family: Poppins-SemiBold;
  font-size: 14px;
  text-transform: capitalize;
`;

export const Icone = styled(Icon)`
  flex-grow: 0;
  margin: 0px 10px;
`;

export const TypeItemInfo = styled.View`
  flex-grow: 2;
`;
export const TypeItemLabel = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #006c58;
  text-transform: capitalize;
`;
export const TypeItemName = styled.Text`
  font-family: Poppins-SemiBold;
  font-size: 14px;
  text-transform: capitalize;
`;
export const ItemValueInfo = styled.View`
  flex-grow: 0;
`;
export const ItemValueLabel = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #006c58;
  text-transform: capitalize;
`;
export const ItemValueName = styled.Text`
  font-family: Poppins-SemiBold;
  font-size: 14px;
  text-transform: capitalize;
`;

export const Separator = styled.View`
  background-color: 'rgba(0,0,0,0.15)';
  height: 1px;
`;

export const Footer = styled.View`
  margin-top: 20px;
  /* margin-bottom: 100px; */
  /* border: 1px; */
`;
export const Totals = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
export const TotalLabel = styled.Text`
  font-family: Poppins-ExtraBold;
  font-size: 24px;
  text-transform: capitalize;
  letter-spacing: -1px;
`;
export const TotalValue = styled.Text`
  font-family: Poppins-ExtraBoldItalic;
  font-size: 28px;
  text-transform: capitalize;
  letter-spacing: -1px;
  color: #006c58;
`;
export const ActionButtons = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 10px;
`;
export const Approval = styled(RectButton)`
  width: 153px;
  height: 78px;
  background-color: #006c58;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
export const ApprovalText = styled.Text`
  font-family: Poppins-Medium;
  color: #ffffff;
`;

export const Disapproval = styled(RectButton)`
  width: 153px;
  height: 78px;
  background-color: ${lighten(0.1, '#da2d2d')};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
export const DisapprovalText = styled.Text`
  font-family: Poppins-Medium;
  color: #ffffff;
`;
