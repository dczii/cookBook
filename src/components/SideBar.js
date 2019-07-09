import React, {Component} from 'react';
import {NavigationActions, DrawerActions, ScrollView} from 'react-navigation';
import {
    TouchableOpacity,
    Text,
    View,
    TouchableHighlight,
    SafeAreaView,
    Image
} from 'react-native';
// import firebase from 'react-native-firebase';
import _ from 'lodash'

function SideBar(props) {
    _navigateToScreen = (route) => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
          });

          props.navigation.dispatch(navigateAction);
          props.navigation.dispatch(DrawerActions.closeDrawer())
    }

    _closeDrawer = () => {
        props.navigation.dispatch(DrawerActions.closeDrawer())
    }

    return (
        <View style={{height: '100%'}}>
            <SafeAreaView/>
            <TouchableOpacity 
                style={{
                    alignItems: 'flex-end',
                    paddingRight: 20
                }}
                onPress={() => _closeDrawer()}>
                <Image
                resizeMode='cover'
                style={{ height: 30, width: 30 }}
                source={require('../../assets/images/close.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingLeft: 20, width:'100%', backgroundColor: '#FAFAFA' }} underlayColor={'#E1EFFA'} activeOpacity={1}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 18,  paddingTop: 21.5, paddingBottom: 21.5, color: '#000'}}>
                        Home
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingLeft: 20, width:'100%', backgroundColor: '#FAFAFA' }} underlayColor={'#E1EFFA'} activeOpacity={1}
                onPress={() => _navigateToScreen('Login')}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 18,  paddingTop: 21.5, paddingBottom: 21.5, color: '#000'}}>
                        Login
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default SideBar;