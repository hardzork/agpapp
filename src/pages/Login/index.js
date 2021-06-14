import React, {useState, useRef, useContext} from 'react';
import {StatusBar, TouchableOpacity, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AuthContext from '~/context/AuthContext';

import {
  Container,
  Logo,
  Form,
  UsernameContainer,
  UserField,
  PasswordContainer,
  PassField,
  SubmitButton,
  SubmitContainer,
  Text,
  KeyboardAvoiding,
  LoadingContainer,
} from './styles';

export default function Login({navigation, route}) {
  const passwordRef = useRef();
  const {signIn} = useContext(AuthContext);

  const [isSecure, setIsSecure] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    await signIn({username, password});
    setLoading(false);
  }

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Container>
        <KeyboardAvoiding>
          <Logo />
          <Form>
            <UsernameContainer>
              <UserField
                placeholder="Usuário"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                onChangeText={setUsername}
                value={username}
                onSubmitEditing={() => passwordRef.current.focus()}
              />
              <Icon name="person" size={32} color="rgba(0,0,0,0.5)" />
            </UsernameContainer>
            <PasswordContainer>
              <PassField
                placeholder="Senha"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="send"
                secureTextEntry={isSecure}
                onChangeText={setPassword}
                value={password}
                onSubmitEditing={handleLogin}
                ref={passwordRef}
              />
              <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
                {isSecure ? (
                  <Icon name="visibility" size={32} color="rgba(0,0,0,0.5)" />
                ) : (
                  <Icon
                    name="visibility-off"
                    size={32}
                    color="rgba(0,0,0,0.5)"
                  />
                )}
              </TouchableOpacity>
            </PasswordContainer>
            <SubmitContainer>
              {loading ? (
                <LoadingContainer>
                  <ActivityIndicator size="small" color="#000" />
                </LoadingContainer>
              ) : (
                <SubmitButton onPress={() => handleLogin()}>
                  <Text>Entrar</Text>
                  <Icon name="chevron-right" size={32} color="rgba(0,0,0,1)" />
                </SubmitButton>
              )}
            </SubmitContainer>
          </Form>
        </KeyboardAvoiding>
      </Container>
    </>
  );
}
