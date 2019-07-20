import express from 'express';
import {create_user, getUser, getSpecificUser, updateUser, deleteUser} from '../controller/users';
import {userValidation} from '../utils/validation';


const router = express.Router();

router.post('/api/v1/users', userValidation, create_user);
router.get('/api/v1/users', getUser);
router.get('/api/v1/users/:id', getSpecificUser);
router.put('/api/v1/users/:id', userValidation, updateUser);
router.delete('/api/v1/users/:id', deleteUser);


export default router;