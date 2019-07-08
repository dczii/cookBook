import React, { useEffect } from 'react';
import { View, Text, DrawerActions, NavigationActions } from 'react-native';
import { connect } from 'react-redux';
import { Tab, Tabs } from 'native-base';

import LoginView from './LoginView'
import SignUp from './SignUp'

function LoginContainer(props) {

  _goBack = (nav) => {
      props.navigation.goBack()
  }
  
  return(
    <View style={{ flex: 1 }}>
      <Tabs>
        <Tab heading='Login'>
          <LoginView nav={props.navigation} _goBack={_goBack}/>
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
	};
};

const mapActionToProps = {
};
 
export default connect(mapStateToProps,mapActionToProps)(LoginContainer);