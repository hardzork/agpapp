import React, {useEffect, useReducer, useMemo} from 'react';
import {Alert, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PrincipalNavigator from '~/navigators/PrincipalNavigator';
import Login from '~/pages/Login';

import AuthContext from '~/context/AuthContext';

// import api from '~/services/api';

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userData: action.payload,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            userData: action.payload,
          };

        case 'SIGN_OUT':
          return {
            ...prevState,
            userData: null,
          };
      }
    },
    {
      userData: null,
    },
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let storedData;

      try {
        storedData = await AsyncStorage.getItem('@AgroApp:UUsr');
        // await AsyncStorage.removeItem('@AgroApp:UUsr');

        dispatch({type: 'RESTORE_TOKEN', payload: storedData});
      } catch (e) {
        // Restoring token failed
      }
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async ({username, password}) => {
        if (!username || !password) {
          Alert.alert('Algo deu errado!', 'Usuário ou senha inválidos');
          return;
        }

        try {
          // const response = await api.post('/', {
          //   action: 'AutenticacaoSapiens',
          //   nomeusuario: username,
          //   senhausuario: password,
          // });
          const data = {
            codusu: 1434,
            nomexb: 'robinson.junior',
            nomcom: 'ROBINSON SANTOS ARAÚJO DA SILVA JUNIOR',
            logado: true,
          };
          // setLoading(false);
          // console.tron.log(response.data);
          // const {codusu, nomexb, nomcom, logado} = response.data;
          const {codusu, nomexb, nomcom, logado} = data;
          if (logado) {
            const storedData = await AsyncStorage.getItem('@AgroApp:UUsr');
            if (storedData) {
              await AsyncStorage.removeItem('@AgroApp:UUsr');
            }
            await AsyncStorage.setItem(
              '@AgroApp:UUsr',
              JSON.stringify({codusu, nomexb, nomcom}),
            );
            dispatch({
              type: 'SIGN_IN',
              payload: JSON.stringify({codusu, nomexb, nomcom}),
            });
          } else {
            Alert.alert('Algo deu errado!', 'Usuário ou senha inválidos');
            return;
          }
        } catch (error) {
          Alert.alert('Algo deu errado!', 'Usuário ou senha inválidos');
          return;
        }
      },
      signOut: async () => {
        await AsyncStorage.removeItem('@AgroApp:UUsr');
        dispatch({type: 'SIGN_OUT'});
      },
    }),
    [],
  );
  return (
    <AuthContext.Provider value={authContext}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator headerMode="none" sta>
          {state.userData !== null ? (
            <Stack.Screen name="Principal" component={PrincipalNavigator} />
          ) : (
            <Stack.Screen name="Login" component={Login} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
