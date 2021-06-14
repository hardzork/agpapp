import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  background-color: 'rgba(206,206,206,0.97)';
  border-radius: 7px;
  margin: 30px 10px;
  padding: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.Text`
  flex-grow: 2;
  text-align: center;
  font-family: Poppins-SemiBold;
  text-transform: uppercase;
  font-size: 18px;
`;
export const DismissTopButton = styled.TouchableOpacity``;

export const Body = styled.View`
  flex-grow: 2;
`;

export const Footer = styled.View`
  flex-grow: 0;
`;
export const DismissBottomButton = styled.TouchableOpacity`
  border: 2px;
  border-color: #ff4040;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
export const DismissBottomButtonText = styled.Text`
  font-family: Poppins-SemiBold;
  color: #ff4040;
  font-size: 16px;
  text-transform: uppercase;
`;
