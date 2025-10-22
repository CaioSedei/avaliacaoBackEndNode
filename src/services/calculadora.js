
class ServiceCalculadora {
    Somar(soma1, soma2) {
        if (isNaN(soma1) || isNaN(soma2)) {
            throw new Error('Apenas número animal');
        }
        const soma1Inteiro = soma1 * 100
        const soma2Inteiro = soma2 * 100
        const result = soma1Inteiro + soma2Inteiro
        return result / 100
        // return soma1 + soma2;
    }

    Sub(sub1, sub2) {
        if (isNaN(sub1) || isNaN(sub2)) {
            throw new Error('Apenas número animal');
        }
        const sub1Inteiro = sub1 * 100
        const sub2Inteiro = sub2 * 100
        const result = sub1Inteiro - sub2Inteiro
        return result / 100
        // return sub1 - sub2;
    }

    Div(div1, div2) {
        if (isNaN(div1) || isNaN(div2)) {
            throw new Error('Apenas número animal');
        }
        // const div1Inteiro = div1 * 100
        // const div2Inteiro = div2 * 100
        // const result = div1Inteiro / div2Inteiro
        // return result / 100
        return (div1 / div2);
    }

    Mult(mult1, mult2) {
        if (isNaN(mult1) || isNaN(mult2)) {
            throw new Error('Apenas número animal');
        }
        // const mult1Inteiro = mult1 * 100
        // const mult2Inteiro = mult2 * 100
        // const result = mult1Inteiro / mult2Inteiro
        // return result / 100
        return mult1 * mult2;
    }

}

export default new ServiceCalculadora()