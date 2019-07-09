import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base'
import { connect } from 'react-redux';

function Loading(props) {
    let { isLoading } = props.globalReducer;
    useEffect(() => {
        return () => {}
      }, [props.globalReducer.isLoading])

    console.log(props.globalReducer.isLoading)
    return isLoading ? (
        <View style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            zIndex: 9999,
            alignItems: 'center' }}>
            <Spinner style={{ alignSelf: 'center' }}/>
        </View>
    ) : null;
}

const mapStateToProps = store => {
	return {
		globalReducer: store.globalReducer,
	};
};

export default connect(mapStateToProps,null)(Loading);
