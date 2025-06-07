
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Target, TrendingUp, Users, DollarSign, Plus, Filter } from "lucide-react";

export function SalesSegmentation() {
  const segments = [
    {
      name: "Enterprise Technology",
      companies: 45,
      value: "$2.4M",
      deals: 12,
      conversion: 68,
      growth: 15.2,
      color: "bg-blue-500"
    },
    {
      name: "Healthcare SMB",
      companies: 72,
      value: "$890K",
      deals: 28,
      conversion: 42,
      growth: 22.8,
      color: "bg-green-500"
    },
    {
      name: "Financial Services",
      companies: 34,
      value: "$1.8M",
      deals: 8,
      conversion: 71,
      growth: 8.5,
      color: "bg-purple-500"
    },
    {
      name: "Marketing Agencies",
      companies: 89,
      value: "$650K",
      deals: 35,
      conversion: 38,
      growth: 31.4,
      color: "bg-orange-500"
    }
  ];

  const deals = [
    {
      company: "TechFlow Systems",
      segment: "Enterprise Technology",
      value: "$85K",
      stage: "Proposal",
      probability: 75,
      daysInStage: 12,
      contact: "Sarah Mitchell"
    },
    {
      company: "HealthCarePlus",
      segment: "Healthcare SMB",
      value: "$28K",
      stage: "Negotiation",
      probability: 90,
      daysInStage: 5,
      contact: "Dr. Johnson"
    },
    {
      company: "FinanceForward",
      segment: "Financial Services",
      value: "$120K",
      stage: "Demo",
      probability: 45,
      daysInStage: 18,
      contact: "Mike Chen"
    },
    {
      company: "AdVantage Marketing",
      segment: "Marketing Agencies",
      value: "$15K",
      stage: "Closing",
      probability: 95,
      daysInStage: 3,
      contact: "Lisa Park"
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Closing": return "bg-green-100 text-green-800";
      case "Negotiation": return "bg-blue-100 text-blue-800";
      case "Proposal": return "bg-yellow-100 text-yellow-800";
      case "Demo": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sales Segmentation</h1>
          <p className="text-muted-foreground">Targeted deals by industry and company type</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter Segments
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Segment
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Total Pipeline", value: "$5.9M", icon: DollarSign, change: "+12.5%" },
          { title: "Active Deals", value: "83", icon: Target, change: "+8" },
          { title: "Avg. Deal Size", value: "$71K", icon: TrendingUp, change: "+15.2%" },
          { title: "Segments", value: "12", icon: Users, change: "+2" }
        ].map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                {metric.change}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Sales Segments Performance</CardTitle>
            <CardDescription>Revenue and conversion by industry segmentation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {segments.map((segment) => (
                <div key={segment.name} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${segment.color}`}></div>
                      <div>
                        <h4 className="font-medium">{segment.name}</h4>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>{segment.companies} companies</span>
                          <span>{segment.deals} active deals</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{segment.value}</div>
                      <div className="flex items-center gap-1 text-green-600 text-xs">
                        <TrendingUp className="h-3 w-3" />
                        +{segment.growth}%
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Conversion Rate</span>
                      <span>{segment.conversion}%</span>
                    </div>
                    <Progress value={segment.conversion} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Deals Pipeline</CardTitle>
            <CardDescription>Current opportunities by segment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {deals.map((deal, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium">{deal.company}</h4>
                      <p className="text-sm text-muted-foreground">{deal.segment}</p>
                      <p className="text-xs text-muted-foreground">Contact: {deal.contact}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{deal.value}</div>
                      <Badge variant="outline" className={getStageColor(deal.stage)}>
                        {deal.stage}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-sm">Probability: {deal.probability}%</div>
                      <div className="h-2 w-16 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-green-500 rounded-full" 
                          style={{ width: `${deal.probability}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {deal.daysInStage} days in stage
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
