import express from 'express'
import ControllerCalculadora from '../controllers/calculadora.js'

const router = express.Router()

router.post('/somar', ControllerCalculadora.Soma)
router.post('/subtrair', ControllerCalculadora.Sub)
router.post('/divisao', ControllerCalculadora.Div)
router.post('/multiplicar', ControllerCalculadora.Mult)

router.get('/operacao', ControllerCalculadora.Operacao)



export default router