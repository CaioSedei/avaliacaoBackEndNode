import ServiceDiv from '../services/div.js'
class ControllerDiv {
    Div(req, res) {
        try {
            const div1 = req.body.div1;
            const div2 = req.body.div2;
            const result = ServiceDiv.Div(div1, div2);
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
}

export default new ControllerDiv()

