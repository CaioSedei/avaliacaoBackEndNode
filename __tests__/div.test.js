import { describe, it, expect } from '@jest/globals';
import ServiceCalculadora from '../src/services/calculadora.js';

describe('Testando função de Divisao', () => {

    it('testandos dois números positivos', () => {
        const resultado = ServiceCalculadora.Div(15, 3);

        expect(resultado).toBe(5);
    })
    it('testandos dois números negativos', () => {
        const resultado = ServiceCalculadora.Div(-15, -3);

        expect(resultado).toBe(5);
    })
    // it('testandos dois números com casa decimal', () => {
    //     const resultado = ServiceCalculadora.Div(15.5, 3,3);

    //     expect(resultado).toBe(4,6969696969696969696969696969697);
    // })
    it('Dividindo zero com outro número', () => {
        const resultado = ServiceCalculadora.Div(0, 3);

        expect(resultado).toBe(0);
    })
    // it('Dividindo um número com zero', () => {
    //     const resultado = ServiceCalculadora.Div(3, 0);

    //     expect(resultado).toBe(0);
    // })

})