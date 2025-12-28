import { RiskDashboard } from "@/components/dashboard/RiskDashboard";
import { RISK_PROFILES } from "@/lib/constants";

export default function IndexFundsPage() {
    return <RiskDashboard riskProfile={RISK_PROFILES.indexFunds} />;
}
