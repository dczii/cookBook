import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { triggerModal, editData, updateRecipe, addNewData } from '../redux/action'

function CustomModal(props) {
  let { openModal, editData, modalView } = props.globalReducer
  let [titleValue, handleTitle] = useState('');
  let [descValue, handledesc] = useState('');
  let [ingredientsValue, handleingredients] = useState([]);
  let [instructionsValue, handleinstructions] = useState([]);

  useEffect(() => {
    if (!_.isEmpty(props.globalReducer.editData)) {
      let { title, description, ingredients, instructions, imageUrl } = props.globalReducer.editData.data;
      handleTitle(title)
      handledesc(description)
      handleingredients(ingredients)
      handleinstructions(instructions)
    }
    return () => {}

  }, [props.globalReducer.editData]);

  onClickUpdate = () => {
    let images = [
      'http://i.imgur.com/eTuCPxM.jpg',
    'http://i.imgur.com/BiFkD83.jpg',
    'http://i.imgur.com/lVdWrve.jpg',
    'http://i.imgur.com/EygIdZU.jpg',
    'http://i.imgur.com/lp6qUPo.jpg',
    'http://i.imgur.com/LUiR7W8.jpg',
  ];
    let imageUrl = ''
    if(modalView === 'update') {
      imageUrl = props.globalReducer.editData.data.imageUrl;
    }
    let params = {
      id: props.globalReducer.editData.id,
      data: {
        title: titleValue, 
        description: descValue,
        ingredients: ingredientsValue,
        instructions: instructionsValue,
        imageUrl: modalView === 'update' ? imageUrl : images[_.random(0,5)]
      }
    }

    if(modalView === 'update') {
      props.updateRecipe(params)
    } else if (modalView === 'add') {
      props.addNewData(params)
    }
  }

  showUpdateView = () => {
    return (<View style={{ justifyContent:'center', alignItems: 'center' }}>
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
          
          <Text style={styles.label}>Instructions</Text>
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
    </View>)
  }

  showAddRecipeView = () => {
    return (<View style={{ justifyContent:'center', alignItems: 'center' }}>
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

          <View style={{ flex: 1,flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.label}>Ingredients</Text>
            <TouchableOpacity onPress={() => handleingredients([...ingredientsValue, ''])}>
              <Image 
                style={{height: 20, width: 20, marginLeft: 10}}
                source={require('../../assets/images/plus-circle.png')}
                />
            </TouchableOpacity>
          </View>
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

          <View style={{ flex: 1,flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.label}>Instructions</Text>
            <TouchableOpacity onPress={() => handleinstructions([...instructionsValue, ''])}>
              <Image 
                style={{height: 20, width: 20, marginLeft: 10}}
                source={require('../../assets/images/plus-circle.png')}
                />
            </TouchableOpacity>
          </View>
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
              ADD RECIPE
            </Text>
          </TouchableOpacity>
      </ScrollView>
    </View>)
  }
  

  return(
    <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => triggerModal(false)}
    >
      <SafeAreaView />
      
      {modalView === 'update' && showUpdateView()}
      {modalView === 'add' && showAddRecipeView()}
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
    updateRecipe,
    addNewData
};
 
const styles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: '#cfcfcf',
    borderRadius: 10,
    alignSelf: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 'bold',
  }
});

export default connect(mapStateToProps,mapActionToProps)(CustomModal);