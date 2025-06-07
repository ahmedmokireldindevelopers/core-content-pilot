
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users, FileText, Target, Brain, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Dashboard() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const metrics = [
    {
      title: t("totalContent"),
      value: "24",
      change: "+12%",
      trend: "up",
      icon: Brain,
      description: t("activeCampaigns")
    },
    {
      title: t("conversionRate"),
      value: "18.2%",
      change: "+3.1%",
      trend: "up",
      icon: TrendingUp,
      description: t("avgAcrossAllClusters")
    },
    {
      title: t("autoAssignments"),
      value: "156",
      change: "+45",
      trend: "up",
      icon: Zap,
      description: t("thisWeek")
    },
    {
      title: t("activeClients"),
      value: "89",
      change: "+8",
      trend: "up",
      icon: Users,
      description: t("multiLanguageSupport")
    }
  ];

  const topClusters = [
    { name: "Technology Solutions", traffic: 2840, conversion: 24.5, articles: 45 },
    { name: "Healthcare Services", traffic: 1920, conversion: 19.2, articles: 32 },
    { name: "Financial Products", traffic: 1650, conversion: 31.8, articles: 28 },
    { name: "Marketing Automation", traffic: 1420, conversion: 16.7, articles: 38 }
  ];

  return (
    <div className="space-y-6">
      <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className={isRTL ? 'text-right' : ''}>
          <h1 className="text-3xl font-bold tracking-tight">{t("dashboardTitle")}</h1>
          <p className="text-muted-foreground">Smart content clustering and CRM analytics</p>
        </div>
        <Badge variant="outline" className="gap-2">
          <div className="h-2 w-2 bg-green-500 rounded-full"></div>
          {t("allSystemsOperational")}
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className={`flex flex-row items-center justify-between space-y-0 pb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <CardTitle className={`text-sm font-medium ${isRTL ? 'text-right' : ''}`}>{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className={isRTL ? 'text-right' : ''}>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
              <div className={`flex items-center text-xs text-green-600 mt-1 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                <TrendingUp className={`h-3 w-3 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                {metric.change}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className={isRTL ? 'text-right' : ''}>{t("topPerformingClusters")}</CardTitle>
            <CardDescription className={isRTL ? 'text-right' : ''}>{t("contentPerformanceByCluster")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topClusters.map((cluster, index) => (
                <div key={cluster.name} className="space-y-2">
                  <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`space-y-1 ${isRTL ? 'text-right' : ''}`}>
                      <p className="text-sm font-medium">{cluster.name}</p>
                      <div className={`flex gap-4 text-xs text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span>{cluster.traffic} visits</span>
                        <span>{cluster.conversion}% conversion</span>
                        <span>{cluster.articles} articles</span>
                      </div>
                    </div>
                    <Badge variant={index === 0 ? "default" : "secondary"}>
                      #{index + 1}
                    </Badge>
                  </div>
                  <Progress value={cluster.conversion * 3} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className={isRTL ? 'text-right' : ''}>{t("recentActivity")}</CardTitle>
            <CardDescription className={isRTL ? 'text-right' : ''}>{t("staffAutomaticallyAssigned")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { client: "TechCorp Inc.", cluster: "Technology", staff: "Sarah Chen", time: "2 min ago" },
                { client: "MedLife Solutions", cluster: "Healthcare", staff: "Dr. Martinez", time: "5 min ago" },
                { client: "FinanceFlow", cluster: "Financial", staff: "Mike Johnson", time: "12 min ago" },
                { client: "MarketPro Agency", cluster: "Marketing", staff: "Lisa Wang", time: "18 min ago" }
              ].map((assignment, index) => (
                <div key={index} className={`flex items-center justify-between py-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`space-y-1 ${isRTL ? 'text-right' : ''}`}>
                    <p className="text-sm font-medium">{assignment.client}</p>
                    <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Badge variant="outline" className="text-xs">{assignment.cluster}</Badge>
                      <span className="text-xs text-muted-foreground">→ {assignment.staff}</span>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{assignment.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
