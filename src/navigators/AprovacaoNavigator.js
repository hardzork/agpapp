import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator();

import AprovacaoPendenteNavigator from '~/navigators/AprovacaoPendenteNavigator';
import Estatisticas from '~/pages/modulos/Aprovacao/Estatisticas';

const tabOptions = {
  style: {
    backgroundColor: '#ffffff',
    height: Platform.OS === 'ios' ? 83 : 60,
    paddingBottom: Platform.OS === 'ios' ? 30 : 10,
  },
  labelStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  activeTintColor: '#000000',
  inactiveTintColor: 'rgba(0,0,0,0.3)',
  tabStyle: {},
};

export default function AprovacaoNavigator() {
  function hideTabBar(route) {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : route.params?.screen || 'Pendentes';
    if (routeName === 'Detalhes') {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Tab.Navigator tabBarOptions={tabOptions}>
      <Tab.Screen
        name="Pendentes"
        component={AprovacaoPendenteNavigator}
        options={({route}) => ({
          tabBarVisible: !hideTabBar(route),
          tabBarIcon: ({color, size}) => (
            <Icon name="done-all" color={color} size={size} />
          ),
          tabBarLabel: 'Aprovações',
        })}
      />
      <Tab.Screen
        name="Estatisticas"
        component={Estatisticas}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="equalizer" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
