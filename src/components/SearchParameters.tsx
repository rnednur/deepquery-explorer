
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { InfoIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SearchParametersProps {
  onModeChange: (mode: "hybrid" | "llm") => void;
  onDepthChange: (depth: number) => void;
  onBreadthChange: (breadth: number) => void;
  onCustomLLMChange: (enabled: boolean) => void;
  mode: "hybrid" | "llm";
  depth: number;
  breadth: number;
  customLLM: boolean;
}

export const SearchParameters = ({
  onModeChange,
  onDepthChange,
  onBreadthChange,
  onCustomLLMChange,
  mode,
  depth,
  breadth,
  customLLM,
}: SearchParametersProps) => {
  return (
    <Card className="w-full mt-4 animate-fadeIn glass-morphism">
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Label>Research Mode</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Choose between combined search+LLM or LLM-only mode</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <RadioGroup
            defaultValue={mode}
            onValueChange={(value) => onModeChange(value as "hybrid" | "llm")}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hybrid" id="hybrid" />
              <Label htmlFor="hybrid">Search + LLM</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="llm" id="llm" />
              <Label htmlFor="llm">LLM Only</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Research Breadth (2-10)</Label>
            <span className="text-sm text-muted-foreground">{breadth}</span>
          </div>
          <Slider
            defaultValue={[breadth]}
            max={10}
            min={2}
            step={1}
            onValueChange={([value]) => onBreadthChange(value)}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Research Depth (1-5)</Label>
            <span className="text-sm text-muted-foreground">{depth}</span>
          </div>
          <Slider
            defaultValue={[depth]}
            max={5}
            min={1}
            step={1}
            onValueChange={([value]) => onDepthChange(value)}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="custom-llm"
            checked={customLLM}
            onCheckedChange={onCustomLLMChange}
          />
          <Label htmlFor="custom-llm">Use custom LLM configuration</Label>
        </div>
      </CardContent>
    </Card>
  );
};
