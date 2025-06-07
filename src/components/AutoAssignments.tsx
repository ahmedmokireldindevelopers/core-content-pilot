
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { UserCheck, Zap, Clock, Users, Settings, Plus } from "lucide-react";

export function AutoAssignments() {
  const rules = [
    {
      name: "Technology Cluster → Tech Specialists",
      active: true,
      matches: 45,
      accuracy: 94,
      staff: ["Sarah Chen", "Mike Rodriguez", "Alex Kim"],
      cluster: "Technology",
      avgTime: "2.3 min"
    },
    {
      name: "Healthcare → Medical Experts",
      active: true,
      matches: 32,
      accuracy: 91,
      staff: ["Dr. Martinez", "Lisa Johnson", "Paul Wilson"],
      cluster: "Healthcare",
      avgTime: "1.8 min"
    },
    {
      name: "Finance → Financial Advisors",
      active: false,
      matches: 28,
      accuracy: 88,
      staff: ["Emma Davis", "John Smith"],
      cluster: "Finance",
      avgTime: "3.1 min"
    },
    {
      name: "Marketing → Creative Team",
      active: true,
      matches: 38,
      accuracy: 89,
      staff: ["Lisa Wang", "Tom Brown", "Maria Garcia", "Chris Lee"],
      cluster: "Marketing",
      avgTime: "2.7 min"
    }
  ];

  const recentAssignments = [
    {
      client: "TechFlow Systems",
      cluster: "Technology",
      assignedTo: "Sarah Chen",
      time: "2 minutes ago",
      confidence: 96,
      status: "Active"
    },
    {
      client: "HealthCarePlus",
      cluster: "Healthcare",
      assignedTo: "Dr. Martinez",
      time: "5 minutes ago",
      confidence: 92,
      status: "Active"
    },
    {
      client: "FinanceForward",
      cluster: "Finance",
      assignedTo: "Emma Davis",
      time: "8 minutes ago",
      confidence: 89,
      status: "Completed"
    },
    {
      client: "AdVantage Marketing",
      cluster: "Marketing",
      assignedTo: "Lisa Wang",
      time: "12 minutes ago",
      confidence: 94,
      status: "Active"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Completed": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Auto-Assignments</h1>
          <p className="text-muted-foreground">Automated staff assignment by content cluster matching</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Settings className="h-4 w-4" />
            Configure Rules
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Rule
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Active Rules", value: "8", icon: UserCheck, change: "+2 this week" },
          { title: "Auto-Assignments", value: "156", icon: Zap, change: "This week" },
          { title: "Avg. Response Time", value: "2.4 min", icon: Clock, change: "-30s improved" },
          { title: "Success Rate", value: "91.5%", icon: Users, change: "+3.2%" }
        ].map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">{metric.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Assignment Rules</CardTitle>
            <CardDescription>Automated staff assignment by cluster expertise</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm">{rule.name}</h4>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span>{rule.matches} matches</span>
                        <span>{rule.accuracy}% accuracy</span>
                        <span>Avg: {rule.avgTime}</span>
                      </div>
                    </div>
                    <Switch checked={rule.active} />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Accuracy Rate</span>
                      <span>{rule.accuracy}%</span>
                    </div>
                    <Progress value={rule.accuracy} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-medium text-muted-foreground">Assigned Staff:</div>
                    <div className="flex flex-wrap gap-1">
                      {rule.staff.map((person) => (
                        <Badge key={person} variant="secondary" className="text-xs">{person}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Auto-Assignments</CardTitle>
            <CardDescription>Latest automated staff assignments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAssignments.map((assignment, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm">{assignment.client}</h4>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">{assignment.cluster}</Badge>
                        <Badge variant="outline" className={getStatusColor(assignment.status)}>
                          {assignment.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{assignment.confidence}%</div>
                      <div className="text-xs text-muted-foreground">Confidence</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <UserCheck className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{assignment.assignedTo}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{assignment.time}</span>
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
