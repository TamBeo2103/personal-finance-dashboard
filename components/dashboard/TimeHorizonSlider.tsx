import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface TimeHorizonSliderProps {
    years: number;
    setYears: (value: number) => void;
}

export function TimeHorizonSlider({ years, setYears }: TimeHorizonSliderProps) {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <Label htmlFor="time-slider" className="text-lg font-semibold">
                    Time Horizon
                </Label>
                <span className="text-xl font-bold text-primary">{years} Years</span>
            </div>
            <Slider
                id="time-slider"
                min={1}
                max={40}
                step={1}
                value={[years]}
                onValueChange={(vals) => setYears(vals[0])}
                className="w-full cursor-pointer"
                aria-label="Select investment duration in years"
            />
            <p className="text-sm text-muted-foreground">
                Adjust the slider to see how compounding affects your investment over time.
            </p>
        </div>
    );
}
