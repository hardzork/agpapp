import styled from 'styled-components/native';
// import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions, SafeAreaView} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Container = styled(SafeAreaView)`
  background-color: #007551;
  flex: 0;
`;

export const Container2 = styled(SafeAreaView)`
  background-color: #ffffff;
  flex: 1;
`;

export const Header = styled.View`
  background-color: #007551;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  height: 70px;
`;

export const LeftHeader = styled.View`
  flex-grow: 0;
`;
export const BackButton = styled.TouchableOpacity`
  margin-left: 20px;
`;
export const CenterHeader = styled.View`
  flex-grow: 1;
`;
export const Title = styled.Text`
  font-family: Poppins-ExtraBold;
  font-size: 24px;
  color: #ffffff;
  margin-left: 25%;
`;

export const Background = styled.View`
  background-color: #007551;
`;

export const Content = styled.View`
  width: ${width}px;
  /* height: ${height}px; */
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: #ffffff;
`;
