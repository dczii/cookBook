import React, { useState } from 'react';
import { ImageBackground , SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { Content, Input, Item, Label } from 'native-base';

function LoginView(props) {
    const [email, handleEmail] = useState('');
    const [password, handlePassword] = useState('');
    return(
    <ImageBackground 
        style={{ flex: 1 }}
        source={require('../../../assets/images/background.jpg')}>
            <Content style={{ paddingHorizontal: 20, flex: 1, marginBottom: '15%' }}
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}>
                <Item floatingLabel style={{ marginTop: 5, marginBottom: 10 }}>
                    <Label style={{ color: '#FFF', fontWeight: 'bold'}}>
                        Email
                    </Label>
                    <Input style={{ color: '#FFF' }}
                        value={email}
                        onChangeText={e => handleEmail(e)}
                    />
                </Item>
                <Item floatingLabel style={{ marginTop: 5, marginBottom: 10 }}>
                    <Label style={{ color: '#FFF', fontWeight: 'bold'}}>
                        Password
                    </Label>
                    <Input style={{ color: '#FFF' }} secureTextEntry
                        value={password}
                        onChangeText={e => handlePassword(e)}
                    />
                </Item>
                <TouchableOpacity style={{
                    backgroundColor: '#2196f3',
                    padding: 10,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20
                }} onPress={() =>{
                    triggerLogin({
                        email: email,
                        password: password
                    })
                }}>
                    <Text style={{ color: '#FFF', fontSize: 14 }}>
                    LOGIN
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding: 10,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} onPress={() => props._goBack()}>
                    <Text style={{ color: '#FFF', fontSize: 14 }}>
                        Back to Home
                    </Text>
                </TouchableOpacity>
        </Content>  
        <SafeAreaView />
    </ImageBackground>
    );
}

const mapStateToProps = store => {
	return {
	};
};

const mapActionToProps = {
};
 
export default connect(mapStateToProps,mapActionToProps)(LoginView);