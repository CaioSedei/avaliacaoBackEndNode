import { describe, it, expect } from '@jest/globals';
import ServiceCalculadora from '../src/services/calculadora.js';

describe('Testando função de somar', () => {

    it('testandos dois números positivos', () => {
        const resultado = ServiceCalculadora.Somar(1, 2);

        expect(resultado).toBe(3);
    })
    it('testandos dois números negativos', () => {
        const resultado = ServiceCalculadora.Somar(-1, -2);

        expect(resultado).toBe(-3);
    })
    it('testandos dois números com casa decimal', () => {
        const resultado = ServiceCalculadora.Somar(1.2, 2.2);

        expect(resultado).toBe(3.4);
    })
    it('Somando zero com outro número', () => {
        const resultado = ServiceCalculadora.Somar(0, 2);

        expect(resultado).toBe(2);
    })
    it('Somando um número com zero', () => {
        const resultado = ServiceCalculadora.Somar(1, 0);

        expect(resultado).toBe(1);
    })

})