import { describe, it, expect } from '@jest/globals';
import ServiceCalculadora from '../src/services/calculadora.js';

describe('Testando função de Mult', () => {

    it('testandos dois números positivos', () => {
        const resultado = ServiceCalculadora.Mult(5, 2);

        expect(resultado).toBe(10);
    })
    it('testandos dois números negativos', () => {
        const resultado = ServiceCalculadora.Mult(-5, -2);

        expect(resultado).toBe(10);
    })
    // it('testandos dois números com casa decimal', () => {
    //     const resultado = ServiceCalculadora.Mult(10.1, 2.2);

    //     expect(resultado).toBe(22.22);
    // })
    it('multiplicando zero com outro número', () => {
        const resultado = ServiceCalculadora.Mult(0, 2);

        expect(resultado).toBe(0);
    })
    it('multiplicando um número com zero', () => {
        const resultado = ServiceCalculadora.Mult(2, 0);

        expect(resultado).toBe(0);
    })

})