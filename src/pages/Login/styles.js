import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {Dimensions, KeyboardAvoidingView, SafeAreaView} from 'react-native';
import logo from '~/assets/AGROPALMA-RETINA.png';

const {width, height} = Dimensions.get('window');

export const Container = styled(SafeAreaView)`
  background-color: #ffffff;
  flex: 1;
`;

export const KeyboardAvoiding = styled(KeyboardAvoidingView).attrs({
  enabled: true,
  behavior: 'position',
})`
  flex: 1;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  height: ${height * 0.11 * (1950 / 662)}px;
  margin-top: ${height * 0.11}px;
  width: ${width - 0.11}px;
`;

export const Form = styled.View`
  width: ${width}px;
  height: ${height}px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: #007551;
  bottom: 0;
  margin-top: ${height * 0.11}px;
  align-items: center;
`;

export const UsernameContainer = styled.View`
  margin-top: 50px;
  padding: 0 15px;
  height: 60px;
  background: rgba(255, 255, 255, 1);
  border-radius: 25px;
  width: ${width * 0.3 * (1950 / 662)}px;
  flex-direction: row;
  align-items: center;
`;

export const UserField = styled.TextInput.attrs({
  placeholderTextColor: '#565656',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #000;
  font-family: Poppins-Regular;
`;

export const PasswordContainer = styled.View`
  margin-top: 20px;
  padding: 0 15px;
  height: 60px;
  background: rgba(255, 255, 255, 1);
  border-radius: 25px;
  width: ${width * 0.3 * (1950 / 662)}px;
  flex-direction: row;
  align-items: center;
`;

export const PassField = styled.TextInput.attrs({
  placeholderTextColor: '#565656',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #000;
  font-family: Poppins-Regular;
  z-index: 4;
`;

export const SubmitContainer = styled.View`
  width: ${width}px;
  flex: 1;
  align-items: flex-end;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.4;
  shadow-radius: 4px;
`;
export const SubmitButton = styled(RectButton)`
  background-color: #fff;
  width: 170px;
  height: 70px;
  margin-top: 20px;
  margin-right: -20px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  elevation: 10;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 18px;
  font-family: Poppins-BoldItalic;
`;

export const LoadingContainer = styled.View`
  background-color: #fff;
  width: 170px;
  height: 70px;
  margin-top: 20px;
  margin-right: -20px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  elevation: 10;
`;
