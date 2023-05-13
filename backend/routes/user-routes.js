const express = require('express');
const {getAllUsers} = require('../controllers/user-controller');

const userRouter = express.Router();

userRouter.get("/", getAllUser);

export default userRouter;