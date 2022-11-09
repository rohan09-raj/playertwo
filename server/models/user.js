import firestore from '../services/firebase.js';
const userModel = firestore.collection('users');

const createUser = async (userData) => {
  try {
    const user = await userModel.add({...userData});
    return user.id;
  } catch (err) {
    console.log('Error in creating user', err);
    throw err;
  }
};

export default {createUser};
