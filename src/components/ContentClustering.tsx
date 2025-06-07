
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Link, TrendingUp, FileText, Plus, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function ContentClustering() {
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Clustering</h1>
          <p className="text-muted-foreground">Smart content suggestions and cluster analytics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Brain className="h-4 w-4" />
            Auto-Cluster Content
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Cluster
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              Smart Suggestions
            </CardTitle>
            <CardDescription>AI-generated content recommendations based on cluster performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm">{suggestion.title}</h4>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">{suggestion.cluster}</Badge>
                        <Badge variant="outline" className="text-xs">{suggestion.type}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-600">{suggestion.relevance}%</div>
                      <div className="text-xs text-muted-foreground">Relevance</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {suggestion.keywords.map((keyword) => (
                      <Badge key={keyword} variant="outline" className="text-xs">{keyword}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">View Details</Button>
                    <Button size="sm" className="flex-1">Create Content</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Clusters Overview</CardTitle>
            <CardDescription>Performance metrics by content grouping</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clusters.map((cluster, index) => (
                <div key={cluster.name} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${cluster.color}`}></div>
                      <div>
                        <h4 className="font-medium">{cluster.name}</h4>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>{cluster.articles} articles</span>
                          <span>{cluster.traffic.toLocaleString()} views</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-green-600">
                        <TrendingUp className="h-3 w-3" />
                        <span className="text-sm font-medium">+{cluster.growth}%</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{cluster.suggestions} suggestions</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
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
