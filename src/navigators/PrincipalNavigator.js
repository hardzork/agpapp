import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Principal from '~/pages/Principal';
import AprovacaoNavigator from '~/navigators/AprovacaoNavigator';

export default function Main() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Principal"
        component={Principal}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Aprovacao"
        component={AprovacaoNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
