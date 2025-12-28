/**
 * Calculates the future value of an investment with monthly contributions.
 * Formula: FV = P(1 + r/n)^(nt) + PMT * (((1 + r/n)^(nt) - 1) / (r/n))
 * where:
 * P = Principal
 * r = Annual interest rate (decimal)
 * n = number of times interest is compounded per year (12)
 * t = number of years
 * PMT = Monthly contribution
 */
export const calculateProjection = (
    principal: number,
    monthlyContribution: number,
    annualRate: number,
    years: number
): number => {
    if (years === 0) return principal;

    const r = annualRate;
    const n = 12; // Monthly compounding
    const t = years;
    const PMT = monthlyContribution;

    const compoundInterestFactor = Math.pow(1 + r / n, n * t);

    const futureValuePrincipal = principal * compoundInterestFactor;

    let futureValueContributions = 0;
    if (r !== 0) {
        futureValueContributions = PMT * ((compoundInterestFactor - 1) / (r / n));
    } else {
        futureValueContributions = PMT * n * t;
    }

    return Number((futureValuePrincipal + futureValueContributions).toFixed(2));
};

export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(value);
};
