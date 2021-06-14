import styled from 'styled-components/native';
import {Dimensions, SafeAreaView} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';

import logo from '~/assets/logo-inverted.png';

const {width, height} = Dimensions.get('window');

export const Container = styled(SafeAreaView)`
  background-color: #ffffff;
  flex: 0;
`;
export const Container2 = styled(SafeAreaView)`
  background-color: #007551;
  flex: 1;
`;
export const Header = styled.View`
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 70px;
`;

export const LeftHeader = styled.View``;
export const BackButton = styled.TouchableOpacity`
  margin-left: 20px;
`;
export const CenterHeader = styled.View``;
export const Title = styled.Text`
  font-family: Poppins-ExtraBold;
  font-size: 24px;
`;

export const CompanyIcon = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  width: 74px;
  height: 66px;
  margin-right: 10px;
`;

export const Background = styled.View`
  background-color: #ffffff;
`;

export const Content = styled.View`
  width: ${width}px;
  height: ${height}px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: #007551;
`;
