import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';

import { getData, addNewData } from '../../redux/action'

function Home(props) {

  function readUserData() {
    firebase.database().ref('Recipes/').once('value', function (snapshot) {
        console.log(snapshot.val());
    });
  }

  useEffect(() => {
    // readUserData();
      props.getData();
      // props.addNewData();
      return () => {}
  }, [])

  console.log(props.recipesData)
  return(
    <View style={{ flex: 1 }}>
      <Text>React Native Template</Text>
    </View>
  );
}

const mapStateToProps = store => {
	return {
		recipesData: store.globalReducer,
	};
};

const mapActionToProps = {
  getData,
  addNewData
};
 
export default connect(mapStateToProps,mapActionToProps)(Home);