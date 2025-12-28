"use client";

import { useState, useMemo } from "react";
import { RiskProfile } from "@/lib/constants";
import { calculateProjection, formatCurrency } from "@/lib/calculations";
import { RiskIndicator } from "./RiskIndicator";
import { TimeHorizonSlider } from "./TimeHorizonSlider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RiskDashboardProps {
    riskProfile: RiskProfile;
}

export function RiskDashboard({ riskProfile }: RiskDashboardProps) {
    const [years, setYears] = useState(10);
    const [principal, setPrincipal] = useState(10000);
    const [contribution, setContribution] = useState(500);

    const projectedValue = useMemo(() => {
        return calculateProjection(principal, contribution, riskProfile.baseRate, years);
    }, [principal, contribution, riskProfile.baseRate, years]);

    const totalInvested = principal + (contribution * 12 * years);
    const gains = projectedValue - totalInvested;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">{riskProfile.label} Dashboard</h2>
                <p className="text-muted-foreground">
                    Analyze risk and project future returns for {riskProfile.label.toLowerCase()} investments.
                </p>
            </div>

            <RiskIndicator riskProfile={riskProfile} />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Investment Projection</CardTitle>
                        <CardDescription>
                            Visualize your potential growth over time.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <TimeHorizonSlider years={years} setYears={setYears} />

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="principal">Initial Investment</Label>
                                <Input
                                    id="principal"
                                    type="number"
                                    value={principal}
                                    onChange={(e) => setPrincipal(Number(e.target.value))}
                                    min={0}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="contribution">Monthly Contribution</Label>
                                <Input
                                    id="contribution"
                                    type="number"
                                    value={contribution}
                                    onChange={(e) => setContribution(Number(e.target.value))}
                                    min={0}
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Projected Results</CardTitle>
                        <CardDescription>
                            Estimated value after {years} years
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-1">
                            <span className="text-sm font-medium text-muted-foreground">Total Projected Value</span>
                            <div className="text-4xl font-bold text-primary">
                                {formatCurrency(projectedValue)}
                            </div>
                        </div>

                        <div className="pt-4 border-t space-y-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Total Invested</span>
                                <span className="font-semibold">{formatCurrency(totalInvested)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Total Gains</span>
                                <span className="font-semibold text-green-600">+{formatCurrency(gains)}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
