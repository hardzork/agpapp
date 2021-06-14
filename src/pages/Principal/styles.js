import styled from 'styled-components/native';
import logo from '~/assets/logo-inverted.png';
import {Dimensions, Platform, SafeAreaView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

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
export const Info = styled.View`
  margin-left: 10px;
  justify-content: space-between;
  flex-direction: column;
`;
export const Username = styled.Text`
  font-family: Poppins-ExtraBold;
  font-size: 30px;
  color: #494949;
  text-transform: capitalize;
`;
export const InfoText = styled.Text`
  font-family: Poppins-Light;
  font-size: 12px;
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
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: #007551;
`;

export const CardModuloList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {paddingBottom: 10},
  numColumns: 2,
})`
  margin-top: 15px;
  padding: 15px;
`;
export const CardModulo = styled(RectButton)`
  background-color: #ffffff;
  border-radius: 5px;
  flex: 1;
  align-items: center;
  margin: 0 10px 20px;
  padding: 10px;
`;
export const CardModuloTitle = styled.Text`
  font-family: Poppins-SemiBoldItalic;
  font-size: 13px;
`;
export const CardModuloIcon = styled.View``;

export const LogoutContainer = styled.View`
  justify-content: flex-start;
  flex-direction: row;
  width: ${width}px;
  background-color: #ffffff;
`;
export const LogoutText = styled.Text`
  font-family: Poppins-SemiBold;
  color: #ff4040;
  font-size: 16px;
`;

export const LogoutButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 170px;
  padding: 1px;
  margin: 5px 0px 5px 10px;
  border: 1px;
  border-color: #ff4040;
  border-radius: 4px;
`;
