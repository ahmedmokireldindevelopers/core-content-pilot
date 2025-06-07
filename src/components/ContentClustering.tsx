
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Link, TrendingUp, FileText, Plus, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContentClustering() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const clusters = [
    {
      name: "Technology Solutions",
      articles: 45,
      traffic: 28400,
      growth: 12.5,
      keywords: ["AI", "Machine Learning", "SaaS", "Cloud Computing"],
      suggestions: 8,
      color: "bg-blue-500"
    },
    {
      name: "Healthcare Services",
      articles: 32,
      traffic: 19200,
      growth: 8.2,
      keywords: ["Telemedicine", "Patient Care", "Medical Devices"],
      suggestions: 5,
      color: "bg-green-500"
    },
    {
      name: "Financial Products",
      articles: 28,
      traffic: 16500,
      growth: 15.7,
      keywords: ["Fintech", "Banking", "Investment", "Cryptocurrency"],
      suggestions: 12,
      color: "bg-purple-500"
    },
    {
      name: "Marketing Automation",
      articles: 38,
      traffic: 14200,
      growth: 6.3,
      keywords: ["Email Marketing", "Lead Generation", "Analytics"],
      suggestions: 6,
      color: "bg-orange-500"
    }
  ];

  const suggestions = [
    {
      title: "AI-Powered Customer Support Solutions",
      cluster: "Technology Solutions",
      relevance: 94,
      type: "Article",
      keywords: ["AI", "Customer Support", "Automation"]
    },
    {
      title: "Telehealth Trends in Post-Pandemic Era",
      cluster: "Healthcare Services",
      relevance: 89,
      type: "Landing Page",
      keywords: ["Telehealth", "Healthcare", "Digital Health"]
    },
    {
      title: "DeFi Investment Strategies for 2024",
      cluster: "Financial Products",
      relevance: 92,
      type: "Article",
      keywords: ["DeFi", "Investment", "Blockchain"]
    }
  ];

  return (
    <div className="space-y-6">
      <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className={isRTL ? 'text-right' : ''}>
          <h1 className="text-3xl font-bold tracking-tight">{t("contentClusteringTitle")}</h1>
          <p className="text-muted-foreground">{t("smartClustering")}</p>
        </div>
        <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Button variant="outline" className="gap-2">
            <Brain className="h-4 w-4" />
            {t("autoCusterContent")}
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            {t("createCluster")}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
              <Sparkles className="h-5 w-5 text-yellow-500" />
              {t("smartSuggestions")}
            </CardTitle>
            <CardDescription className={isRTL ? 'text-right' : ''}>{t("aiGeneratedRecommendations")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className={`flex items-start justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`space-y-1 flex-1 ${isRTL ? 'text-right' : ''}`}>
                      <h4 className="font-medium text-sm">{suggestion.title}</h4>
                      <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                        <Badge variant="secondary" className="text-xs">{suggestion.cluster}</Badge>
                        <Badge variant="outline" className="text-xs">{suggestion.type}</Badge>
                      </div>
                    </div>
                    <div className={`text-center min-w-[60px] ${isRTL ? 'text-left' : 'text-right'}`}>
                      <div className="text-sm font-medium text-green-600">{suggestion.relevance}%</div>
                      <div className="text-xs text-muted-foreground">{t("relevance")}</div>
                    </div>
                  </div>
                  <div className={`flex flex-wrap gap-1 ${isRTL ? 'justify-end' : ''}`}>
                    {suggestion.keywords.map((keyword) => (
                      <Badge key={keyword} variant="outline" className="text-xs">{keyword}</Badge>
                    ))}
                  </div>
                  <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Button size="sm" variant="outline" className="flex-1">{t("viewDetails")}</Button>
                    <Button size="sm" className="flex-1">{t("createContent")}</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className={isRTL ? 'text-right' : ''}>{t("contentClustersOverview")}</CardTitle>
            <CardDescription className={isRTL ? 'text-right' : ''}>{t("performanceMetricsByGroup")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clusters.map((cluster, index) => (
                <div key={cluster.name} className="border rounded-lg p-4 space-y-3">
                  <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`flex items-center gap-3 flex-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-3 h-3 rounded-full ${cluster.color}`}></div>
                      <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                        <h4 className="font-medium">{cluster.name}</h4>
                        <div className={`flex gap-4 text-sm text-muted-foreground ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                          <span>{cluster.articles} articles</span>
                          <span>{cluster.traffic.toLocaleString()} views</span>
                        </div>
                      </div>
                    </div>
                    <div className={`text-center min-w-[80px] ${isRTL ? 'text-left' : 'text-right'}`}>
                      <div className={`flex items-center gap-1 text-green-600 justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <TrendingUp className="h-3 w-3" />
                        <span className="text-sm font-medium">+{cluster.growth}%</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{cluster.suggestions} suggestions</div>
                    </div>
                  </div>
                  <div className={`flex flex-wrap gap-1 ${isRTL ? 'justify-end' : ''}`}>
                    {cluster.keywords.slice(0, 3).map((keyword) => (
                      <Badge key={keyword} variant="secondary" className="text-xs">{keyword}</Badge>
                    ))}
                    {cluster.keywords.length > 3 && (
                      <Badge variant="outline" className="text-xs">+{cluster.keywords.length - 3} more</Badge>
                    )}
                  </div>
                  <Progress value={cluster.growth * 2} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
