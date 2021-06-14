import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Pendentes from '~/pages/modulos/Aprovacao/Pendentes';
import Detalhes from '~/pages/modulos/Aprovacao/Detalhes';

export default function AprovacaoPendenteNavigator() {
  // function ModalScreen({navigation}) {
  //   return (
  //     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  //       <Text style={{fontSize: 30}}>This is a modal!</Text>
  //       <Button onPress={() => navigation.goBack()} title="Dismiss" />
  //     </View>
  //   );
  // }

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Pendentes" component={Pendentes} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      {/* <Stack.Screen name="MyModal" component={ModalScreen} /> */}
    </Stack.Navigator>
  );
}
