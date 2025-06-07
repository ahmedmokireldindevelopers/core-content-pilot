
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
    totalContent: "Content Clusters",
    activeCampaigns: "Active content groups",
    conversionRate: "Conversion Rate",
    revenueThisMonth: "Revenue This Month",
    recentActivity: "Recent Auto-Assignments",
    autoAssignments: "Auto-Assignments",
    
    // Content Clustering
    contentClusteringTitle: "Content Clustering",
    smartClustering: "Smart content suggestions and cluster analytics",
    
    // Analytics
    analyticsTitle: "Analytics Dashboard",
    performanceMetrics: "Traffic and conversion insights by content clusters",
    
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
    totalContent: "مجموعات المحتوى",
    activeCampaigns: "مجموعات المحتوى النشطة",
    conversionRate: "معدل التحويل",
    revenueThisMonth: "الإيرادات هذا الشهر",
    recentActivity: "التعيينات التلقائية الأخيرة",
    autoAssignments: "التعيينات التلقائية",
    
    // Content Clustering
    contentClusteringTitle: "تجميع المحتوى",
    smartClustering: "اقتراحات المحتوى الذكية وتحليلات التجميع",
    
    // Analytics
    analyticsTitle: "لوحة التحليلات",
    performanceMetrics: "رؤى حركة المرور والتحويل حسب مجموعات المحتوى",
    
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
