
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
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export function UniversalSearch() {
  const { t, language } = useLanguage();
  const activeFilters = ["Technology", "Q4 2024", "High Priority"];
  const isRTL = language === 'ar';
  
  return (
    <div className="border-b bg-card p-4">
      <div className={`flex items-center gap-4 ${isRTL ? 'rtl-flex-reverse' : ''}`}>
        <div className="relative flex-1 max-w-lg">
          <Search className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground ${isRTL ? 'search-icon right-3' : 'left-3'}`} />
          <Input
            placeholder={t("searchPlaceholder")}
            className={isRTL ? 'search-input pr-10 pl-3 text-right' : 'pl-10'}
            dir={isRTL ? 'rtl' : 'ltr'}
          />
        </div>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              {t("filters")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className={`w-80 bg-popover ${isRTL ? 'dropdown-content' : ''}`} align={isRTL ? "start" : "end"}>
            <div className="space-y-4">
              <div>
                <h4 className={`font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>Content Clusters</h4>
                <div className="space-y-2">
                  {["Technology", "Healthcare", "Finance", "Marketing"].map((cluster) => (
                    <div key={cluster} className={`flex items-center ${isRTL ? 'flex-row-reverse justify-end' : ''} space-x-2`}>
                      <Checkbox id={cluster} />
                      <label htmlFor={cluster} className={`text-sm ${isRTL ? 'mr-2' : ''}`}>{cluster}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className={`font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>Time Period</h4>
                <div className="space-y-2">
                  {["Last 7 days", "Last 30 days", "Q4 2024", "Custom"].map((period) => (
                    <div key={period} className={`flex items-center ${isRTL ? 'flex-row-reverse justify-end' : ''} space-x-2`}>
                      <Checkbox id={period} />
                      <label htmlFor={period} className={`text-sm ${isRTL ? 'mr-2' : ''}`}>{period}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        
        <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {activeFilters.map((filter) => (
            <Badge key={filter} variant="secondary" className="gap-1">
              {filter}
              <button className="text-xs hover:text-destructive">×</button>
            </Badge>
          ))}
        </div>

        <LanguageSwitcher />
      </div>
    </div>
  );
}
