class ServiceSoma{
    Somar(soma1, soma2){
        if(isNaN(soma1) || isNaN(soma2)){
            throw new Error('Apenas número animal');
        }
        const soma1Inteiro = soma1 * 100
        const soma2Inteiro = soma2 * 100
        const result = soma1Inteiro + soma2Inteiro
        return result / 100
        // return soma1 + soma2;
    }
}

export default new ServiceSoma()