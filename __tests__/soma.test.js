import { describe, it, expect } from '@jest/globals';
import ServiceSoma from '../src/services/soma.js';

describe('Testando função de somar', () => {

    it('testandos dois números positivos', () => {
        const resultado = ServiceSoma.Somar(1, 2);

        expect(resultado).toBe(3);
    })
    it('testandos dois números negativos', () => {
        const resultado = ServiceSoma.Somar(-1, -2);

        expect(resultado).toBe(-3);
    })
    it('testandos dois números com casa decimal', () => {
        const resultado = ServiceSoma.Somar(1.2, 2.2);

        expect(resultado).toBe(3.4);
    })
    it('Somando zero com outro número', () => {
        const resultado = ServiceSoma.Somar(0, 2);

        expect(resultado).toBe(2);
    })
    it('Somando um número com zero', () => {
        const resultado = ServiceSoma.Somar(1, 0);

        expect(resultado).toBe(1);
    })

})