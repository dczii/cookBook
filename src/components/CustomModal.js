import React, { useEffect } from 'react';
import { View, Modal, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { triggerModal } from '../redux/action'
import { getActiveChildNavigationOptions } from 'react-navigation';

function CustomModal(props) {
  let { openModal } = props.globalReducer
  return(
    <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => triggerModal(false)}
    >
      <View style={{ justifyContent:'center' }}>
        <View style={styles.container}>
            <Text>qwerqwerq</Text>
        </View>
      </View>
    </Modal>
  );
}

const mapStateToProps = store => {
	return {
		globalReducer: store.globalReducer,
	};
};

const mapActionToProps = {
    triggerModal
};
 
const styles = StyleSheet.create({
  container: {
    height: '80%',
    width: '80%',
    backgroundColor: '#FAFAFA',
    alignSelf: 'center',
  },
  
});

export default connect(mapStateToProps,mapActionToProps)(CustomModal);