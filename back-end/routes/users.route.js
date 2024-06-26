import express from 'express';
import { getUsers } from '../controller/users.controller.js'

export const userRouter = express.Router();

router.get('/', getUsers);