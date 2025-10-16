class ServiceSub{
    Sub(sub1, sub2){
        if(isNaN(sub1) || isNaN(sub2)){
            throw new Error('Apenas número animal');
        }
        const sub1Inteiro = sub1 * 100
        const sub2Inteiro = sub2 * 100
        const result = sub1Inteiro - sub2Inteiro
        return result / 100
        // return sub1 - sub2;
    }
}

export default new ServiceSub()