import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ShieldCheck, TrendingUp, Wallet } from "lucide-react";
import { RISK_PROFILES } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <section className="mx-auto flex flex-col items-center gap-6 text-center py-20">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Master Your Financial Future
        </h1>
        <p className="max-w-[700px] text-muted-foreground text-lg">
          Understand risk, visualize growth, and make informed decisions across multiple asset classes with our interactive dashboard.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/index-funds">Start Analyzing <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Object.values(RISK_PROFILES).map((profile) => (
          <Card key={profile.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {profile.label}
                <div className={`w-2 h-2 rounded-full ${profile.color}`} />
              </CardTitle>
              <CardDescription>Risk: {profile.riskLevel}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Exp. Return</span>
                <span className="font-bold">{(profile.baseRate * 100).toFixed(1)}%</span>
              </div>
              <Button asChild className="w-full" variant="secondary">
                <Link href={`/${profile.id === 'indexFunds' ? 'index-funds' : profile.id}`}>
                  View Dashboard
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid md:grid-cols-3 gap-8 pt-10 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 bg-primary/10 rounded-full">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold">Risk Awareness</h3>
          <p className="text-muted-foreground">Clear visualization of volatility and risk factors for each asset class.</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 bg-primary/10 rounded-full">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold">Interactive Projections</h3>
          <p className="text-muted-foreground">Real-time compound interest calculations based on your custom inputs.</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 bg-primary/10 rounded-full">
            <Wallet className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold">Diverse Portfolio</h3>
          <p className="text-muted-foreground">Compare everything from stable savings to high-volatility crypto.</p>
        </div>
      </section>
    </div>
  );
}
