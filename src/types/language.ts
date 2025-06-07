
export type Language = 'en' | 'ar';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export interface Translations {
  // App title
  appTitle: string;
  appSubtitle: string;
  
  // Navigation
  dashboard: string;
  contentClustering: string;
  analytics: string;
  salesSegmentation: string;
  autoAssignments: string;
  coreModules: string;
  
  // Search
  searchPlaceholder: string;
  filters: string;
  
  // Dashboard
  dashboardTitle: string;
  totalContent: string;
  activeCampaigns: string;
  conversionRate: string;
  revenueThisMonth: string;
  recentActivity: string;
  
  // Content Clustering
  contentClusteringTitle: string;
  smartClustering: string;
  
  // Analytics
  analyticsTitle: string;
  performanceMetrics: string;
  
  // Sales
  salesTitle: string;
  salesPipeline: string;
  
  // Assignments
  assignmentsTitle: string;
  workflowAutomation: string;
  
  // Additional translations
  activeClients: string;
  multiLanguageSupport: string;
  thisWeek: string;
  avgAcrossAllClusters: string;
  allSystemsOperational: string;
  topPerformingClusters: string;
  contentPerformanceByCluster: string;
  staffAutomaticallyAssigned: string;
  smartSuggestions: string;
  aiGeneratedRecommendations: string;
  contentClustersOverview: string;
  performanceMetricsByGroup: string;
  autoClusterContent: string;
  createCluster: string;
  viewDetails: string;
  createContent: string;
  relevance: string;
  totalTraffic: string;
  monthlyUniqueVisitors: string;
  avgConversionRate: string;
  acrossAllClusters: string;
  activeClusters: string;
  contentGroupings: string;
  newThisMonth: string;
  fromLastMonth: string;
  trafficByCluster: string;
  monthlyVisitorsAndConversion: string;
  conversionDistribution: string;
  conversionRatesByCluster: string;
  trafficTrends: string;
  sixMonthPerformance: string;
  lastSixMonths: string;
  realTimeData: string;
  clusterAnalytics: string;
  contentManagement: string;
  performanceInsights: string;
  automatedWorkflow: string;
  clientManagement: string;
  dataVisualization: string;
}
