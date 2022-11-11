import firestore from '../services/firebase.js';
const usersModel = firestore.collection('users');

const createUser = async (userData) => {
  try {
    const user = await usersModel.add({...userData});
    return user.id;
  } catch (err) {
    console.log('Error in creating user', err);
    throw err;
  }
};

export default {createUser};
