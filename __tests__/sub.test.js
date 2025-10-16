import { describe, it, expect } from '@jest/globals';
import ServiceSub from '../src/services/sub.js';

describe('Testando função de subtrair', () => {

    it('testandos dois números positivos', () => {
        const resultado = ServiceSub.Sub(3, 2);

        expect(resultado).toBe(1);
    })
    it('testandos dois números negativos', () => {
        const resultado = ServiceSub.Sub(-3, -2);

        expect(resultado).toBe(-1);
    })
    it('testandos dois números com casa decimal', () => {
        const resultado = ServiceSub.Sub(3.3, 2.2);

        expect(resultado).toBe(1.1);
    })
    it('Subtraindo zero com outro número', () => {
        const resultado = ServiceSub.Sub(0, 2);

        expect(resultado).toBe(-2);
    })
    it('Subtraindo um número com zero', () => {
        const resultado = ServiceSub.Sub(1, 0);

        expect(resultado).toBe(1);
    })

})