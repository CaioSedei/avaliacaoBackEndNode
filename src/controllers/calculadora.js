import ServiceCalculadora from '../services/calculadora.js'
class ControllerCalculadora {
    Soma(req, res) {
        try {
            const soma1 = req.body.soma1;
            const soma2 = req.body.soma2;
            const result = ServiceCalculadora.Somar(soma1, soma2);
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

    Sub(req, res) {
        try {
            const sub1 = req.body.sub1;
            const sub2 = req.body.sub2;
            const result = ServiceCalculadora.Sub(sub1, sub2);
            res.status(200).send({
                msg: `O resultado é ${result}`,
                data: { sub1, sub2, result },
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

    Div(req, res) {
        try {
            const div1 = req.body.div1;
            const div2 = req.body.div2;
            const result = ServiceCalculadora.Div(div1, div2);
            res.status(200).send({
                msg: `O resultado é ${result}`,
                data: { div1, div2, result },
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

    Mult(req, res) {
        try {
            const mult1 = req.body.mult1;
            const mult2 = req.body.mult2;
            const result = ServiceCalculadora.Mult(mult1, mult2);
            res.status(200).send({
                msg: `O resultado é ${result}`,
                data: { mult1, mult2, result },
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


    Operacao(_, res) {
        try {
            res.send({ msg: 'operações disponiveis ( + , - , / , * )' })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true
            })
        }
    }
}

export default new ControllerCalculadora()

