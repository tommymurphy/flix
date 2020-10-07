import 'react-native-gesture-handler';
import React from 'react';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, Icon, IconRegistry, Tab, TabBar } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const { Navigator, Screen } = createMaterialTopTabNavigator();

import Home from './src/pages/Home'

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const TopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab title='USERS' icon={PersonIcon}/>
    <Tab title='USERS' icon={PersonIcon}/>
    <Tab title='USERS' icon={PersonIcon}/>
  </TabBar>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <TopTabBar {...props} />}>
    <Screen name='Home' component={Home}/>
    <Screen name='Profile' component={Home}/>
    <Screen name='List' component={Home}/>
  </Navigator>
);

export default function App() {
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
    </ApplicationProvider>
    </>
  );
}

{ /**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
**/ }
