import { RiskDashboard } from "@/components/dashboard/RiskDashboard";
import { RISK_PROFILES } from "@/lib/constants";

export default function BondsPage() {
    return <RiskDashboard riskProfile={RISK_PROFILES.bonds} />;
}
