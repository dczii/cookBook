import React from "react";
import {
  createDrawerNavigator
} from "react-navigation";
import { Image } from 'react-native';
import Home from './screens/home/Home';
import SideBar from './components/SideBar';
import LoginContainer from './screens/login/LoginContainer';

import { Dimensions } from "react-native";
const dimension = Dimensions.get("window");

const Drawer = createDrawerNavigator(
    {
      Home: {
        screen: Home,
      },
      Login: {
        screen: LoginContainer
      }
    }, {
      initialRouteName: "Home",
      drawerType: "slide",
      headerMode: "screen",
      drawerWidth: dimension.width / 1.5,
      contentComponent: SideBar,
    }
  );
  
  export default Drawer;