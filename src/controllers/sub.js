import ServiceSub from '../services/sub.js'
class ControllerSub {
    Sub(req, res) {
        try {
            const sub1 = req.body.sub1;
            const sub2 = req.body.sub2;
            const result = ServiceSub.Sub(sub1, sub2);
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
}

export default new ControllerSub()

