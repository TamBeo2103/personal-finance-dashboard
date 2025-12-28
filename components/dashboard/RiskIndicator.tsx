import { RiskProfile } from "@/lib/constants";
import { BadgeAlert, TrendingUp, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RiskIndicatorProps {
    riskProfile: RiskProfile;
}

export function RiskIndicator({ riskProfile }: RiskIndicatorProps) {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Risk Level</CardTitle>
                    <BadgeAlert className={`h-4 w-4 ${riskProfile.riskLevel === 'Very High' ? 'text-red-500' : 'text-muted-foreground'}`} />
                </CardHeader>
                <CardContent>
                    <div className={`text-2xl font-bold ${riskProfile.riskLevel === 'Very High' ? 'text-red-500' : ''}`}>
                        {riskProfile.riskLevel}
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Asset safety assessment
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Annual Volatility</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">±{riskProfile.volatility}%</div>
                    <p className="text-xs text-muted-foreground">
                        Standard deviation
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Base Return Rate</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{(riskProfile.baseRate * 100).toFixed(1)}%</div>
                    <p className="text-xs text-muted-foreground">
                        Expected annual APY
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
