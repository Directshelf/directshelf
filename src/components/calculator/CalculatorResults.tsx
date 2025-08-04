import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CalculatorResultsProps {
  results: {
    additionalRevenue: number;
    costSavings: number;
    totalImpact: number;
  };
}

export const CalculatorResults = ({ results }: CalculatorResultsProps) => {
  const metrics = [
    {
      label: "Multi-City Revenue Potential",
      value: results.additionalRevenue,
      tooltip: "Projected revenue increase from scaling to multiple cities with DirectShelf's infrastructure"
    },
    {
      label: "Infrastructure Cost Savings",
      value: results.costSavings,
      tooltip: "Savings from using our existing infrastructure vs building your own in each city"
    },
    {
      label: "Total Scaling Impact",
      value: results.totalImpact,
      tooltip: "Combined financial impact of multi-city expansion with DirectShelf's platform"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#action-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Card className="p-8 h-full backdrop-blur-xl bg-white/80 border-gray-100/20">
      <motion.div
        key="results"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          Multi-City Scaling Impact
        </h3>
        
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="text-sm text-gray-600">{metric.label}</div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-4 h-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{metric.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 
                          bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              ₹{metric.value.toLocaleString('en-IN')}
            </div>
          </motion.div>
        ))}

        <Button 
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white"
          size="lg"
          onClick={scrollToContact}
        >
          Get Your Multi-City Expansion Plan →
        </Button>
      </motion.div>
    </Card>
  );
};