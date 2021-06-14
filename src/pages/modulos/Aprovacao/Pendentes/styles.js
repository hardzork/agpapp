import styled from 'styled-components/native';
import {Dimensions, Platfrom, Platform, SafeAreaView} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
import {RectButton} from 'react-native-gesture-handler';

import logo from '~/assets/logo-inverted.png';

const {width, height} = Dimensions.get('window');

const paddingBottomFlatList = Platform.OS === 'ios' ? 230 : 130;

// export const Container = styled(SafeAreaView)`
//   background-color: #ffffff;
//   flex: 1;
// `;

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

export const Categories = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingRight: 40},
})`
  margin-top: 20px;
  margin-bottom: 8px;
  padding: 0px 15px;
  max-height: 35px;
  min-height: 35px;
`;

export const Category = styled(RectButton)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props =>
    props.active ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'};
  margin: 0px 0px 0px 10px;
  padding: 5px;
  border-radius: 2px;
  /* transition: background 0.2s; */
`;

export const CategoryName = styled.Text`
  font-family: Poppins-Regular;
  color: #ffffff;
  margin-right: 4px;
  font-size: 14px;
`;

export const Separator = styled.View`
  height: 4px;
  background-color: rgba(255, 254, 254, 0.5);
  margin: 5px 25px;
  border-radius: 10px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {paddingBottom: paddingBottomFlatList},
})``;
