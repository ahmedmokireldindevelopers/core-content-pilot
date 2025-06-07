
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

export function Analytics() {
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Traffic and conversion insights by content clusters</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline">Last 6 Months</Badge>
          <Badge variant="outline">Real-time Data</Badge>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Traffic</CardTitle>
            <CardDescription>Monthly unique visitors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">142.8K</div>
            <div className="flex items-center text-sm text-green-600 mt-1">
              <span>+18.2% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avg. Conversion Rate</CardTitle>
            <CardDescription>Across all clusters</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">23.6%</div>
            <div className="flex items-center text-sm text-green-600 mt-1">
              <span>+2.4% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Clusters</CardTitle>
            <CardDescription>Content groupings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
            <div className="flex items-center text-sm text-blue-600 mt-1">
              <span>3 new this month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Traffic by Cluster</CardTitle>
            <CardDescription>Monthly visitors and conversion rates</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="traffic" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conversion Distribution</CardTitle>
            <CardDescription>Conversion rates by cluster</CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Traffic Trends</CardTitle>
          <CardDescription>6-month performance by top clusters</CardDescription>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>
    </div>
  );
}
