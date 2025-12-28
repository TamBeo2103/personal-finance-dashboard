import { calculateProjection } from '../lib/calculations';

describe('calculateProjection', () => {
    test('calculates correct value for 0 years (just principal)', () => {
        const result = calculateProjection(10000, 500, 0.05, 0);
        expect(result).toBe(10000);
    });

    test('calculates correct value for 1 year with no contributions', () => {
        // 10000 * (1 + 0.05/12)^(12*1) = 10511.62
        const result = calculateProjection(10000, 0, 0.05, 1);
        expect(result).toBe(10511.62);
    });

    test('calculates correct value for 1 year with contributions, 0 interest', () => {
        // 10000 + 500*12 = 16000
        const result = calculateProjection(10000, 500, 0, 1);
        expect(result).toBe(16000);
    });

    test('calculates complex scenario correctly', () => {
        // P=1000, PMT=100, r=0.10, t=5
        // FV_P = 1000 * (1 + 0.10/12)^(60) ≈ 1645.31
        // FV_C = 100 * ((1 + 0.10/12)^(60) - 1) / (0.10/12) ≈ 7743.71
        // Total ≈ 9389.02
        const result = calculateProjection(1000, 100, 0.10, 5);
        expect(result).toBe(9389.02);
    });
});
