
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Dashboard } from "@/components/Dashboard";
import { ContentClustering } from "@/components/ContentClustering";
import { Analytics } from "@/components/Analytics";
import { SalesSegmentation } from "@/components/SalesSegmentation";
import { AutoAssignments } from "@/components/AutoAssignments";
import { UniversalSearch } from "@/components/UniversalSearch";

const Index = () => {
  const [activeModule, setActiveModule] = useState("dashboard");

  const renderActiveModule = () => {
    switch (activeModule) {
      case "dashboard":
        return <Dashboard />;
      case "content":
        return <ContentClustering />;
      case "analytics":
        return <Analytics />;
      case "sales":
        return <SalesSegmentation />;
      case "assignments":
        return <AutoAssignments />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 flex flex-col">
          <UniversalSearch />
          <div className="flex-1 p-6">
            {renderActiveModule()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
