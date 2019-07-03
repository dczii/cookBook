import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';

function Header(props) {
    return(
        <View style={styles.container}>
          <Image
            resizeMode='cover'
            style={{ height: 40, width: 120 }}
            source={{uri: 'https://dczii.github.io/images/logo.png' }}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingVertical: 5,
      width: '100%',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,0.2)'
    },
});

export default Header;
