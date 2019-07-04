import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import RecipesList from '../../components/RecipesList'
import { getData, addNewData, triggerModal, editData } from '../../redux/action'

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
        />
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
  editData
};
 
export default connect(mapStateToProps,mapActionToProps)(Home);