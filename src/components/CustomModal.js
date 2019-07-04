import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { triggerModal, editData, updateRecipe } from '../redux/action'

function CustomModal(props) {
  let { openModal, editData } = props.globalReducer
  let [titleValue, handleTitle] = useState('');
  let [descValue, handledesc] = useState('');
  let [ingredientsValue, handleingredients] = useState([]);
  let [instructionsValue, handleinstructions] = useState([]);

  useEffect(() => {
    if (!_.isEmpty(props.globalReducer.editData)) {
      let { title, description, ingredients, instructions } = props.globalReducer.editData.data;
      handleTitle(title)
      handledesc(description)
      handleingredients(ingredients)
      handleinstructions(instructions)
    }
    return () => {}

  }, [props.globalReducer.editData]);

  onClickUpdate = () => {
    let params = {
      id: props.globalReducer.editData.id,
      data: {
        title: titleValue, 
        description: descValue,
        ingredients: ingredientsValue,
        instructions: instructionsValue,
      }
    }

    props.updateRecipe(params)
  }

  return(
    <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => triggerModal(false)}
    >
      <SafeAreaView />
      <View style={{ justifyContent:'center', alignItems: 'center' }}>
        <ScrollView style={styles.container}>
            <Text style={styles.label}>Title</Text>

            <TextInput 
              style={{backgroundColor: '#f0f0f0', padding: 10}}
              onChangeText={e => handleTitle(e)}
              value={titleValue}/>

            <Text style={styles.label}>Description</Text>
            <TextInput 
              style={{backgroundColor: '#f0f0f0', padding: 10}}
              onChangeText={e => handledesc(e)}
              value={descValue}/>
            
            <Text style={styles.label}>Ingredients</Text>
            {_.map(ingredientsValue, (value,idx) => {
              return(
                <TextInput key={idx}
                  style={{backgroundColor: '#f0f0f0', padding: 5, fontSize: 12, marginTop: 5 }}
                  onChangeText={e => {
                    let data = _.clone(ingredientsValue)
                    data[idx] = e
                    handleingredients(data)
                  }}
                  value={value}/>
              )
            })}
            
            <Text style={styles.label}>Ingredients</Text>
            {_.map(instructionsValue, (value,idx) => {
              return(
                <TextInput key={idx}
                  style={{backgroundColor: '#f0f0f0', padding: 5, fontSize: 12, marginTop: 5 }}
                  onChangeText={e => {
                    let data = _.clone(instructionsValue)
                    data[idx] = e
                    handleinstructions(data)
                  }}
                  value={value}/>
              )
            })}

            <TouchableOpacity style={{
              backgroundColor: '#2196f3',
              padding: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20
            }} onPress={() => onClickUpdate() }>
              <Text style={{ color: '#FFF', fontSize: 14 }}>
                UPDATE RECIPE
              </Text>
            </TouchableOpacity>
        </ScrollView>
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
    triggerModal,
    editData,
    updateRecipe
};
 
const styles = StyleSheet.create({
  container: {
    height: '90%',
    width: '80%',
    backgroundColor: '#cfcfcf',
    borderRadius: 10,
    alignSelf: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  label: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default connect(mapStateToProps,mapActionToProps)(CustomModal);