import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import RecipesList from '../../components/RecipesList'
import { getData, addNewData, triggerModal, editData, deleteData } from '../../redux/action'

function Home(props) {

  useEffect(() => {
      props.getData();
      return () => {}
  }, [])

  let { recipesData } = props.globalReducer;

  return(
    <View style={{ flex: 1 }}>
      <RecipesList
        dataList={recipesData}
        onShowModal={props.triggerModal}
        editData={props.editData}
        deleteData={props.deleteData}
        />
      <TouchableOpacity style={{
          backgroundColor: '#2196f3',
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20
        }}
        onPress={() => props.triggerModal({openModal: true, modalView: 'add' })}>
            <Text style={{ color: '#FFF', fontSize: 16,fontWeight: 'bold' }}>
              ADD RECIPE
            </Text>
      <SafeAreaView />
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = store => {
	return {
		globalReducer: store.globalReducer,
	};
};

const mapActionToProps = {
  getData,
  addNewData,
  triggerModal,
  editData,
  deleteData
};
 
export default connect(mapStateToProps,mapActionToProps)(Home);