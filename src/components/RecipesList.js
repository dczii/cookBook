import React, { useEffect } from 'react';
import {
    StyleSheet,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';
import _ from 'lodash';

function RecipesList(props) {
    let { dataList } = props;

    return(
        <ScrollView style={{ flex: 1 }}>
            {_.map(dataList, (data, idx) => {
                return(
                    <ImageBackground key={idx} 
                        style={styles.background}
                        source={{ uri: data.imageUrl }}>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.desc}>{data.description}</Text>
                        
                        <TouchableOpacity style={styles.btn}
                            onPress={() => {
                                props.onShowModal(true)
                                props.editData({id: idx, data})
                            }}>
                            <Image
                                style={{width: 20, height: 20}}
                                source={require('../../assets/images/edit-icon.png')}
                                />
                        </TouchableOpacity>
                    </ImageBackground>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 10
    },
    container: {
      flex: 1,
      height: 60,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingHorizontal: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 12,
    },
    btn: {
        position: 'absolute',
        right: 20,
        top: 15
    }
});

export default RecipesList;