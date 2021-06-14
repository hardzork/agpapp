import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ffffff;
  border-radius: 10px;
  margin: 5px 15px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.4;
  shadow-radius: 2px;
  elevation: 3;
`;
export const ItemHeader = styled.View`
  justify-content: space-between;
  flex-direction: row;
  border-bottom-color: 'rgba(0,0,0,0.3)';
  border-bottom-width: 1px;
`;
export const ItemHeaderLeft = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;
export const CompanyName = styled.Text`
  font-family: Poppins-Regular;
  font-size: 12px;
  margin-left: 4px;
`;
export const ItemHeaderCenter = styled.View`
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
export const RequestDate = styled.Text`
  font-family: Poppins-Regular;
  font-size: 12px;
`;
export const ItemHeaderRight = styled.View`
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
export const RequestNumber = styled.Text`
  font-family: Poppins-Regular;
  font-size: 12px;
`;

export const ItemContent = styled.View`
  padding: 5px 10px;
`;
export const ItemMainInformation = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const BeneficiaryInfo = styled.View`
  width: 40%;
`;
export const BeneficiaryNameLabel = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #989898;
`;
export const BeneficiaryName = styled.Text`
  font-family: Poppins-SemiBold;
  font-size: 12px;
  text-transform: capitalize;
`;
export const RequesterInfo = styled.View`
  width: 20%;
`;
export const RequesterNameLabel = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #989898;
`;
export const RequesterName = styled.Text`
  font-family: Poppins-SemiBold;
  font-size: 12px;
  text-transform: capitalize;
`;
export const ReceptionInfo = styled.View`
  width: 20%;
`;
export const ReceptionNameLabel = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #989898;
`;
export const ReceptionName = styled.Text`
  font-family: Poppins-SemiBold;
  font-size: 12px;
`;

export const ItemSecondaryInformation = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const TotalValueInfo = styled.View`
  width: 50%;
`;
export const TotalValueLabel = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #989898;
`;
export const TotalValue = styled.Text`
  font-family: Poppins-SemiBold;
  font-size: 12px;
`;
export const TypeInfo = styled.View`
  width: 50%;
`;
export const TypeLabel = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #989898;
`;
export const Type = styled.Text`
  font-family: Poppins-SemiBold;
  font-size: 12px;
`;

export const ItemFooter = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
// export const DetailsButtonContainer = styled.View`
//   background-color: #fc8a15;
//   margin-right: -10px;
//   margin-bottom: -5px;
//   border-bottom-right-radius: 10px;
//   border-top-left-radius: 50px;
// `;

export const DetailsButton = styled.TouchableOpacity`
  background-color: #fc8a15;
  width: 150px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 50px;
  margin-right: -10px;
  margin-bottom: -5px;
`;
export const DetailsButtonText = styled.Text`
  font-family: Poppins-Regular;
  font-size: 10px;
  color: #ffffff;
`;

export const ActionContainer = styled.View`
  background-color: 'rgba(255,255,255,0.8)';
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 200px;
  margin: 15px 15px;
  margin-left: -20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const ApprovalButton = styled.TouchableOpacity`
  align-items: center;
`;
export const ApprovalText = styled.Text`
  font-family: Poppins-Medium;
  font-size: 12px;
  color: #006c58;
`;
export const DisapprovalButton = styled.TouchableOpacity`
  align-items: center;
`;
export const DisapprovalText = styled.Text`
  font-family: Poppins-Medium;
  font-size: 12px;
  color: #da2d2d;
`;
