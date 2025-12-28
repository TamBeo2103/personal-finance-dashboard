import { RiskDashboard } from "@/components/dashboard/RiskDashboard";
import { RISK_PROFILES } from "@/lib/constants";

export default function SavingsPage() {
    return <RiskDashboard riskProfile={RISK_PROFILES.savings} />;
}
