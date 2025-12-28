import { RiskDashboard } from "@/components/dashboard/RiskDashboard";
import { RISK_PROFILES } from "@/lib/constants";

export default function CryptoPage() {
    return <RiskDashboard riskProfile={RISK_PROFILES.crypto} />;
}
