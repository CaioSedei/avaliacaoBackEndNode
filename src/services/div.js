class ServiceDiv{
    Div(div1, div2){
        if(isNaN(div1) || isNaN(div2)){
            throw new Error('Apenas número animal');
        }
        // const div1Inteiro = div1 * 100
        // const div2Inteiro = div2 * 100
        // const result = div1Inteiro / div2Inteiro
        // return result / 100
        return div1 / div2;
    }
}

export default new ServiceDiv()