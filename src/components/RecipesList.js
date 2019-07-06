import React, { useEffect } from 'react';
import {
    StyleSheet,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    View,
    Image,
    ListView,
    Text
} from 'react-native';
import { List, ListItem, Button } from 'native-base';
import _ from 'lodash';

function RecipesList(props) {
    let { dataList } = props;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    return(
        <ScrollView style={{ flex: 1 }}>
            <List
                leftOpenValue={75}
                rightOpenValue={-75}
                dataSource={ds.cloneWithRows(dataList)}
                renderRow={(data, idx) => {
                    return (
                    <ImageBackground 
                        style={styles.background}
                        source={{ uri: data.imageUrl }}>
                        <View style={styles.bgStyle}>
                        </View>
                        <ListItem style={styles.listStyle} key={idx} noIndent>
                            <Text style={styles.title}>{data.title}</Text>
                            <Text style={styles.desc}>{data.description}</Text>
                        </ListItem>
                    </ImageBackground>)
                }}
                renderLeftHiddenRow={(data, idx) =>
                    <Button full  primary style={styles.btn} onPress={() => {
                        props.onShowModal({openModal: true, modalView: 'update' })
                        props.editData({id: idx, data})
                    }}>
                        <Image
                            style={{width: 20, height: 20}}
                            source={require('../../assets/images/edit-icon.png')}
                            />
                    </Button>}
                  renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                    <Button full danger onPress={() => props.deleteData(rowId)}>
                    <Text>DELETE</Text>
                    </Button>}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,1)',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 12,
    },
    bgStyle: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#FFF',
        position: 'absolute',
        opacity: 0.4
    },
    listStyle: {
        flex: 1,
        borderBottomWidth: 0,
        flexDirection: 'column',
        alignItems:'flex-start'
    }
});

export default RecipesList;