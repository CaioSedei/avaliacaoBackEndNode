import ServiceSoma from '../services/soma.js'
class ControllerSoma {
    Soma(req, res) {
        try {
            const soma1 = req.body.soma1;
            const soma2 = req.body.soma2;
            const result = ServiceSoma.Somar(soma1, soma2);
            res.status(200).send({
                msg: `O resultado é ${result}`,
                data: { soma1, soma2, result },
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true
            })
        }

    }
}

export default new ControllerSoma()

