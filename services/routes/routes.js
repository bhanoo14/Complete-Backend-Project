import express from "express";
import {home, createUser} from '../controller/user.controller.js'

const router = express.Router()

router.get('/data', home)
router.post('/createuser', createUser)

export default router