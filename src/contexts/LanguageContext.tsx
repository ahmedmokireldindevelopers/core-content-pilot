
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
    workflowAutomation: "Workflow Automation",
    
    // Additional translations
    activeClients: "Active Clients",
    multiLanguageSupport: "Multi-language support",
    thisWeek: "This week",
    avgAcrossAllClusters: "Avg. across all clusters",
    allSystemsOperational: "All Systems Operational",
    topPerformingClusters: "Top Performing Clusters",
    contentPerformanceByCluster: "Content performance by cluster segmentation",
    staffAutomaticallyAssigned: "Staff automatically assigned by cluster matching",
    smartSuggestions: "Smart Suggestions",
    aiGeneratedRecommendations: "AI-generated content recommendations based on cluster performance",
    contentClustersOverview: "Content Clusters Overview",
    performanceMetricsByGroup: "Performance metrics by content grouping",
    autoClusterContent: "Auto-Cluster Content",
    createCluster: "Create Cluster",
    viewDetails: "View Details",
    createContent: "Create Content",
    relevance: "Relevance",
    totalTraffic: "Total Traffic",
    monthlyUniqueVisitors: "Monthly unique visitors",
    avgConversionRate: "Avg. Conversion Rate",
    acrossAllClusters: "Across all clusters",
    activeClusters: "Active Clusters",
    contentGroupings: "Content groupings",
    newThisMonth: "new this month",
    fromLastMonth: "from last month",
    trafficByCluster: "Traffic by Cluster",
    monthlyVisitorsAndConversion: "Monthly visitors and conversion rates",
    conversionDistribution: "Conversion Distribution",
    conversionRatesByCluster: "Conversion rates by cluster",
    trafficTrends: "Traffic Trends",
    sixMonthPerformance: "6-month performance by top clusters",
    lastSixMonths: "Last 6 Months",
    realTimeData: "Real-time Data",
    clusterAnalytics: "Cluster Analytics",
    contentManagement: "Content Management",
    performanceInsights: "Performance Insights",
    automatedWorkflow: "Automated Workflow",
    clientManagement: "Client Management",
    dataVisualization: "Data Visualization"
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
    workflowAutomation: "أتمتة سير العمل",
    
    // Additional translations
    activeClients: "العملاء النشطون",
    multiLanguageSupport: "دعم متعدد اللغات",
    thisWeek: "هذا الأسبوع",
    avgAcrossAllClusters: "المتوسط عبر جميع المجموعات",
    allSystemsOperational: "جميع الأنظمة تعمل",
    topPerformingClusters: "أفضل المجموعات أداءً",
    contentPerformanceByCluster: "أداء المحتوى حسب تجميع المجموعات",
    staffAutomaticallyAssigned: "الموظفون المعينون تلقائياً بمطابقة المجموعات",
    smartSuggestions: "الاقتراحات الذكية",
    aiGeneratedRecommendations: "توصيات المحتوى المولدة بالذكاء الاصطناعي بناءً على أداء المجموعات",
    contentClustersOverview: "نظرة عامة على مجموعات المحتوى",
    performanceMetricsByGroup: "مقاييس الأداء حسب تجميع المحتوى",
    autoClusterContent: "تجميع المحتوى تلقائياً",
    createCluster: "إنشاء مجموعة",
    viewDetails: "عرض التفاصيل",
    createContent: "إنشاء محتوى",
    relevance: "الصلة",
    totalTraffic: "إجمالي الزيارات",
    monthlyUniqueVisitors: "الزوار الفريدون الشهريون",
    avgConversionRate: "متوسط معدل التحويل",
    acrossAllClusters: "عبر جميع المجموعات",
    activeClusters: "المجموعات النشطة",
    contentGroupings: "تجميعات المحتوى",
    newThisMonth: "جديد هذا الشهر",
    fromLastMonth: "من الشهر الماضي",
    trafficByCluster: "الزيارات حسب المجموعة",
    monthlyVisitorsAndConversion: "الزوار الشهريون ومعدلات التحويل",
    conversionDistribution: "توزيع التحويل",
    conversionRatesByCluster: "معدلات التحويل حسب المجموعة",
    trafficTrends: "اتجاهات الزيارات",
    sixMonthPerformance: "الأداء لمدة 6 أشهر حسب أفضل المجموعات",
    lastSixMonths: "آخر 6 أشهر",
    realTimeData: "بيانات في الوقت الفعلي",
    clusterAnalytics: "تحليلات المجموعات",
    contentManagement: "إدارة المحتوى",
    performanceInsights: "رؤى الأداء",
    automatedWorkflow: "سير العمل الآلي",
    clientManagement: "إدارة العملاء",
    dataVisualization: "تصور البيانات"
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
