import userQuery from '../models/users.js';

const createUser = async (req, res) => {
  try {
    const userId = await userQuery.createUser(req.body);

    return res.json({
      message: 'User successfully created!',
      id: userId,
    });
  } catch (error) {
    console.log(`Error creating user: ${error}`);
    return res.boom.serverUnavailable(
      'Something went wrong please contact admin'
    );
  }
};

export default {createUser};
