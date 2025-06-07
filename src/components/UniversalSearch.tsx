
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";

export function UniversalSearch() {
  const activeFilters = ["Technology", "Q4 2024", "High Priority"];
  
  return (
    <div className="border-b bg-card p-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search across all modules, clients, content..."
            className="pl-10"
          />
        </div>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Content Clusters</h4>
                <div className="space-y-2">
                  {["Technology", "Healthcare", "Finance", "Marketing"].map((cluster) => (
                    <div key={cluster} className="flex items-center space-x-2">
                      <Checkbox id={cluster} />
                      <label htmlFor={cluster} className="text-sm">{cluster}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Time Period</h4>
                <div className="space-y-2">
                  {["Last 7 days", "Last 30 days", "Q4 2024", "Custom"].map((period) => (
                    <div key={period} className="flex items-center space-x-2">
                      <Checkbox id={period} />
                      <label htmlFor={period} className="text-sm">{period}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        
        <div className="flex gap-2">
          {activeFilters.map((filter) => (
            <Badge key={filter} variant="secondary" className="gap-1">
              {filter}
              <button className="text-xs hover:text-destructive">×</button>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
