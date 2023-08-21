import express from 'express'
const router = express.Router()
import {createHouse,fetchOne,exclusive,getHouse} from '../Controller/houseController.js'

router.route('/').post(createHouse).get(getHouse)
router.route('/:id').get(fetchOne)
router.route('/prop/exclusive').get(exclusive)

// router.route('/upload-image').post(formidable(),house.newImage)
// router.route('/upload-image').post(upload.single('image'),house.newImage)

export default router