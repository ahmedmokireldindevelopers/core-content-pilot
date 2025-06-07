
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
import { useLanguage } from "@/contexts/LanguageContext";

interface AppSidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

export function AppSidebar({ activeModule, setActiveModule }: AppSidebarProps) {
  const { t } = useLanguage();

  const menuItems = [
    {
      title: t("dashboard"),
      icon: Home,
      key: "dashboard",
    },
    {
      title: t("contentClustering"),
      icon: Brain,
      key: "content",
    },
    {
      title: t("analytics"),
      icon: BarChart3,
      key: "analytics",
    },
    {
      title: t("salesSegmentation"),
      icon: Target,
      key: "sales",
    },
    {
      title: t("autoAssignments"),
      icon: UserCheck,
      key: "assignments",
    },
  ];

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-6">
        <h2 className="text-xl font-bold text-foreground">{t("appTitle")}</h2>
        <p className="text-sm text-muted-foreground">{t("appSubtitle")}</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t("coreModules")}</SidebarGroupLabel>
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
