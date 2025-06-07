
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // App title
    appTitle: "Content Pilot",
    appSubtitle: "Smart CRM Platform",
    
    // Navigation
    dashboard: "Dashboard",
    contentClustering: "Content Clustering",
    analytics: "Analytics",
    salesSegmentation: "Sales Segmentation",
    autoAssignments: "Auto Assignments",
    coreModules: "Core Modules",
    
    // Search
    searchPlaceholder: "Search across all modules, clients, content...",
    filters: "Filters",
    
    // Dashboard
    dashboardTitle: "Dashboard Overview",
    totalContent: "Total Content",
    activeCampaigns: "Active Campaigns", 
    conversionRate: "Conversion Rate",
    revenueThisMonth: "Revenue This Month",
    recentActivity: "Recent Activity",
    
    // Content Clustering
    contentClusteringTitle: "Content Clustering",
    smartClustering: "Smart Content Clustering",
    
    // Analytics
    analyticsTitle: "Analytics Dashboard",
    performanceMetrics: "Performance Metrics",
    
    // Sales
    salesTitle: "Sales Segmentation",
    salesPipeline: "Sales Pipeline",
    
    // Assignments
    assignmentsTitle: "Auto Assignments",
    workflowAutomation: "Workflow Automation"
  },
  ar: {
    // App title
    appTitle: "مرشد المحتوى",
    appSubtitle: "منصة إدارة علاقات العملاء الذكية",
    
    // Navigation
    dashboard: "لوحة التحكم",
    contentClustering: "تجميع المحتوى",
    analytics: "التحليلات",
    salesSegmentation: "تقسيم المبيعات",
    autoAssignments: "التعيينات التلقائية",
    coreModules: "الوحدات الأساسية",
    
    // Search
    searchPlaceholder: "البحث في جميع الوحدات والعملاء والمحتوى...",
    filters: "المرشحات",
    
    // Dashboard
    dashboardTitle: "نظرة عامة على لوحة التحكم",
    totalContent: "إجمالي المحتوى",
    activeCampaigns: "الحملات النشطة",
    conversionRate: "معدل التحويل",
    revenueThisMonth: "الإيرادات هذا الشهر",
    recentActivity: "النشاط الأخير",
    
    // Content Clustering
    contentClusteringTitle: "تجميع المحتوى",
    smartClustering: "تجميع المحتوى الذكي",
    
    // Analytics
    analyticsTitle: "لوحة التحليلات",
    performanceMetrics: "مقاييس الأداء",
    
    // Sales
    salesTitle: "تقسيم المبيعات",
    salesPipeline: "خط أنابيب المبيعات",
    
    // Assignments
    assignmentsTitle: "التعيينات التلقائية",
    workflowAutomation: "أتمتة سير العمل"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
