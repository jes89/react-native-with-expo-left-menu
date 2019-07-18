import React, { Component } from 'react';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import NavigationDrawerStructure from './NavigationDrawerStructure';
import { createStackNavigator } from 'react-navigation';

const screenInfoArr = [ {title:'Demo Screen 1', screen : Screen1},
                        {title:'Demo Screen 2', screen : Screen2},
                        {title:'Demo Screen 3', screen : Screen3}, ]
let screenArr = [];
let NavScreenInfo = {}
let sInfo = null;
let tempNavInfo = null;

createNavigator = (title, Screen, headerBackgroundColor, headerTintColor) => {
    return createStackNavigator({
      First: {
        screen: Screen,
        navigationOptions: ({ navigation }) => ({
          title,
          headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
          headerTintColor,
          headerStyle: {
            backgroundColor: headerBackgroundColor,
          },
        }),
      },
    });
  }

for(let ix = 0, ixLen = screenInfoArr.length; ix < ixLen; ix++){
    sInfo = screenInfoArr[ix];
    screenArr[ix] = createNavigator(
                                        sInfo.title, 
                                        sInfo.screen, 
                                        sInfo.headerBgColor || '#fff', 
                                        sInfo.headerTintColor || 'black'
                                    );
}

for(let ix = 0, ixLen = screenArr.length; ix < ixLen; ix++){
    tempNavInfo = screenArr[ix];
    NavScreenInfo['NavScreen' + (ix + 1)] = {
                                                screen: tempNavInfo,
                                                navigationOptions: {
                                                                        drawerLabel: tempNavInfo.title,
                                                                    }   
                                            }
}
  

export default NavScreenInfo;