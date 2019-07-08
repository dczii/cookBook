import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image } from 'react-native';

function Header(props) {

    _onPressMenu = (nav) => {
      nav.toggleDrawer();
    }

    return(
        <View style={styles.container}>
          <TouchableOpacity 
            onPress={() => _onPressMenu(props.nav)}
            style={{ position: 'absolute', left: 10 }}>
            <Image
              resizeMode='cover'
              style={{ height: 30, width: 30 }}
              source={require('../../assets/images/side-bar.png')}
            />
          </TouchableOpacity>
          <Image
            resizeMode='cover'
            // style={{ height: 40, width: 120 }}
            source={require('../../assets/images/logo.png')}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingVertical: 5,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,0.2)'
    },
});

export default Header;
