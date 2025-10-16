import express from 'express'
import ControllerSoma from '../controllers/soma.js'
import ControllerSub from '../controllers/sub.js'
import ControllerDiv from '../controllers/div.js'

const router = express.Router()

router.post('/somar', ControllerSoma.Soma)
router.post('/subtrair', ControllerSub.Sub)
router.post('/divisao', ControllerDiv.Div)



export default router