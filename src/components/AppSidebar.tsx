
import {
  BarChart3,
  Brain,
  Settings,
  Users,
  FileText,
  Search,
  Target,
  UserCheck,
  Home
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    key: "dashboard",
  },
  {
    title: "Content Clustering",
    icon: Brain,
    key: "content",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    key: "analytics",
  },
  {
    title: "Sales Segmentation",
    icon: Target,
    key: "sales",
  },
  {
    title: "Auto Assignments",
    icon: UserCheck,
    key: "assignments",
  },
];

export function AppSidebar({ activeModule, setActiveModule }: AppSidebarProps) {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-6">
        <h2 className="text-xl font-bold text-foreground">Content Pilot</h2>
        <p className="text-sm text-muted-foreground">Smart CRM Platform</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Core Modules</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.key}>
                  <SidebarMenuButton
                    onClick={() => setActiveModule(item.key)}
                    isActive={activeModule === item.key}
                    className="w-full justify-start"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
