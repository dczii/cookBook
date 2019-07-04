import firebase from 'react-native-firebase';

async function getFirebaseData(param) {
    try {
        let response = await firebase.database().ref('Recipes/').once('value', function (snapshot) {
            return snapshot.val();
        });
        let responseJSON = await response.toJSON();
        return responseJSON;
      
    } catch (error) {
      console.log(error)
    }
}

async function updateFirebaseData(param) {
    try {
        let response = await firebase.database().ref('Recipes/').child(param.id).set(param.data)
        .then(() => {
            return true;
        }).catch((error) => {
            console.log(error);
        });

        return response;
      
    } catch (error) {
      console.log(error)
    }
}

export const Api = {
    getFirebaseData,
    updateFirebaseData,
    // putFirebaseData,
 };