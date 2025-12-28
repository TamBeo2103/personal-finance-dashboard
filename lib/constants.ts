export type AssetType = 'savings' | 'bonds' | 'indexFunds' | 'crypto';

export interface RiskProfile {
    id: AssetType;
    label: string;
    riskLevel: 'Low' | 'Low-Medium' | 'Medium-High' | 'Very High';
    volatility: number; // percentage standard deviation roughly
    baseRate: number; // expected annual return
    color: string;
}

export const RISK_PROFILES: Record<AssetType, RiskProfile> = {
    savings: {
        id: 'savings',
        label: 'High-Yield Savings',
        riskLevel: 'Low',
        volatility: 0.5,
        baseRate: 0.045, // 4.5% APY
        color: 'bg-emerald-500',
    },
    bonds: {
        id: 'bonds',
        label: 'Government Bonds',
        riskLevel: 'Low-Medium',
        volatility: 5,
        baseRate: 0.055, // 5.5%
        color: 'bg-blue-500',
    },
    indexFunds: {
        id: 'indexFunds',
        label: 'S&P 500 Index Funds',
        riskLevel: 'Medium-High',
        volatility: 15,
        baseRate: 0.10, // 10% average
        color: 'bg-orange-500',
    },
    crypto: {
        id: 'crypto',
        label: 'Bitcoin & Crypto',
        riskLevel: 'Very High',
        volatility: 75,
        baseRate: 0.25, // Speculative high return
        color: 'bg-purple-600',
    },
};
