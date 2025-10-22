import { describe, it, expect } from '@jest/globals';
import ServiceCalculadora from '../src/services/calculadora.js';

describe('Testando função de subtrair', () => {

    it('testandos dois números positivos', () => {
        const resultado = ServiceCalculadora.Sub(3, 2);

        expect(resultado).toBe(1);
    })
    it('testandos dois números negativos', () => {
        const resultado = ServiceCalculadora.Sub(-3, -2);

        expect(resultado).toBe(-1);
    })
    // it('testandos dois números com casa decimal', () => {
    //     const resultado = ServiceCalculadora.Sub(3.3, 2.2);

    //     expect(resultado).toBe(1.1);
    // })
    it('Subtraindo zero com outro número', () => {
        const resultado = ServiceCalculadora.Sub(0, 2);

        expect(resultado).toBe(-2);
    })
    it('Subtraindo um número com zero', () => {
        const resultado = ServiceCalculadora.Sub(1, 0);

        expect(resultado).toBe(1);
    })

})