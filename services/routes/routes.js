import express from "express";
import {home, createUser} from '../controller/user.controller.js'

const router = express.Router()

// 
router.get('/users', home)
router.post('/adduser', createUser)

export default router