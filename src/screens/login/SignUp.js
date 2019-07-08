import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { Tab, Tabs } from 'native-base';

function SignUp(props) {
  return(
    <View style={{ flex: 1 }}>
          <Text>SignUp</Text>
    </View>
  );
}

const mapStateToProps = store => {
	return {
	};
};

const mapActionToProps = {
};
 
export default connect(mapStateToProps,mapActionToProps)(SignUp);