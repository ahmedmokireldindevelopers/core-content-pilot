
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { useLanguage } from "@/contexts/LanguageContext";

export function Analytics() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const trafficData = [
    { name: "Technology", traffic: 2840, conversion: 24.5 },
    { name: "Healthcare", traffic: 1920, conversion: 19.2 },
    { name: "Finance", traffic: 1650, conversion: 31.8 },
    { name: "Marketing", traffic: 1420, conversion: 16.7 },
    { name: "Education", traffic: 980, conversion: 22.1 }
  ];

  const trendData = [
    { month: "Jul", Technology: 2100, Healthcare: 1400, Finance: 1200 },
    { month: "Aug", Technology: 2300, Healthcare: 1600, Finance: 1350 },
    { month: "Sep", Technology: 2500, Healthcare: 1750, Finance: 1500 },
    { month: "Oct", Technology: 2650, Healthcare: 1850, Finance: 1580 },
    { month: "Nov", Technology: 2780, Healthcare: 1900, Finance: 1620 },
    { month: "Dec", Technology: 2840, Healthcare: 1920, Finance: 1650 }
  ];

  const conversionData = [
    { name: "Technology", value: 31, color: "#3b82f6" },
    { name: "Finance", value: 27, color: "#8b5cf6" },
    { name: "Healthcare", value: 23, color: "#10b981" },
    { name: "Marketing", value: 19, color: "#f59e0b" }
  ];

  return (
    <div className="space-y-6">
      <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className={isRTL ? 'text-right' : ''}>
          <h1 className="text-3xl font-bold tracking-tight">{t("analyticsTitle")}</h1>
          <p className="text-muted-foreground">{t("performanceMetrics")}</p>
        </div>
        <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Badge variant="outline">{t("lastSixMonths")}</Badge>
          <Badge variant="outline">{t("realTimeData")}</Badge>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className={isRTL ? 'text-right' : ''}>{t("totalTraffic")}</CardTitle>
            <CardDescription className={isRTL ? 'text-right' : ''}>{t("monthlyUniqueVisitors")}</CardDescription>
          </CardHeader>
          <CardContent className={isRTL ? 'text-right' : ''}>
            <div className="text-3xl font-bold">142.8K</div>
            <div className={`flex items-center text-sm text-green-600 mt-1 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <span>+18.2% {t("fromLastMonth")}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className={isRTL ? 'text-right' : ''}>{t("avgConversionRate")}</CardTitle>
            <CardDescription className={isRTL ? 'text-right' : ''}>{t("acrossAllClusters")}</CardDescription>
          </CardHeader>
          <CardContent className={isRTL ? 'text-right' : ''}>
            <div className="text-3xl font-bold">23.6%</div>
            <div className={`flex items-center text-sm text-green-600 mt-1 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <span>+2.4% {t("fromLastMonth")}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className={isRTL ? 'text-right' : ''}>{t("activeClusters")}</CardTitle>
            <CardDescription className={isRTL ? 'text-right' : ''}>{t("contentGroupings")}</CardDescription>
          </CardHeader>
          <CardContent className={isRTL ? 'text-right' : ''}>
            <div className="text-3xl font-bold">24</div>
            <div className={`flex items-center text-sm text-blue-600 mt-1 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <span>3 {t("newThisMonth")}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className={isRTL ? 'text-right' : ''}>{t("trafficByCluster")}</CardTitle>
            <CardDescription className={isRTL ? 'text-right' : ''}>{t("monthlyVisitorsAndConversion")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="traffic" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className={isRTL ? 'text-right' : ''}>{t("conversionDistribution")}</CardTitle>
            <CardDescription className={isRTL ? 'text-right' : ''}>{t("conversionRatesByCluster")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={conversionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {conversionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className={isRTL ? 'text-right' : ''}>{t("trafficTrends")}</CardTitle>
          <CardDescription className={isRTL ? 'text-right' : ''}>{t("sixMonthPerformance")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Technology" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="Healthcare" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="Finance" stroke="#8b5cf6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
