import React, { useEffect } from 'react';
import { View, Text,  } from 'react-native';
import {NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Tab, Tabs } from 'native-base';
import _ from 'lodash';

import LoginView from './LoginView'
import SignUp from './SignUp'
import { loginAction } from '../../redux/action'

function LoginContainer(props) {
  let { user } = props.globalReducer

  useEffect(() => {
    if(!_.isEmpty(user)){
      const navigateAction = NavigationActions.navigate({
        routeName: 'Home'
      });

      props.navigation.dispatch(navigateAction);
    }
    return () => {}
  }, [user])

  _goBack = (nav) => {
      props.navigation.goBack()
  }

  triggerLogin = (params) => {
    props.loginAction(params)
  }
  
  return(
    <View style={{ flex: 1 }}>
      <Tabs>
        <Tab heading='Login'>
          <LoginView nav={props.navigation} _goBack={_goBack} triggerLogin={triggerLogin}/>
        </Tab>
        <Tab heading='Signup'>
          <SignUp />
        </Tab>
      </Tabs>
    </View>
  );
}

const mapStateToProps = store => {
	return {
    globalReducer: store.globalReducer,
	};
};

const mapActionToProps = {
  loginAction
};
 
export default connect(mapStateToProps,mapActionToProps)(LoginContainer);